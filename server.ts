import express, { Request, Response } from 'express';
import path from 'path';
import crypto from 'crypto';
import { initializeApp, getApps, App } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

const app = express();
app.use(express.json());

// Initialize Firebase Admin SDK via Google Application Default Credentials (ADC)
// Zero secret keys in codebase: When running on Google Cloud Run or with IAM,
// ADC automatically leverages the environment's identity.
let adminApp: App | null = null;
let firebaseAdminReady = false;
try {
  if (getApps().length === 0) {
    adminApp = initializeApp({
      projectId: process.env.GOOGLE_CLOUD_PROJECT || 'xenodochial-archery-t4mm2',
    });
  } else {
    adminApp = getApps()[0];
  }
  firebaseAdminReady = true;
  console.log('[Server] Firebase Admin SDK initialized successfully via Application Default Credentials (ADC).');
} catch (err: any) {
  console.warn('[Server] Firebase Admin running in standby mode (ADC pending Cloud IAM configuration):', err?.message);
}

// SHA-256 Salted PIN hashing function (mirrors client-side CryptoService)
function hashPinSync(pin: string, saltHex: string): string {
  return crypto
    .createHash('sha256')
    .update(`hoc_vui_v3_${saltHex}_${pin}`, 'utf8')
    .digest('hex');
}

// Baseline known accounts for server-side verification
const DEFAULT_SALT_A1 = 'a1b2c3d4e5f6';
const DEFAULT_SALT_B2 = 'b2c3d4e5f6a1';
const DEFAULT_SALT_C3 = 'c3d4e5f6a1b2';
const HASH_123456_A1 = '62256aa152f0344110ba0317fe8d41bdc4043d6fe4a78393974ae9afa60f51ba';
const HASH_123456_B2 = '81bde9269cdf40a2d8269870183a76a6d2119ea6ca82f7518a7470dd5b53c527';
const HASH_123456_C3 = '6326918e1f45dfcd87c4b4b2ccdea84377930a9ac335dea179035efae167133a';

const BASELINE_ACCOUNTS = [
  {
    id: 'user_student_8a',
    username: 'tranhocsinh',
    displayName: 'Trần Minh Quang',
    role: 'student',
    className: '8A',
    classId: 'class_8a',
    saltHex: DEFAULT_SALT_A1,
    pinHashHex: HASH_123456_A1,
  },
  {
    id: 'user_student_8b',
    username: 'linhhocsinh',
    displayName: 'Nguyễn Phương Linh',
    role: 'student',
    className: '8B',
    classId: 'class_8b',
    saltHex: DEFAULT_SALT_B2,
    pinHashHex: HASH_123456_B2,
  },
  {
    id: 'user_student_8c',
    username: 'namhocsinh',
    displayName: 'Lê Hoàng Nam',
    role: 'student',
    className: '8C',
    classId: 'class_8c',
    saltHex: DEFAULT_SALT_C3,
    pinHashHex: HASH_123456_C3,
  },
  {
    id: 'user_teacher_mai',
    username: 'giaovienlan',
    displayName: 'Cô Nguyễn Mai Lan',
    role: 'teacher',
    className: '8A',
    classId: 'class_8a',
    assignedClassIds: ['class_8a', 'class_8b', 'class_8c'],
    saltHex: DEFAULT_SALT_B2,
    pinHashHex: HASH_123456_B2,
  },
  {
    id: 'user_teacher_tuan',
    username: 'giaovientuan',
    displayName: 'Thầy Đỗ Văn Tuấn',
    role: 'teacher',
    className: '8B',
    classId: 'class_8b',
    assignedClassIds: ['class_8b', 'class_8c'],
    saltHex: DEFAULT_SALT_A1,
    pinHashHex: HASH_123456_A1,
  },
  {
    id: 'user_admin_school',
    username: 'quantrivien',
    displayName: 'Bùi Cẩm Ly (Admin)',
    role: 'admin',
    saltHex: DEFAULT_SALT_C3,
    pinHashHex: HASH_123456_C3,
  },
  {
    id: 'user_admin_trungvuong',
    username: 'admin_trungvuong',
    displayName: 'Ban Giám Hiệu',
    role: 'admin',
    saltHex: DEFAULT_SALT_A1,
    pinHashHex: HASH_123456_A1,
  },
];

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    firebaseAdminReady,
    timestamp: new Date().toISOString(),
    authMechanism: 'Application Default Credentials (ADC) with Custom Tokens',
  });
});

// Student Login Endpoint (Full Name + Class 8A/8B/8C + PIN)
app.post('/api/auth/student-login', async (req: Request, res: Response) => {
  try {
    const { fullName, className, pin } = req.body;
    if (!fullName || !className || !pin) {
      return res.status(400).json({ error: 'Vui lòng nhập đầy đủ họ tên, lớp và mã PIN.' });
    }

    const cleanName = String(fullName).trim().toLowerCase();
    const cleanClass = String(className).trim().toUpperCase();

    // Find student in baseline accounts
    const student = BASELINE_ACCOUNTS.find(
      (a) =>
        a.role === 'student' &&
        a.displayName.toLowerCase() === cleanName &&
        a.className &&
        a.className.toUpperCase() === cleanClass
    );

    if (!student) {
      return res.status(401).json({ error: 'Không tìm thấy tài khoản.' });
    }

    // Verify PIN with SHA-256 + Salt
    const calculatedHash = hashPinSync(String(pin).trim(), student.saltHex);
    if (calculatedHash !== student.pinHashHex) {
      return res.status(401).json({ error: 'Không tìm thấy tài khoản.' });
    }

    // Attempt to mint Firebase Custom Token
    let customToken: string | null = null;
    let tokenCreated = false;
    let authNote = 'Xác thực PIN nội bộ thành công.';

    if (firebaseAdminReady && adminApp) {
      try {
        customToken = await getAuth(adminApp).createCustomToken(student.id, {
          role: 'student',
          classId: student.className,
        });
        tokenCreated = true;
        authNote = 'Đã cấp Firebase Custom Token chính thức cho học sinh.';
      } catch (tokenErr: any) {
        console.warn('[Server] Custom token generation requires IAM Service Account Token Creator permission:', tokenErr?.message);
        authNote = 'Xác thực PIN thành công. Quyền ký Custom Token IAM trên Google Cloud đang chờ kích hoạt.';
      }
    }

    return res.json({
      success: true,
      user: {
        id: student.id,
        username: student.username,
        displayName: student.displayName,
        role: student.role,
        className: student.className,
        classId: student.classId,
      },
      customToken,
      firebaseAuthReady: tokenCreated,
      message: authNote,
    });
  } catch (error: any) {
    console.error('[Server] Student login error:', error);
    return res.status(500).json({ error: 'Lỗi xử lý xác thực trên máy chủ.' });
  }
});

// Staff Login Endpoint (Username + PIN for Teacher / Admin)
app.post('/api/auth/staff-login', async (req: Request, res: Response) => {
  try {
    const { username, pin, role } = req.body;
    if (!username || !pin) {
      return res.status(400).json({ error: 'Vui lòng nhập tên đăng nhập và mã PIN.' });
    }

    const cleanUser = String(username).trim().toLowerCase();
    const staff = BASELINE_ACCOUNTS.find(
      (a) => a.username.toLowerCase() === cleanUser && (!role || a.role === role)
    );

    if (!staff) {
      return res.status(401).json({ error: 'Không tìm thấy tài khoản.' });
    }

    // Verify PIN with SHA-256 + Salt
    const calculatedHash = hashPinSync(String(pin).trim(), staff.saltHex);
    if (calculatedHash !== staff.pinHashHex) {
      return res.status(401).json({ error: 'Không tìm thấy tài khoản.' });
    }

    // Attempt to mint Firebase Custom Token with role claims
    let customToken: string | null = null;
    let tokenCreated = false;
    let authNote = 'Xác thực PIN nội bộ thành công.';

    if (firebaseAdminReady && adminApp) {
      try {
        customToken = await getAuth(adminApp).createCustomToken(staff.id, {
          role: staff.role,
          assignedClasses: (staff as any).assignedClassIds || [],
        });
        tokenCreated = true;
        authNote = 'Đã cấp Firebase Custom Token chính thức.';
      } catch (tokenErr: any) {
        console.warn('[Server] Custom token generation requires IAM permission:', tokenErr?.message);
        authNote = 'Xác thực PIN thành công. Đang chờ kích hoạt quyền ký IAM Token Creator.';
      }
    }

    return res.json({
      success: true,
      user: {
        id: staff.id,
        username: staff.username,
        displayName: staff.displayName,
        role: staff.role,
        className: (staff as any).className,
        assignedClassIds: (staff as any).assignedClassIds,
      },
      customToken,
      firebaseAuthReady: tokenCreated,
      message: authNote,
    });
  } catch (error: any) {
    console.error('[Server] Staff login error:', error);
    return res.status(500).json({ error: 'Lỗi xử lý xác thực trên máy chủ.' });
  }
});

// AI Student Comment Generation Endpoint (Section II.4)
app.post('/api/ai/generate-comment', async (req: Request, res: Response) => {
  try {
    const {
      studentName,
      subject,
      lessonTitle,
      preClassNotes,
      keyQuestions,
      selfAssessment,
      quizScore,
      totalQuestions = 5,
      weakConcept,
      wrongQuestionsSummary,
      studentAnswers,
    } = req.body;

    if (!studentName || !lessonTitle) {
      return res.status(400).json({ error: 'Thiếu thông tin học sinh hoặc bài học.' });
    }

    const hasNotes = !!preClassNotes && String(preClassNotes).trim().length > 0;
    const hasQuestions = !!keyQuestions && String(keyQuestions).trim().length > 0;
    const hasQuiz = quizScore !== null && quizScore !== undefined;

    if (!hasNotes && !hasQuestions && !hasQuiz) {
      return res.json({ comment: 'Chưa đủ dữ liệu để nhận xét.' });
    }

    const mistakeFocus = wrongQuestionsSummary || weakConcept;

    // Check if GEMINI_API_KEY is configured on server
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey) {
      try {
        const { GoogleGenAI } = await import('@google/genai');
        const ai = new GoogleGenAI({});
        const prompt = `Bạn là giáo viên bộ môn lớp 8 môn ${subject || 'Toán học'}. Hãy viết ĐÚNG MỘT CÂU nhận xét sư phạm hoàn chỉnh (độ dài nghiêm ngặt từ 20 đến 35 từ tiếng Việt) cho học sinh "${studentName}" sau khi kiểm tra phiếu chuẩn bị bài và kết quả trắc nghiệm bài "${lessonTitle}".
Dữ liệu học sinh thực tế:
- Ghi chép kiến thức: ${preClassNotes || 'Không có'}
- Câu hỏi đặt ra: ${keyQuestions || 'Không có'}
- Tự đánh giá: ${selfAssessment || 'Chưa đánh giá'}
- Kết quả trắc nghiệm: ${hasQuiz ? `${quizScore}/${totalQuestions} câu đúng` : 'Chưa làm trắc nghiệm'}
- Chi tiết câu sai/kiến thức cần củng cố: ${mistakeFocus || 'Nắm kiến thức trọng tâm'}
Yêu cầu bắt buộc:
1. Viết ĐÚNG 1 CÂU duy nhất, kết thúc bằng dấu chấm.
2. Số từ phải nằm trong khoảng 20 đến 35 từ tiếng Việt.
3. Ngôn ngữ sư phạm nhẹ nhàng, động viên, chỉ rõ điểm mạnh hoặc kiến thức cụ thể cần ôn luyện dựa trên lỗi sai trắc nghiệm.
4. Tuyệt đối không sao chép nhận xét chung chung.`;

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt,
        });

        const generatedText = response.text ? response.text.trim() : '';
        if (generatedText) {
          const cleanSentence = generatedText.replace(/\n+/g, ' ').trim();
          return res.json({ comment: cleanSentence, source: 'gemini-2.5-flash' });
        }
      } catch (aiErr: any) {
        console.warn('[Server] Gemini API call warning:', aiErr?.message);
      }
    }

    // Pedagogical engine fallback (when GEMINI_API_KEY is not set)
    const nameParts = String(studentName).trim().split(/\s+/);
    const firstName = nameParts[nameParts.length - 1] || 'em';
    const cleanLesson = String(lessonTitle).replace(/^(Bài|Unit)\s*\d+[\s:\-]+/i, '').trim() || lessonTitle;

    let comment = '';
    if (hasQuiz && Number(quizScore) === Number(totalQuestions)) {
      comment = `Em ${firstName} ghi chép phiếu học tập chu đáo, nắm vững toàn bộ kiến thức trọng tâm của ${cleanLesson} và trả lời đúng 5/5 câu hỏi trắc nghiệm, hãy tiếp tục phát huy ở các bài tập nâng cao.`;
    } else if (hasQuiz && Number(quizScore) >= 3) {
      const topic = mistakeFocus || (subject === 'Tiếng Anh 8' ? 'cách dùng từ vựng theo ngữ cảnh' : 'kỹ năng tính toán và dấu');
      comment = `Em ${firstName} ghi chép phiếu đầy đủ và đạt kết quả tốt ${quizScore}/5 câu trắc nghiệm, tuy nhiên cần lưu ý rèn luyện thêm ${topic} để tránh nhầm lẫn đáng tiếc khi làm bài.`;
    } else if (hasQuiz) {
      const topic = mistakeFocus || (subject === 'Tiếng Anh 8' ? 'từ vựng và ngữ pháp của Unit' : 'khái niệm và quy tắc cơ bản');
      comment = `Em ${firstName} có ý thức tự học khi hoàn thành phiếu, tuy nhiên cần đọc kỹ lại phần ${topic} và tích cực trao đổi với thầy cô trên lớp để làm tốt bài trắc nghiệm hơn.`;
    } else if (hasQuestions) {
      comment = `Em ${firstName} chủ động chuẩn bị bài tốt và đặt câu hỏi rất xác đáng về ${cleanLesson}, cần hoàn thành thêm bài trắc nghiệm để tự đánh giá mức độ hiểu bài của mình.`;
    } else {
      comment = `Em ${firstName} ghi chép nội dung bài ${cleanLesson} tương đối rõ ràng, cần hoàn thành bài trắc nghiệm kèm theo để củng cố và kiểm tra kiến thức đã đọc trước.`;
    }

    return res.json({ comment, source: 'pedagogical-rule-engine' });
  } catch (err: any) {
    console.error('[Server] Generate comment error:', err);
    return res.status(500).json({ error: 'Lỗi máy chủ khi tạo nhận xét.' });
  }
});


// Mount Vite or static assets
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';
  // Critical: Always bind to port 3000. In this container environment, process.env.PORT is 8080 (used by Nginx).
  const PORT = 3000;

  const katexFontsPath = path.resolve(process.cwd(), 'node_modules/katex/dist/fonts');
  app.use('/fonts', express.static(katexFontsPath));
  app.use('/node_modules/katex/dist/fonts', express.static(katexFontsPath));

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const react = (await import('@vitejs/plugin-react')).default;
    const tailwindcss = (await import('@tailwindcss/vite')).default;

    const vite = await createViteServer({
      configFile: false,
      plugins: [react(), tailwindcss()],
      resolve: {
        alias: {
          '@': process.cwd(),
        },
      },
      server: {
        middlewareMode: true,
        hmr: false,
        ws: false,
        watch: null,
      },
      appType: 'spa',
    });

    // Clean @vite/client stub for Cloud Run / iframe preview environments
    // Completely eliminates "WebSocket closed without opened" errors while providing
    // full support for runtime style injection and hot context stubs.
    app.get('/@vite/client', (req: Request, res: Response) => {
      res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
      res.send(`
const sheetsMap = new Map();

export function updateStyle(id, content) {
  let style = sheetsMap.get(id);
  if (!style) {
    style = document.querySelector(\`style[data-vite-dev-id="\${id}"]\`);
  }
  if (!style) {
    style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.setAttribute('data-vite-dev-id', id);
    document.head.appendChild(style);
    sheetsMap.set(id, style);
  }
  style.textContent = content;
}

export function removeStyle(id) {
  const style = sheetsMap.get(id) || document.querySelector(\`style[data-vite-dev-id="\${id}"]\`);
  if (style) {
    style.remove();
    sheetsMap.delete(id);
  }
}

export function injectQuery(url, queryToInject) {
  if (!url) return url;
  const index = url.indexOf('?');
  if (index === -1) return \`\${url}?\${queryToInject}\`;
  return \`\${url.slice(0, index)}?\${queryToInject}&\${url.slice(index + 1)}\`;
}

export function createHotContext(ownerPath) {
  return {
    accept: () => {},
    prune: () => {},
    dispose: () => {},
    invalidate: () => {},
    on: () => {},
    send: () => {},
    data: {},
  };
}

export class ErrorOverlay extends HTMLElement {}
if (typeof customElements !== 'undefined' && !customElements.get('vite-error-overlay')) {
  customElements.define('vite-error-overlay', ErrorOverlay);
}

export default {};
`);
    });

    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Server] HỌC VUI MỖI NGÀY server running on port ${PORT} (Mode: ${isProd ? 'production' : 'development'})`);
  });
}

startServer();
