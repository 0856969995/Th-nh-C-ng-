import { 
  Subject, 
  Chapter, 
  LessonPreview, 
  QuickQuiz, 
  AchievementBadge, 
  StudentProfile, 
  GardenPlant 
} from '../types';

export const INITIAL_SUBJECTS: Subject[] = [
  {
    id: 'toan',
    name: 'Toán học 8',
    shortName: 'Toán 8',
    tagline: 'Đa thức, Hằng đẳng thức, Phân thức & Định lí Thalès',
    iconName: 'Calculator',
    colorBg: 'bg-sky-50 dark:bg-sky-950/40',
    colorBorder: 'border-sky-200 dark:border-sky-800',
    colorText: 'text-sky-700 dark:text-sky-300',
    colorAccent: 'bg-sky-500',
    totalChapters: 6,
    totalLessons: 24,
  },
  {
    id: 'tienganh',
    name: 'Tiếng Anh 8',
    shortName: 'Tiếng Anh 8',
    tagline: 'Từ vựng chủ đề, ngữ pháp V-ing, so sánh trạng từ & liên từ',
    iconName: 'Languages',
    colorBg: 'bg-blue-50 dark:bg-blue-950/40',
    colorBorder: 'border-blue-200 dark:border-blue-800',
    colorText: 'text-blue-700 dark:text-blue-300',
    colorAccent: 'bg-blue-500',
    totalChapters: 12,
    totalLessons: 96,
  },
];

export const INITIAL_CHAPTERS: Chapter[] = [
  // --- TOÁN 8 ---
  {
    id: 'ch_toan_1',
    subjectId: 'toan',
    chapterNumber: 1,
    title: 'Chương I: Đa thức',
    description: 'Sách giáo khoa Toán 8 (Tập một - Kết nối tri thức với cuộc sống, Trang 5–28)',
    totalLessons: 5,
  },
  {
    id: 'ch_toan_2',
    subjectId: 'toan',
    chapterNumber: 2,
    title: 'Chương II: Hằng đẳng thức đáng nhớ và ứng dụng',
    description: 'Sách giáo khoa Toán 8 (Tập một - Kết nối tri thức với cuộc sống, Trang 29–48)',
    totalLessons: 4,
  },
  {
    id: 'ch_toan_3',
    subjectId: 'toan',
    chapterNumber: 3,
    title: 'Chương III: Tứ giác',
    description: 'Sách giáo khoa Toán 8 (Tập một - Kết nối tri thức với cuộc sống)',
    totalLessons: 5,
  },
  {
    id: 'ch_toan_4',
    subjectId: 'toan',
    chapterNumber: 4,
    title: 'Chương IV: Định lí Thalès',
    description: 'Sách giáo khoa Toán 8 (Tập hai - Kết nối tri thức với cuộc sống)',
    totalLessons: 3,
  },
  {
    id: 'ch_toan_5',
    subjectId: 'toan',
    chapterNumber: 5,
    title: 'Chương V: Dữ liệu và biểu đồ',
    description: 'Sách giáo khoa Toán 8 (Tập một - Kết nối tri thức với cuộc sống)',
    totalLessons: 3,
  },
  {
    id: 'ch_toan_6',
    subjectId: 'toan',
    chapterNumber: 6,
    title: 'Chương VI: Phân thức đại số',
    description: 'Sách giáo khoa Toán 8 (Tập hai - Kết nối tri thức với cuộc sống)',
    totalLessons: 4,
  },

  // --- TIẾNG ANH 8 ---
  {
    id: 'ch_tienganh_1',
    subjectId: 'tienganh',
    chapterNumber: 1,
    title: 'Unit 1: Leisure Time',
    description: 'Sách giáo khoa Tiếng Anh 8',
    totalLessons: 8,
  },
  {
    id: 'ch_tienganh_2',
    subjectId: 'tienganh',
    chapterNumber: 2,
    title: 'Unit 2: Life in the Countryside',
    description: 'Sách giáo khoa Tiếng Anh 8',
    totalLessons: 8,
  },
  {
    id: 'ch_tienganh_3',
    subjectId: 'tienganh',
    chapterNumber: 3,
    title: 'Unit 3: Teenagers',
    description: 'Sách giáo khoa Tiếng Anh 8',
    totalLessons: 8,
  },
  {
    id: 'ch_tienganh_4',
    subjectId: 'tienganh',
    chapterNumber: 4,
    title: 'Unit 4: Ethnic Groups of Viet Nam',
    description: 'Sách giáo khoa Tiếng Anh 8',
    totalLessons: 8,
  },
  {
    id: 'ch_tienganh_5',
    subjectId: 'tienganh',
    chapterNumber: 5,
    title: 'Unit 5: Our Customs and Traditions',
    description: 'Sách giáo khoa Tiếng Anh 8',
    totalLessons: 8,
  },
  {
    id: 'ch_tienganh_6',
    subjectId: 'tienganh',
    chapterNumber: 6,
    title: 'Unit 6: Lifestyles',
    description: 'Sách giáo khoa Tiếng Anh 8',
    totalLessons: 8,
  },
  {
    id: 'ch_tienganh_7',
    subjectId: 'tienganh',
    chapterNumber: 7,
    title: 'Unit 7: Environmental Protection',
    description: 'Sách giáo khoa Tiếng Anh 8',
    totalLessons: 8,
  },
  {
    id: 'ch_tienganh_8',
    subjectId: 'tienganh',
    chapterNumber: 8,
    title: 'Unit 8: Shopping',
    description: 'Sách giáo khoa Tiếng Anh 8',
    totalLessons: 8,
  },
  {
    id: 'ch_tienganh_9',
    subjectId: 'tienganh',
    chapterNumber: 9,
    title: 'Unit 9: Natural Disasters',
    description: 'Sách giáo khoa Tiếng Anh 8',
    totalLessons: 8,
  },
  {
    id: 'ch_tienganh_10',
    subjectId: 'tienganh',
    chapterNumber: 10,
    title: 'Unit 10: Communication in the Future',
    description: 'Sách giáo khoa Tiếng Anh 8',
    totalLessons: 8,
  },
  {
    id: 'ch_tienganh_11',
    subjectId: 'tienganh',
    chapterNumber: 11,
    title: 'Unit 11: Science and Technology',
    description: 'Sách giáo khoa Tiếng Anh 8',
    totalLessons: 8,
  },
  {
    id: 'ch_tienganh_12',
    subjectId: 'tienganh',
    chapterNumber: 12,
    title: 'Unit 12: Life on Other Planets',
    description: 'Sách giáo khoa Tiếng Anh 8',
    totalLessons: 8,
  },
];

export const INITIAL_LESSONS: LessonPreview[] = [
  // --- TOÁN 8: CHƯƠNG 1 ---
  {
    id: 'toan_ch1_b1',
    subjectId: 'toan',
    subjectName: 'Toán học 8',
    chapterId: 'ch_toan_1',
    chapterNumber: 1,
    lessonNumber: 1,
    title: 'Bài 1: Đơn thức',
    chapter: 'Chương I: Đa thức',
    readTimeMinutes: 6,
    summary: 'Môn: Toán 8 · Bộ sách: Kết nối tri thức với cuộc sống (Tập một, Trang 5–10 SGK). Nắm vững khái niệm đơn thức, đơn thức thu gọn, hệ số, phần biến, bậc và quy tắc cộng, trừ đơn thức đồng dạng.',
    keyConcepts: [
      {
        term: '1. Khái niệm đơn thức',
        definition: 'Đơn thức là biểu thức đại số chỉ gồm một số, hoặc một biến, hoặc một tích giữa các số và các biến.',
        example: 'Ví dụ nhận biết: $xy$; $-2x^2y$; $\\frac{1}{3}x^2y^3$; $\\sqrt{2}x$; $5$; $x$; $y$ là các đơn thức. Ngược lại: $x + 2y$; $x - y$; $\\frac{x}{y}$; $3x + \\sqrt{y}$ KHÔNG phải là đơn thức.'
      },
      {
        term: '2. Đơn thức thu gọn, hệ số và phần biến',
        definition: 'Đơn thức thu gọn là đơn thức chỉ gồm tích của một số với các biến mà mỗi biến đã được nâng lên lũy thừa với số mũ nguyên dương. Số nói trên là hệ số, phần còn lại là phần biến của đơn thức thu gọn.',
        example: 'Với đơn thức thu gọn $-6x^3y^2$, hệ số là $-6$, phần biến là $x^3y^2$. Khi viết, thường viết hệ số trước, phần biến sau theo thứ tự bảng chữ cái.'
      },
      {
        term: '3. Bậc của đơn thức',
        definition: 'Tổng số mũ của tất cả các biến có trong đơn thức thu gọn (với hệ số khác 0) gọi là bậc của đơn thức đó.',
        example: 'Đơn thức $-6x^3y^2$ có bậc là $3 + 2 = 5$. Đơn thức $2x^2y$ có bậc là $2 + 1 = 3$.'
      },
      {
        term: '4. Chú ý trong SGK về đơn thức',
        definition: 'Ta coi một số khác 0 là đơn thức thu gọn, chỉ có hệ số và có bậc là 0. Số 0 cũng được coi là một đơn thức, gọi là đơn thức không. Đơn thức không không có bậc.',
        example: 'Số $5$ là đơn thức bậc 0. Số $0$ là đơn thức không (không có bậc).'
      },
      {
        term: '5. Hai đơn thức đồng dạng',
        definition: 'Hai đơn thức đồng dạng là hai đơn thức với hệ số khác 0 và có cùng phần biến. (Nhận xét: Hai đơn thức đồng dạng thì có cùng bậc).',
        example: 'Ví dụ: $2x^2y$ và $-5x^2y$ là hai đơn thức đồng dạng. Phản ví dụ: $2xy$ và $2x^2y$ không đồng dạng; $3x^2$ và $3x$ không đồng dạng.'
      },
      {
        term: '6. Cộng, trừ đơn thức đồng dạng',
        definition: 'Để cộng (hay trừ) các đơn thức đồng dạng, ta cộng (hay trừ) các hệ số với nhau và giữ nguyên phần biến.',
        example: 'Ví dụ cụ thể SGK:\n\n$$2x^2y + 3x^2y = (2 + 3)x^2y = 5x^2y$$\n\n$$7xy^2 - 4xy^2 = (7 - 4)xy^2 = 3xy^2$$\n\n$$-6x^3y^2 - 4x^3y^2 = (-6 - 4)x^3y^2 = -10x^3y^2$$'
      }
    ],
    importantTakeaways: [
      'Định nghĩa chuẩn: Đơn thức chỉ gồm một số, một biến hoặc tích giữa các số và biến. Không chứa phép cộng, trừ giữa các biến hay phép chia cho biến.',
      'Chú ý về bậc: Số khác 0 là đơn thức bậc 0; số 0 là đơn thức không, không có bậc.',
      'Hai đơn thức đồng dạng phải thỏa mãn: hệ số khác 0 và CÙNG phần biến (các biến và số mũ tương ứng hoàn toàn giống nhau).',
      'Quy tắc cộng trừ bằng lời theo SGK: Cộng (hay trừ) các hệ số với nhau và giữ nguyên phần biến. Tuyệt đối không thay đổi số mũ của biến.',
      'Mục Em có biết: Không có trong nội dung bài hoặc chưa xác minh dữ liệu SGK (để trống theo nguyên tắc).'
    ],
    preClassQuestion: 'Biểu thức nào sau đây là đơn thức: $3xy$ hay $x + 2y$? Vì sao?',
    teacherTips: 'Khi xác định hệ số, hãy chú ý dấu âm đứng trước số (ví dụ: với $-6x^3y^2$, hệ số là $-6$, không phải $6$). Hai đơn thức đồng dạng thì có cùng bậc.'
  },
  {
    id: 'toan_ch1_b2',
    subjectId: 'toan',
    subjectName: 'Toán học 8',
    chapterId: 'ch_toan_1',
    chapterNumber: 1,
    lessonNumber: 2,
    title: 'Bài 2: Đa thức',
    chapter: 'Chương I: Đa thức',
    readTimeMinutes: 5,
    summary: 'Môn: Toán 8 · Bộ sách: Kết nối tri thức với cuộc sống, Chương I: Đa thức. Nắm vững khái niệm đa thức, các hạng tử của đa thức và cách thu gọn đa thức.',
    keyConcepts: [
      {
        term: '1. Khái niệm đa thức',
        definition: 'Đa thức là tổng của những đơn thức. Mỗi đơn thức trong tổng gọi là một hạng tử của đa thức.\n\nMỗi đơn thức cũng được coi là một đa thức.',
        example: 'Cho đa thức:\n$$A = x^3 - 3x^2y + 3xy^2 - y^3 + xy - 1$$\nĐa thức $A$ có 6 hạng tử là:\n$x^3$; $-3x^2y$; $3xy^2$; $-y^3$; $xy$; $-1$.'
      },
      {
        term: '2. Đa thức thu gọn',
        definition: 'Trong một đa thức, nếu có các hạng tử đồng dạng thì ta có thể thu gọn đa thức bằng cách nhóm các hạng tử đồng dạng và thực hiện phép cộng các hạng tử đồng dạng trong từng nhóm.\n\nĐa thức thu gọn là đa thức không có hai hạng tử nào đồng dạng.',
        example: 'Xét đa thức:\n$$B = 2x^2 - 3xy + x^2 - 3y^2 + 5xy$$\nTa nhóm các hạng tử đồng dạng:\n$$B = (2x^2 + x^2) + (-3xy + 5xy) - 3y^2$$\n$$B = 3x^2 + 2xy - 3y^2$$\nVậy đa thức thu gọn là:\n$$B = 3x^2 + 2xy - 3y^2$$.'
      }
    ],
    importantTakeaways: [
      'Đa thức là tổng của những đơn thức. Mỗi đơn thức trong tổng gọi là một hạng tử của đa thức.',
      'Mỗi đơn thức cũng được coi là một đa thức.',
      'Đa thức thu gọn là đa thức không có hai hạng tử nào đồng dạng.',
      'Cách thu gọn: Nhóm các hạng tử đồng dạng và cộng các hạng tử đồng dạng trong từng nhóm.'
    ],
    preClassQuestion: 'Trong đa thức $A = x^2 + 3xy - 2y + 5$ có bao nhiêu hạng tử?',
    teacherTips: 'Khi xác định các hạng tử của một đa thức, cần chú ý dấu đứng trước mỗi hạng tử (ví dụ: trong biểu thức có $-3x^2y$, hạng tử là $-3x^2y$).'
  },
  {
    id: 'toan_ch1_b3',
    subjectId: 'toan',
    subjectName: 'Toán học 8',
    chapterId: 'ch_toan_1',
    chapterNumber: 1,
    lessonNumber: 3,
    title: 'Bài 3: Phép cộng và phép trừ đa thức',
    chapter: 'Chương I: Đa thức',
    readTimeMinutes: 5,
    summary: 'Môn: Toán 8 · Bộ sách: Kết nối tri thức với cuộc sống, Chương I: Đa thức. Nắm vững quy tắc cộng và trừ hai đa thức, các tính chất giao hoán, kết hợp và kỹ năng nhóm hạng tử đồng dạng để thu gọn.',
    keyConcepts: [
      {
        term: '1. Quy tắc cộng và trừ hai đa thức',
        definition: 'Muốn cộng (hay trừ) hai đa thức, ta nối hai đa thức đã cho bởi dấu “+” (hay dấu “−”) rồi bỏ dấu ngoặc (nếu có) và thu gọn đa thức nhận được.',
      },
      {
        term: '2. Ví dụ minh họa',
        definition: '',
        example: 'Cho hai đa thức:\n$$\\begin{aligned} A &= 5x^2y + 5x - 3z \\\\ B &= xy - 4x^2y + 5x - 1 \\end{aligned}$$\n\n**Thực hiện phép cộng hai đa thức A và B:**\n$$\\begin{aligned} A + B &= (5x^2y + 5x - 3z) \\\\ &\\quad + (xy - 4x^2y + 5x - 1) \\\\ &= 5x^2y + 5x - 3z \\\\ &\\quad + xy - 4x^2y + 5x - 1 \\\\ &= (5x^2y - 4x^2y) + (5x + 5x) \\\\ &\\quad + xy - 3z - 1 \\\\ &= x^2y + 10x + xy - 3z - 1 \\end{aligned}$$\n\n**Thực hiện phép trừ hai đa thức A và B:**\n$$\\begin{aligned} A - B &= (5x^2y + 5x - 3z) \\\\ &\\quad - (xy - 4x^2y + 5x - 1) \\\\ &= 5x^2y + 5x - 3z \\\\ &\\quad - xy + 4x^2y - 5x + 1 \\\\ &= 9x^2y - xy - 3z + 1 \\end{aligned}$$'
      },
      {
        term: '3. Chú ý',
        definition: 'Phép cộng đa thức cũng có các tính chất giao hoán và kết hợp tương tự như phép cộng các số. Với $A, B, C$ là những đa thức tùy ý, ta có:\n$$\\begin{aligned} A + B &= B + A \\\\ (A + B) + C &= A + (B + C) \\end{aligned}$$\nNếu $A - B = C$ thì:\n$$A = B + C$$\nNgược lại, nếu $A = B + C$ thì:\n$$A - B = C$$'
      }
    ],
    importantTakeaways: [
      'Muốn cộng (hay trừ) hai đa thức, ta nối hai đa thức đã cho bởi dấu “+” (hay dấu “−”) rồi bỏ dấu ngoặc (nếu có) và thu gọn đa thức nhận được.',
      'Phép cộng đa thức có tính chất giao hoán và kết hợp: A + B = B + A; (A + B) + C = A + (B + C).',
      'Mối quan hệ giữa phép cộng và trừ: Nếu A − B = C thì A = B + C; ngược lại nếu A = B + C thì A − B = C.'
    ],
    preClassQuestion: 'Nêu quy tắc cộng (hay trừ) hai đa thức theo sách giáo khoa.',
    teacherTips: 'Khi thực hiện phép trừ đa thức, hãy đặc biệt cẩn thận khi bỏ dấu ngoặc có dấu "−" đứng trước: phải đổi dấu tất cả các hạng tử bên trong ngoặc.'
  },
  {
    id: 'toan_ch1_b4',
    subjectId: 'toan',
    subjectName: 'Toán học 8',
    chapterId: 'ch_toan_1',
    chapterNumber: 1,
    lessonNumber: 4,
    title: 'Bài 4: Phép nhân đa thức',
    chapter: 'Chương I: Đa thức',
    readTimeMinutes: 5,
    summary: 'Môn: Toán 8 · Bộ sách: Kết nối tri thức với cuộc sống, Chương I: Đa thức (Trang 20–21). Nhân đơn thức với đa thức, nhân đa thức với đa thức và các tính chất phép nhân.',
    keyConcepts: [
      {
        term: '1. NHÂN ĐƠN THỨC VỚI ĐA THỨC',
        definition: '**Quy tắc:**\nMuốn nhân một đơn thức với một đa thức, ta nhân đơn thức với từng hạng tử của đa thức rồi cộng các tích với nhau.',
        example: '**Ví dụ 1 trong SGK:**\nThực hiện phép nhân:\n$$\\left(-\\frac{1}{3}xy^3\\right) \\cdot (9x^2yz)$$\nGiải:\n$$\\begin{aligned} \\left(-\\frac{1}{3}xy^3\\right) \\cdot (9x^2yz) &= \\left(-\\frac{1}{3}\\right) \\cdot 9 \\cdot (xy^3)(x^2yz) \\\\ &= -3x^3y^4z \\end{aligned}$$\n\n**Ví dụ 2 trong SGK:**\nThực hiện phép nhân:\n$$(-4xy) \\cdot (2x^2 + xy - y^2)$$\nGiải:\n$$\\begin{aligned} (-4xy) \\cdot (2x^2 + xy - y^2) &= (-4xy) \\cdot 2x^2 + (-4xy) \\cdot xy + (-4xy) \\cdot (-y^2) \\\\ &= -8x^3y - 4x^2y^2 + 4xy^3 \\end{aligned}$$'
      },
      {
        term: '2. NHÂN ĐA THỨC VỚI ĐA THỨC',
        definition: '**Quy tắc:**\nMuốn nhân một đa thức với một đa thức, ta nhân mỗi hạng tử của đa thức này với từng hạng tử của đa thức kia rồi cộng các kết quả với nhau.\n\n**Chú ý:**\nPhép nhân đa thức cũng có các tính chất tương tự như phép nhân các số:\n- Giao hoán:\n$$A \\cdot B = B \\cdot A$$\n- Kết hợp:\n$$(A \\cdot B) \\cdot C = A \\cdot (B \\cdot C)$$\n- Phân phối đối với phép cộng:\n$$A \\cdot (B + C) = A \\cdot B + A \\cdot C$$\nNếu $A, B, C$ là những đa thức tùy ý thì:\n$$A \\cdot B \\cdot C = (A \\cdot B) \\cdot C = A \\cdot (B \\cdot C)$$',
        example: '**Ví dụ 3 trong SGK:**\nTrở lại tình huống mở đầu, ta thực hiện phép nhân:\n$$\\begin{aligned} (x + 3y + 2)(x + y) &= x^2 + xy + 3xy + 3y^2 + 2x + 2y \\\\ &= x^2 + 4xy + 3y^2 + 2x + 2y \\end{aligned}$$\nTa thấy kết quả cũng là một đa thức.\n\n**Ví dụ 4 trong SGK:**\nRút gọn biểu thức:\n$$(x + y)(2x - y) - (x - y)(2x + y)$$\nGiải:\nBiểu thức đã cho có dạng $A - B$, trong đó:\n$A = (x + y)(2x - y)$ và $B = (x - y)(2x + y)$.\n\nTa tính riêng từng biểu thức $A$ và $B$:\n- $A = (x + y)(2x - y) = 2x^2 + xy - y^2$.\n- $B = (x - y)(2x + y) = 2x^2 - xy - y^2$.\n\nTừ đó ta có:\n$$\\begin{aligned} (x + y)(2x - y) - (x - y)(2x + y) &= A - B \\\\ &= (2x^2 + xy - y^2) - (2x^2 - xy - y^2) \\\\ &= 2x^2 + xy - y^2 - 2x^2 + xy + y^2 \\\\ &= 2xy \\end{aligned}$$'
      }
    ],
    importantTakeaways: [
      'Muốn nhân một đơn thức với một đa thức: Nhân đơn thức với từng hạng tử của đa thức rồi cộng các tích với nhau.',
      'Muốn nhân một đa thức với một đa thức: Nhân mỗi hạng tử của đa thức này với từng hạng tử của đa thức kia rồi cộng các kết quả với nhau.',
      'Tính chất phép nhân đa thức: Giao hoán (A · B = B · A), kết hợp ((A · B) · C = A · (B · C)), phân phối (A · (B + C) = A · B + A · C).'
    ],
    preClassQuestion: 'Nêu quy tắc nhân đơn thức với đa thức theo SGK Toán 8.',
    teacherTips: 'Khi thực hiện phép nhân đa thức, chú ý nhân hết các hạng tử và quy tắc dấu (âm nhân âm bằng dương, âm nhân dương bằng âm) trước khi thu gọn các hạng tử đồng dạng.'
  },
  {
    id: 'toan_ch1_b5',
    subjectId: 'toan',
    subjectName: 'Toán học 8',
    chapterId: 'ch_toan_1',
    chapterNumber: 1,
    lessonNumber: 5,
    title: 'Bài 5: Phép chia đa thức cho đơn thức',
    chapter: 'Chương I: Đa thức',
    readTimeMinutes: 5,
    summary: 'Môn: Toán 8 · Bộ sách: Kết nối tri thức với cuộc sống, Chương I: Đa thức (Trang 22–24). Khái niệm chia hết, quy tắc chia đơn thức cho đơn thức và chia đa thức cho đơn thức.',
    keyConcepts: [
      {
        term: '1. CHIA ĐƠN THỨC CHO ĐƠN THỨC',
        definition: '**Khái niệm và cách viết phép chia:**\nCho hai đa thức $A$ và $B$ với $B \\ne 0$ (tức là $B$ khác đa thức 0). Ta nói đa thức $A$ chia hết cho đa thức $B$ nếu có đa thức $Q$ sao cho:\n$$A = B \\cdot Q$$\nKhi đó ta viết: $A : B = Q$ hoặc $\\frac{A}{B} = Q$.\nTương tự, đối với đơn thức, ta xét phép chia hết giữa hai đơn thức.\n\n**Kết luận:**\na) Đơn thức $A$ chia hết cho đơn thức $B$ ($B \\ne 0$) khi mọi biến của $B$ đều là biến của $A$ với số mũ không lớn hơn số mũ của biến đó trong $A$.\nb) Muốn chia đơn thức $A$ cho đơn thức $B$ (trường hợp chia hết), ta làm như sau:\n- Chia hệ số của $A$ cho hệ số của $B$.\n- Chia lũy thừa của từng biến trong $A$ cho lũy thừa của cùng biến đó trong $B$.\n- Nhân các kết quả tìm được với nhau.',
        example: '**Ví dụ 1 trong SGK:**\nCho đơn thức $A = 5x^2yz^3$.\n\na) Giải thích tại sao $A$ không chia hết cho $B = x^2y^2z^2$.\n**Giải:**\nTa thấy số mũ của $y$ trong $B$ bằng 2, lớn hơn số mũ của $y$ trong $A$ (bằng 1). Do đó, $A$ không chia hết cho $B$.\n\nb) Giải thích tại sao $A$ chia hết cho $C = -2x^2z^2$. Tìm thương của phép chia $A : C$.\n**Giải:**\n$A$ chia hết cho $C$ vì tất cả các biến trong $C$ có trong $A$ và số mũ của các biến $x$ và $z$ trong $C$ cùng bằng 2, không lớn hơn số mũ của $x$ (bằng 2) và $z$ (bằng 3) trong $A$.\nTa có:\n$$\\begin{aligned} A : C &= 5x^2yz^3 : (-2x^2z^2) \\\\ &= -\\frac{5}{2}yz \\end{aligned}$$'
      },
      {
        term: '2. CHIA ĐA THỨC CHO ĐƠN THỨC',
        definition: '**Nhận xét:**\nVới phép chia đa thức cho đơn thức, chúng ta chỉ xét trường hợp chia hết. Đa thức $A$ chia hết cho đơn thức $B$ nếu mọi hạng tử của $A$ đều chia hết cho $B$.\n\n**Quy tắc:**\nMuốn chia đa thức $A$ cho đơn thức $B$ ta chia từng hạng tử của $A$ cho $B$ rồi cộng các kết quả với nhau.',
        example: '**Ví dụ 2 trong SGK:**\nThực hiện phép chia:\n$$(15x^2y^4 - 4x^3y^3 + 20x^2y) : 5x^2y$$\n**Giải:**\n$$\\begin{aligned} (15x^2y^4 - 4x^3y^3 + 20x^2y) : 5x^2y &= (15x^2y^4 : 5x^2y) + (-4x^3y^3 : 5x^2y) + (20x^2y : 5x^2y) \\\\ &= 3y^3 - \\frac{4}{5}xy^2 + 4 \\end{aligned}$$'
      }
    ],
    importantTakeaways: [
      'Đơn thức A chia hết cho đơn thức B (B ≠ 0) khi mọi biến của B đều là biến của A với số mũ không lớn hơn số mũ của biến đó trong A.',
      'Quy tắc chia đơn thức cho đơn thức: Chia hệ số của A cho hệ số của B; chia lũy thừa của từng biến trong A cho lũy thừa của cùng biến đó trong B; nhân các kết quả tìm được với nhau.',
      'Quy tắc chia đa thức cho đơn thức: Muốn chia đa thức A cho đơn thức B, ta chia từng hạng tử của A cho B rồi cộng các kết quả với nhau.'
    ],
    preClassQuestion: 'Đơn thức A chia hết cho đơn thức B khi nào?',
    teacherTips: 'Khi chia đa thức cho đơn thức, luôn chú ý dấu của từng hạng tử và thực hiện cẩn thận phép chia phân số của hệ số.'
  },

  // --- TOÁN 8: CHƯƠNG 2 ---
  {
    id: 'toan_ch2_b6',
    subjectId: 'toan',
    subjectName: 'Toán học 8',
    chapterId: 'ch_toan_2',
    chapterNumber: 2,
    lessonNumber: 6,
    title: 'Bài 6: Hiệu hai bình phương. Bình phương của một tổng. Bình phương của một hiệu',
    chapter: 'Chương II: Hằng đẳng thức đáng nhớ và ứng dụng',
    readTimeMinutes: 6,
    summary: 'Môn: Toán 8 · Bộ sách: Kết nối tri thức với cuộc sống, Chương II: Hằng đẳng thức đáng nhớ và ứng dụng. Hằng đẳng thức, hiệu hai bình phương, bình phương của một tổng và bình phương của một hiệu.',
    keyConcepts: [
      {
        term: '1. Hằng đẳng thức',
        definition: 'Nếu hai biểu thức $A$ và $B$ luôn nhận cùng một giá trị khi thay các biến bởi các số tùy ý thì ta nói $A = B$ là một đồng nhất thức hay một hằng đẳng thức.',
        example: '**Ví dụ 1:** Các đẳng thức thường gặp như $a + b = b + a$; $ab = ba$; $a(b + c) = ab + ac$ là những hằng đẳng thức.\n\n**Ví dụ 2:**\na) Đẳng thức $a(a - 2) = a^2 - 2a$ là hằng đẳng thức.\nb) Đẳng thức $a^2 - 1 = 3a$ không phải là hằng đẳng thức vì khi thay $a = 1$ thì hai vế không bằng nhau.'
      },
      {
        term: '2. Hiệu hai bình phương',
        definition: 'Với hai biểu thức $A, B$ tùy ý, ta có:\n$$\\boxed{A^2 - B^2 = (A - B)(A + B)}$$',
        example: '**Ví dụ 3:**\na) Tính nhanh:\n$$101^2 - 99^2 = (101 - 99)(101 + 99) = 2 \\cdot 200 = 400$$\nb) Viết $x^2 - 4$ dưới dạng tích:\n$$x^2 - 4 = x^2 - 2^2 = (x - 2)(x + 2)$$'
      },
      {
        term: '3. Bình phương của một tổng',
        definition: 'Với hai biểu thức $A, B$ tùy ý, ta có:\n$$\\boxed{(A + B)^2 = A^2 + 2AB + B^2}$$',
        example: '**Ví dụ 4:**\na) Tính nhanh:\n$$101^2 = (100 + 1)^2 = 100^2 + 2 \\cdot 100 \\cdot 1 + 1^2 = 10\\,201$$\nb) Khai triển:\n$$(2x + y)^2 = (2x)^2 + 2 \\cdot 2x \\cdot y + y^2 = 4x^2 + 4xy + y^2$$\n\n**Ví dụ 5:** Viết biểu thức sau dưới dạng bình phương của một tổng:\n$$x^2 + 4xy + 4y^2 = x^2 + 2 \\cdot x \\cdot 2y + (2y)^2 = (x + 2y)^2$$'
      },
      {
        term: '4. Bình phương của một hiệu',
        definition: 'Với hai biểu thức $A, B$ tùy ý, ta có:\n$$\\boxed{(A - B)^2 = A^2 - 2AB + B^2}$$',
        example: '**Ví dụ 6:**\na) Tính nhanh:\n$$99^2 = (100 - 1)^2 = 100^2 - 2 \\cdot 100 \\cdot 1 + 1^2 = 9\\,801$$\nb) Khai triển:\n$$\\left(x - \\frac{3}{2}\\right)^2 = x^2 - 2 \\cdot x \\cdot \\frac{3}{2} + \\left(\\frac{3}{2}\\right)^2 = x^2 - 3x + \\frac{9}{4}$$'
      }
    ],
    importantTakeaways: [],
    preClassQuestion: 'Viết công thức hằng đẳng thức hiệu hai bình phương và cho biết kết quả tính nhanh 101² − 99².',
    teacherTips: 'Khi khai triển hoặc viết lại dưới dạng bình phương, cần xác định chính xác biểu thức A và B, chú ý dấu ngoặc khi A hoặc B có hệ số khác 1.'
  },
  {
    id: 'toan_ch2_b7',
    subjectId: 'toan',
    subjectName: 'Toán học 8',
    chapterId: 'ch_toan_2',
    chapterNumber: 2,
    lessonNumber: 7,
    title: 'Bài 7: Lập phương của một tổng. Lập phương của một hiệu',
    chapter: 'Chương II: Hằng đẳng thức đáng nhớ và ứng dụng',
    readTimeMinutes: 5,
    summary: 'Môn: Toán 8 · Bộ sách: Kết nối tri thức với cuộc sống, Chương II: Hằng đẳng thức đáng nhớ và ứng dụng. Lập phương của một tổng và lập phương của một hiệu.',
    keyConcepts: [
      {
        term: '1. Lập phương của một tổng',
        definition: 'Với hai biểu thức $A, B$, ta có:\n$$(A + B)^3 = A^3 + 3A^2B + 3AB^2 + B^3$$',
        example: '**Ví dụ 1. Khai triển lập phương của một tổng:**\na) $(x + 2)^3$\n$$\\begin{aligned} (x + 2)^3 &= x^3 + 3x^2 \\cdot 2 + 3x \\cdot 2^2 + 2^3 \\\\ &= x^3 + 6x^2 + 12x + 8 \\end{aligned}$$\nb) $(2x + y)^3$\n$$\\begin{aligned} (2x + y)^3 &= (2x)^3 + 3(2x)^2y + 3(2x)y^2 + y^3 \\\\ &= 8x^3 + 12x^2y + 6xy^2 + y^3 \\end{aligned}$$\n\n**Ví dụ 2. Viết dưới dạng lập phương của một tổng:**\n$$1 + 6x + 12x^2 + 8x^3 = (1 + 2x)^3$$'
      },
      {
        term: '2. Lập phương của một hiệu',
        definition: 'Với hai biểu thức $A, B$, ta có:\n$$(A - B)^3 = A^3 - 3A^2B + 3AB^2 - B^3$$',
        example: '**Ví dụ 3. Khai triển lập phương của một hiệu:**\na) $(x - 1)^3 = x^3 - 3x^2 + 3x - 1$\nb) $(x - 2y)^3 = x^3 - 6x^2y + 12xy^2 - 8y^3$\n\n**Ví dụ 4. Viết dưới dạng lập phương của một hiệu:**\n$$27 - 27x + 9x^2 - x^3 = (3 - x)^3$$'
      }
    ],
    importantTakeaways: [],
    preClassQuestion: 'Viết công thức lập phương của một tổng và lập phương của một hiệu.',
    teacherTips: 'Khi khai triển (2x + y)³, học sinh cần nhớ lấy lũy thừa của cả hệ số và biến: (2x)³ = 8x³ và 3(2x)²y = 12x²y.'
  },
  {
    id: 'toan_ch2_b8',
    subjectId: 'toan',
    subjectName: 'Toán học 8',
    chapterId: 'ch_toan_2',
    chapterNumber: 2,
    lessonNumber: 8,
    title: 'Bài 8: Tổng và hiệu hai lập phương',
    chapter: 'Chương II: Hằng đẳng thức đáng nhớ và ứng dụng',
    readTimeMinutes: 5,
    summary: 'Môn: Toán 8 · Bộ sách: Kết nối tri thức với cuộc sống, Chương II: Hằng đẳng thức đáng nhớ và ứng dụng. Công thức tổng hai lập phương và hiệu hai lập phương cùng các ví dụ phân tích đa thức thành nhân tử và rút gọn biểu thức.',
    keyConcepts: [
      {
        term: '1. Tổng hai lập phương',
        definition: 'Với hai biểu thức $A, B$ tùy ý, ta có:\n$$\\boxed{A^3 + B^3 = (A + B)(A^2 - AB + B^2)}$$',
        example: '**Ví dụ 1. Viết các đa thức sau dưới dạng tích:**\na) $x^3 + 8 = x^3 + 2^3 = (x + 2)(x^2 - 2x + 4)$\nb) $8x^3 + y^3 = (2x)^3 + y^3 = (2x + y)(4x^2 - 2xy + y^2)$\n\n**Ví dụ 2. Rút gọn các biểu thức:**\na) $(x + 3)(x^2 - 3x + 9) - x^3$\n$= x^3 + 3^3 - x^3$\n$= (x^3 - x^3) + 27 = 27$\n\nb) $(3x + y)(9x^2 - 3xy + y^2) - y^3 - 26x^3$\n$= (3x)^3 + y^3 - y^3 - 26x^3$\n$= (27x^3 - 26x^3) + (y^3 - y^3)$\n$= x^3$'
      },
      {
        term: '2. Hiệu hai lập phương',
        definition: 'Với hai biểu thức $A, B$ tùy ý, ta có:\n$$\\boxed{A^3 - B^3 = (A - B)(A^2 + AB + B^2)}$$',
        example: '**Ví dụ 3. Viết các đa thức sau dưới dạng tích:**\na) $x^3 - 1 = x^3 - 1^3 = (x - 1)(x^2 + x + 1)$\nb) $8x^3 - y^3 = (2x)^3 - y^3 = (2x - y)(4x^2 + 2xy + y^2)$\n\n**Ví dụ 4. Rút gọn các biểu thức:**\na) $(x - 3)(x^2 + 3x + 9) - x^3$\n$= x^3 - 3^3 - x^3$\n$= (x^3 - x^3) - 27 = -27$\n\nb) $(2x - y)(4x^2 + 2xy + y^2) + y^3 - 7x^3$\n$= (2x)^3 - y^3 + y^3 - 7x^3$\n$= (8x^3 - 7x^3) + (y^3 - y^3)$\n$= x^3$'
      }
    ],
    importantTakeaways: [],
    preClassQuestion: 'Viết công thức tổng hai lập phương và hiệu hai lập phương.',
    teacherTips: 'Học sinh rất hay nhầm lẫn số hạng giữa của bình phương thiếu (chỉ có AB) với bình phương của một tổng/hiệu (có 2AB). Cần nhấn mạnh ở đây chỉ là AB, không có số 2!'
  },
  {
    id: 'toan_ch2_b9',
    subjectId: 'toan',
    subjectName: 'Toán học 8',
    chapterId: 'ch_toan_2',
    chapterNumber: 2,
    lessonNumber: 9,
    title: 'Bài 9: Phân tích đa thức thành nhân tử',
    chapter: 'Chương II: Hằng đẳng thức đáng nhớ và ứng dụng',
    readTimeMinutes: 6,
    summary: 'Môn: Toán 8 · Bộ sách: Kết nối tri thức với cuộc sống, Chương II: Hằng đẳng thức đáng nhớ và ứng dụng (Nguồn: SGK trang 42, 43, 44).',
    keyConcepts: [
      {
        term: '1. Phân tích đa thức thành nhân tử bằng cách đặt nhân tử chung',
        definition: '**Định nghĩa:**\nPhân tích đa thức thành nhân tử (hay thừa số) là biến đổi đa thức đó thành một tích của những đa thức.\n\n**Ví dụ 1.** Phân tích các đa thức sau thành nhân tử:\na) $x^3 + x$\nGiải:\n$x^3 + x = x \\cdot x^2 + x = x(x^2 + 1).$\n\nb) $2(x + y) - 2y(x + y)$\nGiải:\n$2(x + y) - 2y(x + y) = (2 - 2y)(x + y) = 2(1 - y)(x + y).$\n\n**Chú ý:**\nCách làm như Ví dụ 1 gọi là phân tích đa thức thành nhân tử bằng cách đặt nhân tử chung.',
      },
      {
        term: '2. Phân tích đa thức thành nhân tử bằng cách sử dụng hằng đẳng thức',
        definition: '**Ví dụ 2.** Phân tích các đa thức sau thành nhân tử:\na) $x^2 - 8x + 16$\nGiải:\n$x^2 - 8x + 16 = x^2 - 2 \\cdot x \\cdot 4 + 4^2 = (x - 4)^2.$\n\nb) $x^2 - 3$\nGiải:\n$x^2 - 3 = x^2 - (\\sqrt{3})^2 = (x - \\sqrt{3})(x + \\sqrt{3}).$\n\nc) $9x^2 + 12x + 4$\nGiải:\n$9x^2 + 12x + 4 = (3x)^2 + 2 \\cdot 3x \\cdot 2 + 2^2 = (3x + 2)^2.$\n\nd) $8x^3 - 27$\nGiải:\n$8x^3 - 27 = (2x)^3 - 3^3 = (2x - 3)(4x^2 + 6x + 9).$\n\n**Chú ý:**\nCách làm như Ví dụ 2 gọi là phân tích đa thức thành nhân tử bằng cách sử dụng hằng đẳng thức.',
      },
      {
        term: '3. Phân tích đa thức thành nhân tử bằng cách nhóm các hạng tử',
        definition: 'Trong giờ học toán, cô giáo yêu cầu cả lớp phân tích đa thức sau thành nhân tử:\n$x^2 - xy - 2y + 2x.$\nHai bạn Nam và Hà đã làm như sau:\n\n**Cách làm của bạn Nam:**\n$x^2 - xy - 2y + 2x$\n$= (x^2 - xy) + (2x - 2y)$\n$= x(x - y) + 2(x - y)$\n$= (x + 2)(x - y).$\n\n**Cách làm của bạn Hà:**\n$x^2 - xy - 2y + 2x$\n$= (x^2 + 2x) - (xy + 2y)$\n$= x(x + 2) - y(x + 2)$\n$= (x - y)(x + 2).$\n\n**Chú ý:**\n• Cách làm như trên của hai bạn Nam và Hà được gọi là phân tích đa thức thành nhân tử bằng cách nhóm các hạng tử.\n• Đối với một đa thức có thể có nhiều cách nhóm những hạng tử thích hợp.\n\n**Ví dụ 3:**\nĐề bài: Phân tích đa thức $xy + 3z + xz + 3y$ thành nhân tử.\n\n**Cách 1:**\n$xy + 3z + xz + 3y$\n$= (xy + xz) + (3z + 3y)$\n$= x(y + z) + 3(y + z)$\n$= (x + 3)(y + z).$\n\n**Cách 2:**\n$xy + 3z + xz + 3y$\n$= (xy + 3y) + (xz + 3z)$\n$= y(x + 3) + z(x + 3)$\n$= (x + 3)(y + z).$',
      }
    ],
    importantTakeaways: [],
    preClassQuestion: 'Thế nào là phân tích đa thức thành nhân tử?',
    teacherTips: 'Khi nhóm các hạng tử mà đặt dấu trừ đằng trước dấu ngoặc, cần đổi dấu tất cả các hạng tử bên trong ngoặc.'
  },
  {
    id: 'toan_ch3_b10',
    subjectId: 'toan',
    subjectName: 'Toán học 8',
    chapterId: 'ch_toan_3',
    chapterNumber: 3,
    lessonNumber: 10,
    title: 'Bài 10: Tứ giác',
    chapter: 'Chương III: Tứ giác',
    readTimeMinutes: 5,
    summary: 'Tứ giác, các yếu tố, tứ giác lồi và tổng các góc của tứ giác.',
    keyConcepts: [
      {
        term: 'Tứ giác',
        definition: 'Tứ giác ABCD gồm bốn cạnh AB, BC, CD, DA. Bốn điểm A, B, C, D là các đỉnh.\n\n- Hai đỉnh không cùng thuộc một cạnh là hai đỉnh đối nhau.\n- Hai cạnh không có đỉnh chung là hai cạnh đối nhau.\n- Đoạn thẳng nối hai đỉnh đối nhau là đường chéo. Hai đường chéo là AC và BD.\n- Tứ giác lồi là tứ giác mà hai đỉnh bất kì thuộc một cạnh luôn nằm về một phía của đường thẳng đi qua hai đỉnh còn lại.',
      },
      {
        term: 'Tổng các góc của tứ giác',
        definition: '$$\\widehat{A} + \\widehat{B} + \\widehat{C} + \\widehat{D} = 360^\\circ$$\n\nTrong đó: $\\widehat{A}, \\widehat{B}, \\widehat{C}, \\widehat{D}$ là bốn góc của tứ giác ABCD.',
      }
    ],
    importantTakeaways: [],
    preClassQuestion: 'Tổng các góc của một tứ giác bằng bao nhiêu độ?',
    teacherTips: 'Tổng các góc của tứ giác bằng 360°: $$\\widehat{A} + \\widehat{B} + \\widehat{C} + \\widehat{D} = 360^\\circ$$.'
  },
  {
    id: 'toan_ch3_b11',
    subjectId: 'toan',
    subjectName: 'Toán học 8',
    chapterId: 'ch_toan_3',
    chapterNumber: 3,
    lessonNumber: 11,
    title: 'Bài 11: Hình thang cân',
    chapter: 'Chương III: Tứ giác',
    readTimeMinutes: 5,
    summary: 'Hình thang, hình thang cân, tính chất và dấu hiệu nhận biết.',
    keyConcepts: [
      {
        term: 'Hình thang',
        definition: 'Tứ giác có hai cạnh đối song song.\n\nVới hình thang ABCD có AB ∥ CD:\n- AB và CD là hai đáy.\n- AD và BC là hai cạnh bên.',
      },
      {
        term: 'Hình thang cân',
        definition: 'Hình thang có hai góc kề một đáy bằng nhau.\n\nVới hình thang cân ABCD có AB ∥ CD:\n$$\\widehat{A} = \\widehat{B}$$\n$$\\widehat{C} = \\widehat{D}$$',
      },
      {
        term: 'Tính chất',
        definition: '- Hai cạnh bên bằng nhau: AD = BC.\n- Hai đường chéo bằng nhau: AC = BD.',
      },
      {
        term: 'Dấu hiệu nhận biết',
        definition: 'Hình thang có hai đường chéo bằng nhau là hình thang cân.',
      }
    ],
    importantTakeaways: [],
    preClassQuestion: 'Trong hình thang cân, hai đường chéo có tính chất gì?',
    teacherTips: 'Hình thang có hai đường chéo bằng nhau là hình thang cân.'
  },
  {
    id: 'toan_ch3_b12',
    subjectId: 'toan',
    subjectName: 'Toán học 8',
    chapterId: 'ch_toan_3',
    chapterNumber: 3,
    lessonNumber: 12,
    title: 'Bài 12: Hình bình hành',
    chapter: 'Chương III: Tứ giác',
    readTimeMinutes: 5,
    summary: 'Hình bình hành, các tính chất về cạnh, góc, đường chéo và 5 dấu hiệu nhận biết.',
    keyConcepts: [
      {
        term: 'Định nghĩa',
        definition: 'Hình bình hành là tứ giác có các cạnh đối song song.\n\nVới hình bình hành ABCD:\n$$AB \\parallel CD$$\n$$AD \\parallel BC$$',
      },
      {
        term: 'Tính chất',
        definition: 'Trong một hình bình hành:\n- Các cạnh đối bằng nhau: $$AB = CD, AD = BC$$\n- Các góc đối bằng nhau: $$\\widehat{A} = \\widehat{C}, \\widehat{B} = \\widehat{D}$$\n- Hai đường chéo cắt nhau tại trung điểm của mỗi đường: Gọi O là giao điểm của AC và BD, ta có $$OA = OC, OB = OD$$.',
      },
      {
        term: 'Dấu hiệu nhận biết',
        definition: '1. Tứ giác có các cạnh đối song song là hình bình hành.\n2. Tứ giác có các cạnh đối bằng nhau là hình bình hành.\n3. Tứ giác có một cặp cạnh đối vừa song song vừa bằng nhau là hình bình hành.\n4. Tứ giác có các góc đối bằng nhau là hình bình hành.\n5. Tứ giác có hai đường chéo cắt nhau tại trung điểm của mỗi đường là hình bình hành.',
      }
    ],
    importantTakeaways: [],
    preClassQuestion: 'Nêu định nghĩa và các tính chất cơ bản của hình bình hành theo SGK Toán 8.',
    teacherTips: 'Trong hình bình hành, hai góc đối diện nhau thì bằng nhau: Â = Ĉ, B̂ = D̂.'
  },
  {
    id: 'toan_ch3_b13',
    subjectId: 'toan',
    subjectName: 'Toán học 8',
    chapterId: 'ch_toan_3',
    chapterNumber: 3,
    lessonNumber: 13,
    title: 'Bài 13: Hình chữ nhật',
    chapter: 'Chương III: Tứ giác',
    readTimeMinutes: 5,
    summary: 'Hình chữ nhật, tính chất của hình chữ nhật và các dấu hiệu nhận biết.',
    keyConcepts: [
      {
        term: 'Định nghĩa',
        definition: 'Hình chữ nhật là tứ giác có bốn góc vuông.\n\nVới hình chữ nhật ABCD:\n$$\\widehat{A} = \\widehat{B} = \\widehat{C} = \\widehat{D} = 90^\\circ$$',
      },
      {
        term: 'Tính chất',
        definition: '- Hình chữ nhật có tất cả các tính chất của hình bình hành.\n- Hai đường chéo bằng nhau và cắt nhau tại trung điểm của mỗi đường:\n$$AC = BD$$\nGọi O là giao điểm của AC và BD, ta có $$OA = OB = OC = OD$$.',
      },
      {
        term: 'Dấu hiệu nhận biết',
        definition: '1. Hình bình hành có một góc vuông là hình chữ nhật.\n2. Hình bình hành có hai đường chéo bằng nhau là hình chữ nhật.\n3. Tứ giác có ba góc vuông là hình chữ nhật.',
      }
    ],
    importantTakeaways: [],
    preClassQuestion: 'Trong hình chữ nhật, hai đường chéo có tính chất đặc biệt gì?',
    teacherTips: 'Hai đường chéo của hình chữ nhật vừa bằng nhau vừa cắt nhau tại trung điểm của mỗi đường.'
  },
  {
    id: 'toan_ch3_b14',
    subjectId: 'toan',
    subjectName: 'Toán học 8',
    chapterId: 'ch_toan_3',
    chapterNumber: 3,
    lessonNumber: 14,
    title: 'Bài 14: Hình thoi và hình vuông',
    chapter: 'Chương III: Tứ giác',
    readTimeMinutes: 5,
    summary: 'Hình thoi, hình vuông, định nghĩa, tính chất và các dấu hiệu nhận biết.',
    keyConcepts: [
      {
        term: '1. Hình thoi',
        definition: '**Định nghĩa:** Hình thoi là tứ giác có bốn cạnh bằng nhau.\n\n**Tính chất:**\n- Hình thoi có đầy đủ các tính chất của hình bình hành.\n- Hai đường chéo vuông góc với nhau.\n- Hai đường chéo là các đường phân giác của các góc trong hình thoi.\n\n**Dấu hiệu nhận biết:**\n- Hình bình hành có hai cạnh kề bằng nhau là hình thoi.\n- Hình bình hành có hai đường chéo vuông góc với nhau là hình thoi.\n- Hình bình hành có một đường chéo là đường phân giác của một góc là hình thoi.',
      },
      {
        term: '2. Hình vuông',
        definition: '**Định nghĩa:** Hình vuông là tứ giác có bốn góc vuông và bốn cạnh bằng nhau.\n\n**Tính chất:**\n- Hình vuông vừa là hình chữ nhật, vừa là hình thoi.\n- Hai đường chéo bằng nhau.\n- Hai đường chéo vuông góc với nhau.\n- Hai đường chéo cắt nhau tại trung điểm của mỗi đường.\n- Hai đường chéo là các đường phân giác của các góc trong hình vuông.\n\n**Dấu hiệu nhận biết:**\n- Hình chữ nhật có hai cạnh kề bằng nhau là hình vuông.\n- Hình chữ nhật có hai đường chéo vuông góc với nhau là hình vuông.\n- Hình chữ nhật có một đường chéo là đường phân giác của một góc là hình vuông.',
      }
    ],
    importantTakeaways: [],
    preClassQuestion: 'Nêu định nghĩa và tính chất hai đường chéo của hình thoi và hình vuông.',
    teacherTips: 'Hình vuông vừa là hình chữ nhật đặc biệt vừa là hình thoi đặc biệt, do đó có đầy đủ tính chất của cả hai hình.'
  },
  {
    id: 'toan_ch4_b15',
    subjectId: 'toan',
    subjectName: 'Toán học 8',
    chapterId: 'ch_toan_4',
    chapterNumber: 4,
    lessonNumber: 15,
    title: 'Bài 15: Định lí Thalès trong tam giác',
    chapter: 'Chương IV: Định lí Thalès',
    readTimeMinutes: 5,
    summary: 'Tỉ số hai đoạn thẳng, Định lí Thalès trong tam giác và Định lí Thalès đảo.',
    keyConcepts: [
      {
        term: '1. Tỉ số hai đoạn thẳng',
        definition: 'Tỉ số hai đoạn thẳng là tỉ số độ dài của chúng khi được đo bằng cùng một đơn vị.\n\nHai cặp đoạn thẳng tỉ lệ nếu:\n$$\\frac{AB}{CD} = \\frac{A\'B\'}{C\'D\'}$$',
      },
      {
        term: '2. Định lí Thalès',
        definition: 'Nếu một đường thẳng song song với một cạnh của tam giác và cắt hai cạnh còn lại thì tạo ra các đoạn thẳng tương ứng tỉ lệ.\n\nVới tam giác ABC, B\' thuộc AB, C\' thuộc AC và B\'C\' song song BC:\n$$\\frac{AB\'}{AB} = \\frac{AC\'}{AC}$$',
      },
      {
        term: '3. Định lí Thalès đảo',
        definition: 'Nếu:\n$$\\frac{AB\'}{AB} = \\frac{AC\'}{AC}$$\nthì:\n$$B\'C\' \\parallel BC$$',
      }
    ],
    importantTakeaways: [],
    preClassQuestion: 'Nêu nội dung định lí Thalès thuận và định lí Thalès đảo trong tam giác.',
    teacherTips: 'Khi áp dụng định lí Thalès, chú ý lập tỉ số các đoạn thẳng tương ứng trên cùng một cạnh hoặc giữa hai cạnh của tam giác.'
  },
  {
    id: 'toan_ch4_b16',
    subjectId: 'toan',
    subjectName: 'Toán học 8',
    chapterId: 'ch_toan_4',
    chapterNumber: 4,
    lessonNumber: 16,
    title: 'Bài 16: Đường trung bình của tam giác',
    chapter: 'Chương IV: Định lí Thalès',
    readTimeMinutes: 5,
    summary: 'Định nghĩa, tính chất và định lí đảo về đường trung bình của tam giác.',
    keyConcepts: [
      {
        term: '1. Định nghĩa',
        definition: 'Đường trung bình của tam giác là đoạn thẳng nối trung điểm hai cạnh của tam giác.\n\nVí dụ: Trong tam giác ABC, nếu D là trung điểm của AB, E là trung điểm của AC thì DE là đường trung bình của tam giác ABC.',
      },
      {
        term: '2. Tính chất',
        definition: 'Đường trung bình của tam giác song song với cạnh thứ ba và bằng nửa cạnh ấy.\n\nVới D, E lần lượt là trung điểm của AB, AC, ta có:\n$$DE \\parallel BC$$\n$$DE = \\frac{1}{2} BC$$\n\nTrong đó: DE là đường trung bình; BC là cạnh thứ ba của tam giác.',
      },
      {
        term: '3. Định lí đảo về đường trung bình',
        definition: 'Trong một tam giác, nếu một đường thẳng đi qua trung điểm của một cạnh và song song với cạnh thứ hai thì đi qua trung điểm của cạnh thứ ba.\n\nVí dụ: Trong tam giác ABC, nếu D là trung điểm của AB, đường thẳng đi qua D và song song với BC, cắt AC tại E, thì E là trung điểm của AC.\nTrong đó: D, E lần lượt là trung điểm của AB, AC.',
      }
    ],
    importantTakeaways: [],
    preClassQuestion: 'Nêu định nghĩa và tính chất của đường trung bình của tam giác.',
    teacherTips: 'Đường trung bình luôn song song với cạnh thứ ba và bằng một nửa cạnh ấy: DE ∥ BC, DE = 1/2 BC.'
  },
  {
    id: 'toan_ch4_b17',
    subjectId: 'toan',
    subjectName: 'Toán học 8',
    chapterId: 'ch_toan_4',
    chapterNumber: 4,
    lessonNumber: 17,
    title: 'Bài 17: Tính chất đường phân giác của tam giác',
    chapter: 'Chương IV: Định lí Thalès',
    readTimeMinutes: 5,
    summary: 'Tính chất đường phân giác trong tam giác, dấu hiệu nhận biết và các bước vận dụng tính độ dài đoạn thẳng.',
    keyConcepts: [
      {
        term: '1. Tính chất đường phân giác của tam giác',
        definition: 'Trong tam giác, đường phân giác của một góc chia cạnh đối diện thành hai đoạn thẳng tỉ lệ với hai cạnh kề hai đoạn ấy.\n\nVới tam giác ABC, AD là đường phân giác của góc A, D thuộc cạnh BC:\n$$\\frac{DB}{DC} = \\frac{AB}{AC}$$\n\nTrong đó: DB, DC là hai đoạn của cạnh BC; AB, AC là hai cạnh kề với góc A.',
      },
      {
        term: '2. Dấu hiệu nhận biết đường phân giác',
        definition: 'Trong tam giác ABC, nếu D thuộc cạnh BC và:\n$$\\frac{DB}{DC} = \\frac{AB}{AC}$$\nthì AD là đường phân giác của góc A.',
      },
      {
        term: '3. Cách vận dụng',
        definition: '- Khi biết đường phân giác, sử dụng tính chất đường phân giác để lập tỉ lệ thức.\n- Khi biết các độ dài và cần tìm đoạn thẳng chưa biết, lập tỉ lệ thức rồi giải.\n- Khi cần chứng minh một đường thẳng là đường phân giác, có thể sử dụng dấu hiệu nhận biết nêu trên.',
      }
    ],
    importantTakeaways: [],
    preClassQuestion: 'Nêu tính chất đường phân giác của tam giác và hệ thức tỉ lệ tương ứng.',
    teacherTips: 'Khi AD là đường phân giác góc A, tỉ số DB/DC = AB/AC giúp tính độ dài cạnh hoặc chứng minh tia phân giác.'
  },
  {
    id: 'toan_ch5_b18',
    subjectId: 'toan',
    subjectName: 'Toán học 8',
    chapterId: 'ch_toan_5',
    chapterNumber: 5,
    lessonNumber: 18,
    title: 'Bài 18: Thu thập và phân loại dữ liệu',
    chapter: 'Chương V: Dữ liệu và biểu đồ',
    readTimeMinutes: 5,
    summary: 'Thu thập dữ liệu trực tiếp và gián tiếp; phân loại dữ liệu là số (rời rạc, liên tục) và dữ liệu không là số (sắp thứ tự, không thể sắp thứ tự).',
    keyConcepts: [
      {
        term: 'a) Thu thập dữ liệu',
        definition: 'Thu thập dữ liệu có thể thực hiện trực tiếp hoặc gián tiếp.\n- Thu thập trực tiếp: thu thập thông tin thông qua quan sát, làm thí nghiệm, lập bảng hỏi, phỏng vấn,...\n- Thu thập gián tiếp: thu thập thông tin từ những nguồn có sẵn như sách, báo, mạng Internet,...\nDữ liệu thu thập được cần bảo đảm tính đại diện cho đối tượng đang được quan tâm.'
      },
      {
        term: 'b) Phân loại dữ liệu',
        definition: 'Dữ liệu gồm hai nhóm:\n- Dữ liệu là số:\n  + Số liệu rời rạc: thường thu được từ việc đếm.\n  + Số liệu liên tục: thường thu được từ việc đo.\n- Dữ liệu không là số:\n  + Dữ liệu có thể sắp thứ tự.\n  + Dữ liệu không thể sắp thứ tự.\nVí dụ:\n- Số học sinh trong lớp: số liệu rời rạc.\n- Chiều cao, cân nặng: số liệu liên tục.\n- Màu sắc yêu thích: dữ liệu không là số, không thể sắp thứ tự.'
      }
    ],
    importantTakeaways: [],
    preClassQuestion: 'Nêu các cách thu thập dữ liệu và cách phân loại dữ liệu đã học.',
    teacherTips: 'Phân biệt số liệu rời rạc (từ việc đếm) và số liệu liên tục (từ việc đo); dữ liệu không là số có thể hoặc không thể sắp thứ tự.'
  },
  {
    id: 'toan_ch5_b19',
    subjectId: 'toan',
    subjectName: 'Toán học 8',
    chapterId: 'ch_toan_5',
    chapterNumber: 5,
    lessonNumber: 19,
    title: 'Bài 19: Biểu diễn dữ liệu bằng bảng, biểu đồ',
    chapter: 'Chương V: Dữ liệu và biểu đồ',
    readTimeMinutes: 5,
    summary: 'Lựa chọn dạng biểu đồ phù hợp: biểu đồ tranh, biểu đồ cột, biểu đồ đoạn thẳng, biểu đồ cột kép và biểu đồ hình quạt tròn.',
    keyConcepts: [
      {
        term: 'a) Lựa chọn biểu đồ tranh hay biểu đồ cột',
        definition: '- Biểu đồ tranh dùng hình ảnh hoặc biểu tượng để biểu diễn dữ liệu.\n- Biểu đồ cột dùng các cột để biểu diễn dữ liệu.\n- Khi số lượng lớn, phải dùng quá nhiều biểu tượng thì nên chọn biểu đồ cột.'
      },
      {
        term: 'b) Lựa chọn biểu đồ cột hay biểu đồ đoạn thẳng',
        definition: '- Biểu đồ cột thích hợp để biểu diễn, so sánh số liệu giữa các đối tượng.\n- Biểu đồ đoạn thẳng thích hợp để biểu diễn sự thay đổi của một đại lượng theo thời gian.\n- Khi số thời điểm quan sát ít, cũng có thể biểu diễn bằng biểu đồ cột.'
      },
      {
        term: 'c) Lựa chọn biểu đồ cột kép hay biểu đồ hình quạt tròn',
        definition: '- Biểu đồ cột kép dùng để so sánh hai nhóm số liệu tương ứng.\n- Biểu đồ hình quạt tròn dùng để biểu diễn tỉ lệ các phần trong tổng thể.'
      }
    ],
    importantTakeaways: [],
    preClassQuestion: 'Khi nào nên sử dụng biểu đồ cột, biểu đồ đoạn thẳng, biểu đồ cột kép và biểu đồ hình quạt tròn?',
    teacherTips: 'Biểu đồ đoạn thẳng dùng cho sự thay đổi theo thời gian; biểu đồ hình quạt tròn cho tỉ lệ tổng thể; biểu đồ cột kép để so sánh hai nhóm số liệu.'
  },
  {
    id: 'toan_ch5_b20',
    subjectId: 'toan',
    subjectName: 'Toán học 8',
    chapterId: 'ch_toan_5',
    chapterNumber: 5,
    lessonNumber: 20,
    title: 'Bài 20: Phân tích số liệu thống kê dựa vào biểu đồ',
    chapter: 'Chương V: Dữ liệu và biểu đồ',
    readTimeMinutes: 5,
    summary: 'Đọc và so sánh số liệu, phân tích cơ cấu trong tổng thể, nhận xét xu hướng biến đổi theo thời gian và các lưu ý về thang đo, gốc tọa độ trên biểu đồ.',
    keyConcepts: [
      {
        term: '1. Đọc và so sánh số liệu giữa các đối tượng',
        definition: 'Quan sát tiêu đề, tên trục, đơn vị và độ cao các cột để so sánh số liệu giữa các đối tượng, tìm giá trị cao nhất, thấp nhất.'
      },
      {
        term: '2. Đọc tỉ lệ phần trăm và phân tích cơ cấu trong tổng thể',
        definition: 'Biểu đồ hình quạt tròn biểu diễn tỉ lệ các thành phần trong 100% tổng thể. Tính số lượng = (Tổng số × Tỉ lệ %) : 100.'
      },
      {
        term: '3. Nhận xét xu hướng và so sánh sự thay đổi của đại lượng theo thời gian',
        definition: 'Đoạn thẳng đi lên thể hiện xu hướng tăng, đi xuống thể hiện xu hướng giảm; các điểm cắt nhau thể hiện giá trị gần bằng nhau.'
      },
      {
        term: '4. Các lưu ý khi đọc và diễn giải biểu đồ',
        definition: 'Kiểm tra kĩ thang đo và gốc tọa độ. Trục đứng không bắt đầu từ 0 có thể làm sự chênh lệch trông lớn hơn nhiều so với thực tế.'
      }
    ],
    importantTakeaways: [],
    preClassQuestion: 'Nêu các lưu ý khi đọc biểu đồ cột, biểu đồ hình quạt tròn và biểu đồ đoạn thẳng.',
    teacherTips: 'Chú ý thang đo trục đứng, đặc biệt khi trục đứng không bắt đầu từ 0 dễ gây ảo giác thị giác về độ chênh lệch.'
  },

  // --- TOÁN 8: CHƯƠNG VI: PHÂN THỨC ĐẠI SỐ ---
  {
    id: 'toan_ch6_b21',
    subjectId: 'toan',
    subjectName: 'Toán học 8',
    chapterId: 'ch_toan_6',
    chapterNumber: 6,
    lessonNumber: 21,
    title: 'Bài 21: Phân thức đại số',
    chapter: 'Chương VI: Phân thức đại số',
    readTimeMinutes: 5,
    summary: 'Một phân thức đại số (hay phân thức) là biểu thức có dạng A/B, trong đó A, B là hai đa thức và B khác đa thức 0. A là tử thức, B là mẫu thức.',
    keyConcepts: [
      {
        term: 'Định nghĩa phân thức đại số',
        definition: 'Một phân thức đại số (hay phân thức) là một biểu thức có dạng $\\frac{A}{B}$, trong đó $A, B$ là hai đa thức và $B$ khác đa thức 0. $A$ được gọi là tử thức (hoặc tử), $B$ được gọi là mẫu thức (hoặc mẫu).'
      }
    ],
    importantTakeaways: [],
    preClassQuestion: 'Một biểu thức có dạng A/B cần điều kiện gì của B để được gọi là một phân thức đại số?',
    teacherTips: 'Chú ý điều kiện mẫu thức B phải khác đa thức 0; phân biệt tử thức nằm trên và mẫu thức nằm dưới vạch phân số.'
  },
  {
    id: 'toan_ch6_b22',
    subjectId: 'toan',
    subjectName: 'Toán học 8',
    chapterId: 'ch_toan_6',
    chapterNumber: 6,
    lessonNumber: 22,
    title: 'Bài 22: Tính chất cơ bản của phân thức đại số',
    chapter: 'Chương VI: Phân thức đại số',
    readTimeMinutes: 5,
    summary: 'Tính chất nhân/chia với đa thức khác 0, quy tắc rút gọn phân thức đại số và quy tắc quy đồng mẫu thức nhiều phân thức.',
    keyConcepts: [
      {
        term: 'Tính chất cơ bản của phân thức',
        definition: '• Nếu nhân cả tử và mẫu của một phân thức với cùng một đa thức khác đa thức 0 thì được một phân thức bằng phân thức đã cho: $\\frac{A}{B} = \\frac{A \\cdot M}{B \\cdot M}$ ($M$ khác đa thức 0).\n• Nếu chia cả tử và mẫu của một phân thức cho một nhân tử chung của chúng thì được một phân thức bằng phân thức đã cho: $\\frac{A}{B} = \\frac{A : N}{B : N}$ ($N$ là nhân tử chung khác đa thức 0).'
      },
      {
        term: 'Cách rút gọn phân thức',
        definition: '• Phân tích tử và mẫu thành nhân tử để tìm nhân tử chung.\n• Chia cả tử và mẫu cho nhân tử chung đó.'
      },
      {
        term: 'Cách quy đồng mẫu thức nhiều phân thức',
        definition: '• Phân tích các mẫu thức thành nhân tử rồi tìm mẫu thức chung.\n• Tìm nhân tử phụ của mỗi mẫu thức bằng cách lấy mẫu thức chung chia cho mẫu thức đó.\n• Nhân cả tử và mẫu của mỗi phân thức với nhân tử phụ tương ứng.'
      }
    ],
    importantTakeaways: [],
    preClassQuestion: 'Muốn rút gọn một phân thức đại số, bước đầu tiên em cần thực hiện là gì?',
    teacherTips: 'Luôn phân tích tử và mẫu thành nhân tử trước khi rút gọn hoặc quy đồng; xác định rõ điều kiện xác định của phân thức ban đầu.'
  },
  {
    id: 'toan_ch6_b23',
    subjectId: 'toan',
    subjectName: 'Toán học 8',
    chapterId: 'ch_toan_6',
    chapterNumber: 6,
    lessonNumber: 23,
    title: 'Bài 23: Phép cộng và phép trừ phân thức đại số',
    chapter: 'Chương VI: Phân thức đại số',
    readTimeMinutes: 5,
    summary: 'Quy tắc cộng và trừ hai phân thức cùng mẫu hoặc khác mẫu, áp dụng tính chất quy đồng và rút gọn phân thức.',
    keyConcepts: [
      {
        term: 'Cộng hai phân thức cùng mẫu',
        definition: '$\\frac{A}{M} + \\frac{B}{M} = \\frac{A + B}{M}$. Muốn cộng hai phân thức có cùng mẫu thức, ta cộng các tử thức với nhau và giữ nguyên mẫu thức.'
      },
      {
        term: 'Cộng hai phân thức khác mẫu',
        definition: 'Muốn cộng hai phân thức có mẫu thức khác nhau, ta quy đồng mẫu thức rồi cộng các phân thức có cùng mẫu thức vừa tìm được.'
      },
      {
        term: 'Trừ hai phân thức',
        definition: '• Muốn trừ hai phân thức có cùng mẫu thức, ta trừ các tử thức và giữ nguyên mẫu thức.\n• Muốn trừ hai phân thức có mẫu thức khác nhau, ta quy đồng mẫu thức rồi trừ các phân thức có cùng mẫu thức vừa tìm được.'
      }
    ],
    importantTakeaways: [],
    preClassQuestion: 'Khi cộng hoặc trừ hai phân thức có mẫu thức khác nhau, ta cần thực hiện thao tác quan trọng nào trước?',
    teacherTips: 'Chú ý dấu của các hạng tử ở tử số khi thực hiện phép trừ; luôn kiểm tra khả năng rút gọn sau khi cộng trừ các tử thức.'
  },
  {
    id: 'toan_ch6_b24',
    subjectId: 'toan',
    subjectName: 'Toán học 8',
    chapterId: 'ch_toan_6',
    chapterNumber: 6,
    lessonNumber: 24,
    title: 'Bài 24: Phép nhân và phép chia phân thức đại số',
    chapter: 'Chương VI: Phân thức đại số',
    readTimeMinutes: 5,
    summary: 'Quy tắc nhân và chia hai phân thức đại số, áp dụng tính chất nghịch đảo và rút gọn phân thức.',
    keyConcepts: [
      {
        term: 'Quy tắc nhân hai phân thức',
        definition: '$\\frac{A}{B} \\cdot \\frac{C}{D} = \\frac{A \\cdot C}{B \\cdot D}$. Muốn nhân hai phân thức, ta nhân các tử thức với nhau, nhân các mẫu thức với nhau.'
      },
      {
        term: 'Quy tắc chia hai phân thức',
        definition: 'Với phân thức $\\frac{C}{D} \\ne 0$: $\\frac{A}{B} : \\frac{C}{D} = \\frac{A}{B} \\cdot \\frac{D}{C}$. Muốn chia phân thức $\\frac{A}{B}$ cho phân thức $\\frac{C}{D}$ khác 0, ta nhân $\\frac{A}{B}$ với phân thức $\\frac{D}{C}$.'
      }
    ],
    importantTakeaways: [],
    preClassQuestion: 'Muốn chia hai phân thức đại số, em thực hiện chuyển đổi phép toán như thế nào?',
    teacherTips: 'Luôn phân tích đa thức thành nhân tử để rút gọn trước và sau khi nhân; chú ý điều kiện khác đa thức 0 của phân thức chia.'
  },

  // --- TIẾNG ANH 8: UNIT 1 ---
  {
    id: 'ta_u1_l1',
    subjectId: 'tienganh',
    subjectName: 'Tiếng Anh 8',
    chapterId: 'ch_tienganh_1',
    chapterNumber: 1,
    lessonNumber: 1,
    title: 'Getting Started',
    chapter: 'Unit 1: Leisure Time',
    readTimeMinutes: 5,
    summary: 'Chủ đề: Leisure activities – Các hoạt động trong thời gian rảnh.',
    keyConcepts: [
      {
        term: 'Chủ đề: Leisure activities – Các hoạt động trong thời gian rảnh',
        definition: 'Nội dung hội thoại:\n• Trang thích làm đồ thủ công DIY.\n• Trang thích đan len, làm nhà búp bê và làm hoa giấy.\n• Tom thường dành thời gian với bạn bè.\n• Tom và bạn bè thường đi xem phim, đạp xe hoặc chơi thể thao trong công viên.\n• Tom mời Trang đi xem phim cùng mình và Mark.',
      }
    ],
    dialogueExpressions: [
      { english: "I'm keen on doing DIY.", vietnamese: 'Tôi rất thích làm đồ thủ công DIY.' },
      { english: 'I love knitting.', vietnamese: 'Tôi thích đan len.' },
      { english: 'What do you do in your free time?', vietnamese: 'Bạn làm gì trong thời gian rảnh?' },
      { english: 'Would you like to go to the cinema with me and Mark?', vietnamese: 'Bạn có muốn đi xem phim cùng tôi và Mark không?' },
      { english: "I'd love to.", vietnamese: 'Tôi rất muốn.' },
      { english: 'Can I ask Mai to join us?', vietnamese: 'Tôi có thể rủ Mai tham gia cùng chúng ta không?' }
    ],
    vocabulary: [
      {
        id: 'ta_u1_v1',
        word: 'doing DIY',
        phonetic: '',
        partOfSpeech: 'phr',
        meaning: 'Làm đồ thủ công DIY',
        example: '',
        exampleMeaning: ''
      },
      {
        id: 'ta_u1_v2',
        word: 'doing puzzles',
        phonetic: '',
        partOfSpeech: 'phr',
        meaning: 'Giải câu đố',
        example: '',
        exampleMeaning: ''
      },
      {
        id: 'ta_u1_v3',
        word: 'surfing the net',
        phonetic: '',
        partOfSpeech: 'phr',
        meaning: 'Lướt Internet',
        example: '',
        exampleMeaning: ''
      },
      {
        id: 'ta_u1_v4',
        word: 'cooking',
        phonetic: '',
        partOfSpeech: 'n',
        meaning: 'Nấu ăn',
        example: '',
        exampleMeaning: ''
      },
      {
        id: 'ta_u1_v5',
        word: 'playing sport',
        phonetic: '',
        partOfSpeech: 'phr',
        meaning: 'Chơi thể thao',
        example: '',
        exampleMeaning: ''
      },
      {
        id: 'ta_u1_v6',
        word: 'messaging friends',
        phonetic: '',
        partOfSpeech: 'phr',
        meaning: 'Nhắn tin cho bạn bè',
        example: '',
        exampleMeaning: ''
      },
      {
        id: 'ta_u1_v7',
        word: 'knitting',
        phonetic: '',
        partOfSpeech: 'n',
        meaning: 'Đan len',
        example: '',
        exampleMeaning: ''
      },
      {
        id: 'ta_u1_v8',
        word: 'building dollhouses',
        phonetic: '',
        partOfSpeech: 'phr',
        meaning: 'Làm nhà búp bê',
        example: '',
        exampleMeaning: ''
      },
      {
        id: 'ta_u1_v9',
        word: 'making paper flowers',
        phonetic: '',
        partOfSpeech: 'phr',
        meaning: 'Làm hoa giấy',
        example: '',
        exampleMeaning: ''
      },
      {
        id: 'ta_u1_v10',
        word: 'cycling',
        phonetic: '',
        partOfSpeech: 'n',
        meaning: 'Đạp xe',
        example: '',
        exampleMeaning: ''
      },
      {
        id: 'ta_u1_v11',
        word: 'hang out with friends',
        phonetic: '',
        partOfSpeech: 'phr',
        meaning: 'Đi chơi với bạn bè',
        example: '',
        exampleMeaning: ''
      },
      {
        id: 'ta_u1_v12',
        word: 'cinema',
        phonetic: '',
        partOfSpeech: 'n',
        meaning: 'Rạp chiếu phim',
        example: '',
        exampleMeaning: ''
      }
    ]
  },
  {
    id: 'ta_u1_l2',
    subjectId: 'tienganh',
    subjectName: 'Tiếng Anh 8',
    chapterId: 'ch_tienganh_1',
    chapterNumber: 1,
    lessonNumber: 2,
    title: 'A Closer Look 1',
    chapter: 'Unit 1: Leisure Time',
    readTimeMinutes: 5,
    summary: 'A Closer Look 1 - Unit 1: Leisure Time',
    keyConcepts: [
      {
        term: 'Từ vựng chỉ mức độ yêu thích & Giới từ đi kèm',
        definition: 'Các cụm tính từ diễn tả sự đam mê: be fond of, be keen on, be crazy about, be hooked on (+ V-ing / Noun).',
        example: 'He is keen on cycling around the lake every morning.'
      },
      {
        term: 'Ngữ âm: Phân biệt hai âm /ʊ/ và /uː/',
        definition: 'Âm /ʊ/ là nguyên âm ngắn (cook, look, book, foot). Âm /uː/ là nguyên âm dài (school, food, group, cool).',
        example: '/ʊ/: good, cook, foot, look | /uː/: school, cool, group, music'
      }
    ],
    vocabulary: [
      {
        id: 'ta_u1_v4',
        word: 'keen',
        phonetic: '/kiːn/',
        partOfSpeech: 'adjective (tính từ)',
        meaning: 'nhiệt tình, ham thích (keen on)',
        example: 'He is keen on playing sports.',
        exampleMeaning: 'Cậu ấy say mê chơi thể thao.'
      },
      {
        id: 'ta_u1_v5',
        word: 'fond',
        phonetic: '/fɒnd/',
        partOfSpeech: 'adjective (tính từ)',
        meaning: 'yêu thích, mến chuộng (fond of)',
        example: 'My sister is fond of baking cakes.',
        exampleMeaning: 'Chị gái tôi rất thích nướng bánh.'
      },
      {
        id: 'ta_u1_v6',
        word: 'hooked',
        phonetic: '/hʊkt/',
        partOfSpeech: 'adjective (tính từ)',
        meaning: 'bị lôi cuốn, say mê (hooked on)',
        example: 'He is hooked on reading detective stories.',
        exampleMeaning: 'Cậu ấy say mê đọc truyện trinh thám.'
      }
    ]
  },
  {
    id: 'ta_u1_l3',
    subjectId: 'tienganh',
    subjectName: 'Tiếng Anh 8',
    chapterId: 'ch_tienganh_1',
    chapterNumber: 1,
    lessonNumber: 3,
    title: 'A Closer Look 2',
    chapter: 'Unit 1: Leisure Time',
    readTimeMinutes: 5,
    summary: 'A Closer Look 2 - Unit 1: Leisure Time',
    keyConcepts: [
      {
        term: 'Động từ chỉ sự yêu thích và ghét (Verbs of liking and disliking)',
        definition: 'Các động từ chỉ sở thích tích cực (like, love, enjoy, adore, fancy, prefer) và tiêu cực (dislike, hate, detest, mind) theo sau bởi danh động từ (V-ing).',
        example: 'adore / fancy / enjoy / detest + V-ing\nVí dụ: I adore hanging out with friends. / He detests doing homework on Sunday.'
      },
      {
        term: 'Động từ đi kèm cả V-ing lẫn To-V',
        definition: 'Các động từ love, like, hate, prefer có thể đi với cả V-ing hoặc To-V mà nghĩa không đổi nhiều.',
        example: 'I love playing chess = I love to play chess.'
      }
    ],
    vocabulary: [
      {
        id: 'ta_u1_v7',
        word: 'adore',
        phonetic: '/əˈdɔː(r)/',
        partOfSpeech: 'verb (động từ)',
        meaning: 'rất yêu thích, say mê, mê mẩn',
        example: 'I adore painting landscapes.',
        exampleMeaning: 'Tôi rất mê vẽ tranh phong cảnh.'
      },
      {
        id: 'ta_u1_v8',
        word: 'fancy',
        phonetic: '/ˈfænsi/',
        partOfSpeech: 'verb (động từ)',
        meaning: 'thích thú, muốn làm gì',
        example: 'Do you fancy going for a walk?',
        exampleMeaning: 'Bạn có thích đi dạo một lát không?'
      },
      {
        id: 'ta_u1_v9',
        word: 'detest',
        phonetic: '/dɪˈtest/',
        partOfSpeech: 'verb (động từ)',
        meaning: 'ghét cay ghét đắng, căm ghét',
        example: 'She detests washing the dishes.',
        exampleMeaning: 'Cô ấy ghét cay ghét đắng việc rửa bát đĩa.'
      }
    ]
  },
  {
    id: 'ta_u1_l4',
    subjectId: 'tienganh',
    subjectName: 'Tiếng Anh 8',
    chapterId: 'ch_tienganh_1',
    chapterNumber: 1,
    lessonNumber: 4,
    title: 'Communication',
    chapter: 'Unit 1: Leisure Time',
    readTimeMinutes: 5,
    summary: 'Communication - Unit 1: Leisure Time',
    keyConcepts: [
      {
        term: 'Mẫu câu nêu ý kiến cá nhân (Everyday English)',
        definition: 'Cách diễn đạt quan điểm và nhận xét về các hoạt động rảnh rỗi trong giao tiếp thực tế.',
        example: 'In my opinion, cycling is healthier than sitting in front of a computer.'
      },
      {
        term: 'Mẫu câu đồng ý và không đồng ý',
        definition: 'I agree with you. / I see your point, but... / That sounds interesting!',
        example: 'I agree with you that reading improves our vocabulary.'
      }
    ],
    vocabulary: [
      {
        id: 'ta_u1_v10',
        word: 'hang out',
        phonetic: '/hæŋ aʊt/',
        partOfSpeech: 'phrasal verb (cụm động từ)',
        meaning: 'đi chơi, tụ tập bạn bè',
        example: 'We often hang out at the youth club.',
        exampleMeaning: 'Chúng tôi thường tụ tập ở câu lạc bộ thanh thiếu niên.'
      },
      {
        id: 'ta_u1_v11',
        word: 'opinion',
        phonetic: '/əˈpɪnjən/',
        partOfSpeech: 'noun (danh từ)',
        meaning: 'ý kiến, quan điểm',
        example: 'What is your opinion on social media?',
        exampleMeaning: 'Ý kiến của bạn về mạng xã hội là gì?'
      }
    ]
  },
  {
    id: 'ta_u1_l5',
    subjectId: 'tienganh',
    subjectName: 'Tiếng Anh 8',
    chapterId: 'ch_tienganh_1',
    chapterNumber: 1,
    lessonNumber: 5,
    title: 'Skills 1',
    chapter: 'Unit 1: Leisure Time',
    readTimeMinutes: 5,
    summary: 'Skills 1 - Unit 1: Leisure Time',
    keyConcepts: [
      {
        term: 'Kỹ năng Đọc hiểu (Reading): Hoạt động giải trí lành mạnh',
        definition: 'Đọc văn bản phân tích thói quen giải trí của thiếu niên ở các quốc gia khác nhau.',
        example: 'Reading for specific details: benefits of sports and outdoor hobbies.'
      },
      {
        term: 'Kỹ năng Nói (Speaking): Thuyết trình về sở thích cá nhân',
        definition: 'Thảo luận theo cặp hoặc nhóm về lợi ích của các hoạt động giải trí lành mạnh.',
        example: 'Talk about your favourite free time activity and why you love it.'
      }
    ],
    vocabulary: [
      {
        id: 'ta_u1_v12',
        word: 'knit',
        phonetic: '/nɪt/',
        partOfSpeech: 'verb (động từ)',
        meaning: 'đan len, dệt sợi',
        example: 'My grandmother taught me how to knit a wool scarf.',
        exampleMeaning: 'Bà tôi đã dạy tôi cách đan một chiếc khăn len.'
      },
      {
        id: 'ta_u1_v13',
        word: 'benefit',
        phonetic: '/ˈbenɪfɪt/',
        partOfSpeech: 'noun (danh từ)',
        meaning: 'lợi ích, điều có lợi',
        example: 'Outdoor activities bring many health benefits.',
        exampleMeaning: 'Các hoạt động ngoài trời mang lại nhiều lợi ích sức khỏe.'
      }
    ]
  },
  {
    id: 'ta_u1_l6',
    subjectId: 'tienganh',
    subjectName: 'Tiếng Anh 8',
    chapterId: 'ch_tienganh_1',
    chapterNumber: 1,
    lessonNumber: 6,
    title: 'Skills 2',
    chapter: 'Unit 1: Leisure Time',
    readTimeMinutes: 5,
    summary: 'Skills 2 - Unit 1: Leisure Time',
    keyConcepts: [
      {
        term: 'Kỹ năng Nghe (Listening): Phỏng vấn về sở thích',
        definition: 'Nghe hiểu thông tin chi tiết về hoạt động rảnh rỗi của các bạn học sinh.',
        example: 'Listening to an interview about youth leisure clubs.'
      },
      {
        term: 'Kỹ năng Viết (Writing): Đoạn văn ngắn về hoạt động yêu thích',
        definition: 'Cấu trúc đoạn văn 80-100 từ: Câu chủ đề (Topic sentence), Lý do và ví dụ minh họa, Câu kết luận.',
        example: 'My favourite leisure activity is swimming because it helps me stay healthy and active.'
      }
    ],
    vocabulary: [
      {
        id: 'ta_u1_v14',
        word: 'balance',
        phonetic: '/ˈbæləns/',
        partOfSpeech: 'noun (danh từ)',
        meaning: 'sự cân bằng, trạng thái cân bằng',
        example: 'Try to maintain a balance between study and relaxation.',
        exampleMeaning: 'Hãy cố gắng duy trì sự cân bằng giữa học tập và thư giãn.'
      },
      {
        id: 'ta_u1_v15',
        word: 'improve',
        phonetic: '/ɪmˈpruːv/',
        partOfSpeech: 'verb (động từ)',
        meaning: 'cải thiện, nâng cao, trau dồi',
        example: 'Playing chess improves critical thinking skills.',
        exampleMeaning: 'Chơi cờ vua cải thiện kỹ năng tư duy phản biện.'
      }
    ]
  },
  {
    id: 'ta_u1_l7',
    subjectId: 'tienganh',
    subjectName: 'Tiếng Anh 8',
    chapterId: 'ch_tienganh_1',
    chapterNumber: 1,
    lessonNumber: 7,
    title: 'Looking Back',
    chapter: 'Unit 1: Leisure Time',
    readTimeMinutes: 5,
    summary: 'Looking Back - Unit 1: Leisure Time',
    keyConcepts: [
      {
        term: 'Ôn tập hệ thống Từ vựng Unit 1',
        definition: 'Củng cố nhóm từ vựng về sở thích, hoạt động giải trí và các cụm tính từ chỉ sự yêu thích.',
        example: 'leisure, origami, craft, fond of, keen on, hooked on'
      },
      {
        term: 'Ôn tập Ngữ pháp: Danh động từ (V-ing)',
        definition: 'Luyện tập chia dạng đúng của động từ sau các động từ chỉ sự yêu thích và không thích.',
        example: 'She fancies (draw) -> drawing pictures.'
      }
    ],
    vocabulary: [
      {
        id: 'ta_u1_v16',
        word: 'creative',
        phonetic: '/kriˈeɪtɪv/',
        partOfSpeech: 'adjective (tính từ)',
        meaning: 'sáng tạo, có tính sáng tạo',
        example: 'DIY crafts help students become more creative.',
        exampleMeaning: 'Đồ thủ công DIY giúp học sinh trở nên sáng tạo hơn.'
      },
      {
        id: 'ta_u1_v17',
        word: 'relaxing',
        phonetic: '/rɪˈlæksɪŋ/',
        partOfSpeech: 'adjective (tính từ)',
        meaning: 'mang tính thư giãn, sảng khoái',
        example: 'Listening to music is very relaxing.',
        exampleMeaning: 'Nghe nhạc rất thư giãn.'
      }
    ]
  },
  {
    id: 'ta_u1_l8',
    subjectId: 'tienganh',
    subjectName: 'Tiếng Anh 8',
    chapterId: 'ch_tienganh_1',
    chapterNumber: 1,
    lessonNumber: 8,
    title: 'Project',
    chapter: 'Unit 1: Leisure Time',
    readTimeMinutes: 5,
    summary: 'Project - Unit 1: Leisure Time',
    keyConcepts: [
      {
        term: 'Dự án học tập: Leisure Activities Survey',
        definition: 'Tiến hành khảo sát về các hoạt động rảnh rỗi phổ biến nhất của các bạn trong lớp và trình bày poster.',
        example: 'Conduct a classroom survey: What do our classmates do in their free time?'
      },
      {
        term: 'Kỹ năng trình bày kết quả khảo sát',
        definition: 'Cấu trúc bài báo cáo: Giới thiệu mục tiêu, Số liệu khảo sát, Nhận xét và kết luận.',
        example: 'Most students in our class enjoy playing sports.'
      }
    ],
    vocabulary: [
      {
        id: 'ta_u1_v18',
        word: 'survey',
        phonetic: '/ˈsɜːveɪ/',
        partOfSpeech: 'noun (danh từ)',
        meaning: 'cuộc khảo sát, thăm dò ý kiến',
        example: 'We conducted a survey on leisure time.',
        exampleMeaning: 'Chúng tôi đã tiến hành một cuộc khảo sát về thời gian rảnh rỗi.'
      },
      {
        id: 'ta_u1_v19',
        word: 'presentation',
        phonetic: '/ˌpreznˈteɪʃn/',
        partOfSpeech: 'noun (danh từ)',
        meaning: 'bài thuyết trình, bài báo cáo',
        example: 'Each group prepared an interesting presentation.',
        exampleMeaning: 'Mỗi nhóm đã chuẩn bị một bài thuyết trình thú vị.'
      }
    ]
  },

  // --- TIẾNG ANH 8: UNIT 2 ---
  {
    id: 'ta_u2_l1',
    subjectId: 'tienganh',
    subjectName: 'Tiếng Anh 8',
    chapterId: 'ch_tienganh_2',
    chapterNumber: 2,
    lessonNumber: 1,
    title: 'Getting Started',
    chapter: 'Unit 2: Life in the Countryside',
    readTimeMinutes: 5,
    summary: 'Getting Started - Unit 2: Life in the Countryside',
    keyConcepts: [
      {
        term: 'Hội thoại khởi động: It\'s harvest time!',
        definition: 'Làm quen với chủ đề cuộc sống nông thôn, mùa gặt và các hoạt động của người dân làng quê.',
        example: 'Harvest time in the village is busy but peaceful.'
      }
    ],
    vocabulary: [
      {
        id: 'ta_u2_v1',
        word: 'harvest',
        phonetic: '/ˈhɑːvɪst/',
        partOfSpeech: 'noun/verb',
        meaning: 'vụ thu hoạch, mùa gặt; thu hoạch',
        example: 'Farmers are busy during the harvest season.',
        exampleMeaning: 'Nông dân rất bận rộn trong mùa thu hoạch.'
      },
      {
        id: 'ta_u2_v2',
        word: 'paddy field',
        phonetic: '/ˈpædi fiːld/',
        partOfSpeech: 'noun (danh từ)',
        meaning: 'cánh đồng lúa',
        example: 'The golden paddy fields look wonderful.',
        exampleMeaning: 'Những cánh đồng lúa chín vàng trông thật tuyệt đẹp.'
      }
    ]
  },
  {
    id: 'ta_u2_l2',
    subjectId: 'tienganh',
    subjectName: 'Tiếng Anh 8',
    chapterId: 'ch_tienganh_2',
    chapterNumber: 2,
    lessonNumber: 2,
    title: 'A Closer Look 1',
    chapter: 'Unit 2: Life in the Countryside',
    readTimeMinutes: 5,
    summary: 'A Closer Look 1 - Unit 2: Life in the Countryside',
    keyConcepts: [
      {
        term: 'Từ vựng miêu tả cảnh quan và đời sống thôn quê',
        definition: 'Các tính từ chỉ không gian nông thôn: peaceful, vast, picturesque, hospitable.',
        example: 'The countryside is vast and picturesque.'
      },
      {
        term: 'Ngữ âm: Phân biệt hai nguyên âm /ə/ và /ɪ/',
        definition: 'Phát âm chuẩn âm /ə/ (village, cattle, harvest) và âm /ɪ/ (busy, live, trip).',
        example: '/ə/: buffalo, farmer | /ɪ/: village, pick, city'
      }
    ],
    vocabulary: [
      {
        id: 'ta_u2_v3',
        word: 'peaceful',
        phonetic: '/ˈpiːsfl/',
        partOfSpeech: 'adjective (tính từ)',
        meaning: 'yên bình, thanh bình',
        example: 'Life in the countryside is very peaceful.',
        exampleMeaning: 'Cuộc sống ở nông thôn rất thanh bình.'
      },
      {
        id: 'ta_u2_v4',
        word: 'vast',
        phonetic: '/vɑːst/',
        partOfSpeech: 'adjective (tính từ)',
        meaning: 'rộng lớn, bao la, bát ngát',
        example: 'Vast green meadows stretch to the horizon.',
        exampleMeaning: 'Những đồng cỏ xanh bao la trải dài đến tận chân trời.'
      }
    ]
  },
  {
    id: 'ta_u2_l3',
    subjectId: 'tienganh',
    subjectName: 'Tiếng Anh 8',
    chapterId: 'ch_tienganh_2',
    chapterNumber: 2,
    lessonNumber: 3,
    title: 'A Closer Look 2',
    chapter: 'Unit 2: Life in the Countryside',
    readTimeMinutes: 5,
    summary: 'A Closer Look 2 - Unit 2: Life in the Countryside',
    keyConcepts: [
      {
        term: 'So sánh hơn của trạng từ (Comparative forms of adverbs)',
        definition: 'Trạng từ ngắn thêm -er: fast -> faster, hard -> harder, early -> earlier. Trạng từ dài thêm more: more quickly, more beautifully.',
        example: 'He runs faster than me. / She sings more beautifully than her sister.'
      },
      {
        term: 'Trường hợp ngoại lệ đặc biệt',
        definition: 'well -> better, badly -> worse, far -> farther / further, late -> later.',
        example: 'He works harder and does better in exams.'
      }
    ],
    vocabulary: [
      {
        id: 'ta_u2_v5',
        word: 'slowly',
        phonetic: '/ˈsləʊli/',
        partOfSpeech: 'adverb (trạng từ)',
        meaning: 'một cách chậm rãi (so sánh: more slowly)',
        example: 'He drives more slowly in the rain.',
        exampleMeaning: 'Anh ấy lái xe chậm hơn khi trời mưa.'
      },
      {
        id: 'ta_u2_v6',
        word: 'well',
        phonetic: '/wel/',
        partOfSpeech: 'adverb (trạng từ)',
        meaning: 'tốt, giỏi (so sánh: better)',
        example: 'She speaks English better now.',
        exampleMeaning: 'Bây giờ cô ấy nói tiếng Anh tốt hơn.'
      }
    ]
  },
  {
    id: 'ta_u2_l4',
    subjectId: 'tienganh',
    subjectName: 'Tiếng Anh 8',
    chapterId: 'ch_tienganh_2',
    chapterNumber: 2,
    lessonNumber: 4,
    title: 'Communication',
    chapter: 'Unit 2: Life in the Countryside',
    readTimeMinutes: 5,
    summary: 'Communication - Unit 2: Life in the Countryside',
    keyConcepts: [
      {
        term: 'Giao tiếp hàng ngày: Bày tỏ lời khen và phản hồi',
        definition: 'Cách khen ngợi và đón nhận lời khen trong giao tiếp tiếng Anh.',
        example: 'What a beautiful view! / Thank you, I\'m glad you like it.'
      }
    ],
    vocabulary: [
      {
        id: 'ta_u2_v7',
        word: 'picturesque',
        phonetic: '/ˌpɪktʃəˈresk/',
        partOfSpeech: 'adjective (tính từ)',
        meaning: 'đẹp như tranh vẽ',
        example: 'The village is picturesque with hills and rivers.',
        exampleMeaning: 'Ngôi làng đẹp như tranh với đồi núi và sông ngòi.'
      },
      {
        id: 'ta_u2_v8',
        word: 'hospitable',
        phonetic: '/hɒˈspɪtəbl/',
        partOfSpeech: 'adjective (tính từ)',
        meaning: 'hiếu khách, cởi mở',
        example: 'Local villagers are always warm and hospitable.',
        exampleMeaning: 'Người dân địa phương luôn nồng nhiệt và hiếu khách.'
      }
    ]
  },
  {
    id: 'ta_u2_l5',
    subjectId: 'tienganh',
    subjectName: 'Tiếng Anh 8',
    chapterId: 'ch_tienganh_2',
    chapterNumber: 2,
    lessonNumber: 5,
    title: 'Skills 1',
    chapter: 'Unit 2: Life in the Countryside',
    readTimeMinutes: 5,
    summary: 'Skills 1 - Unit 2: Life in the Countryside',
    keyConcepts: [
      {
        term: 'Kỹ năng Đọc & Nói: Cuộc sống của trẻ em nông thôn',
        definition: 'Đọc hiểu về hoạt động thả diều, chăn trâu và trải nghiệm thiên nhiên của trẻ em nông thôn.',
        example: 'Children flying kites on the dike and enjoying fresh air.'
      }
    ],
    vocabulary: [
      {
        id: 'ta_u2_v9',
        word: 'herd',
        phonetic: '/hɜːd/',
        partOfSpeech: 'verb (động từ)',
        meaning: 'chăn dắt trâu bò, gia súc',
        example: 'Children help their parents herd cattle.',
        exampleMeaning: 'Trẻ em giúp cha mẹ chăn dắt gia súc.'
      },
      {
        id: 'ta_u2_v10',
        word: 'fly a kite',
        phonetic: '/flaɪ ə kaɪt/',
        partOfSpeech: 'phrase',
        meaning: 'thả diều',
        example: 'They fly kites in the afternoon wind.',
        exampleMeaning: 'Họ thả diều trong làn gió buổi chiều.'
      }
    ]
  },
  {
    id: 'ta_u2_l6',
    subjectId: 'tienganh',
    subjectName: 'Tiếng Anh 8',
    chapterId: 'ch_tienganh_2',
    chapterNumber: 2,
    lessonNumber: 6,
    title: 'Skills 2',
    chapter: 'Unit 2: Life in the Countryside',
    readTimeMinutes: 5,
    summary: 'Skills 2 - Unit 2: Life in the Countryside',
    keyConcepts: [
      {
        term: 'Kỹ năng Nghe & Viết: Đoạn văn so sánh cuộc sống thành thị và nông thôn',
        definition: 'Nghe bài nói về sự thay đổi của một ngôi làng. Viết đoạn văn so sánh ưu nhược điểm của đời sống làng quê.',
        example: 'Countryside offers fresh air and tranquility, but city has better services.'
      }
    ],
    vocabulary: [
      {
        id: 'ta_u2_v11',
        word: 'tranquility',
        phonetic: '/træŋˈkwɪləti/',
        partOfSpeech: 'noun (danh từ)',
        meaning: 'sự thanh bình, tĩnh lặng',
        example: 'I love the tranquility of rural areas.',
        exampleMeaning: 'Tôi yêu sự yên tĩnh của các vùng thôn quê.'
      },
      {
        id: 'ta_u2_v12',
        word: 'convenient',
        phonetic: '/kənˈviːniənt/',
        partOfSpeech: 'adjective (tính từ)',
        meaning: 'tiện lợi, thuận tiện',
        example: 'City life is more convenient for shopping.',
        exampleMeaning: 'Cuộc sống thành phố thuận tiện hơn cho việc mua sắm.'
      }
    ]
  },
  {
    id: 'ta_u2_l7',
    subjectId: 'tienganh',
    subjectName: 'Tiếng Anh 8',
    chapterId: 'ch_tienganh_2',
    chapterNumber: 2,
    lessonNumber: 7,
    title: 'Looking Back',
    chapter: 'Unit 2: Life in the Countryside',
    readTimeMinutes: 5,
    summary: 'Looking Back - Unit 2: Life in the Countryside',
    keyConcepts: [
      {
        term: 'Ôn tập tổng kết Unit 2',
        definition: 'Hệ thống hóa từ vựng về nông thôn và dạng so sánh hơn của trạng từ.',
        example: 'fast -> faster, quietly -> more quietly, well -> better.'
      }
    ],
    vocabulary: [
      {
        id: 'ta_u2_v13',
        word: 'cattle',
        phonetic: '/ˈkætl/',
        partOfSpeech: 'noun (danh từ số nhiều)',
        meaning: 'gia súc (trâu bò)',
        example: 'The cattle are grazing in the field.',
        exampleMeaning: 'Đàn gia súc đang gặm cỏ trên cánh đồng.'
      }
    ]
  },
  {
    id: 'ta_u2_l8',
    subjectId: 'tienganh',
    subjectName: 'Tiếng Anh 8',
    chapterId: 'ch_tienganh_2',
    chapterNumber: 2,
    lessonNumber: 8,
    title: 'Project',
    chapter: 'Unit 2: Life in the Countryside',
    readTimeMinutes: 5,
    summary: 'Project - Unit 2: Life in the Countryside',
    keyConcepts: [
      {
        term: 'Dự án học tập: Giới thiệu một làng quê Việt Nam',
        definition: 'Làm poster hoặc bài trình chiếu giới thiệu về một làng quê đặc sắc ở Việt Nam.',
        example: 'Present a village in Viet Nam: landscape, people, and daily life.'
      }
    ],
    vocabulary: [
      {
        id: 'ta_u2_v14',
        word: 'poster',
        phonetic: '/ˈpəʊstə(r)/',
        partOfSpeech: 'noun (danh từ)',
        meaning: 'áp phích, tranh thông điệp',
        example: 'We made a colourful poster about our village.',
        exampleMeaning: 'Chúng tôi đã làm một tấm áp phích đầy màu sắc về ngôi làng của mình.'
      }
    ]
  },

  // --- TIẾNG ANH 8: UNIT 3 ---
  {
    id: 'ta_u3_l1',
    subjectId: 'tienganh',
    subjectName: 'Tiếng Anh 8',
    chapterId: 'ch_tienganh_3',
    chapterNumber: 3,
    lessonNumber: 1,
    title: 'Getting Started',
    chapter: 'Unit 3: Teenagers',
    readTimeMinutes: 5,
    summary: 'Getting Started - Unit 3: Teenagers',
    keyConcepts: [
      {
        term: 'Hội thoại khởi động: Teen club activities',
        definition: 'Tìm hiểu về các hoạt động của câu lạc bộ thanh thiếu niên và những mối quan tâm tuổi dậy thì.',
        example: 'Discussion on school clubs and teen interests.'
      }
    ],
    vocabulary: [
      {
        id: 'ta_u3_v1',
        word: 'teenager',
        phonetic: '/ˈtiːneɪdʒə(r)/',
        partOfSpeech: 'noun (danh từ)',
        meaning: 'thanh thiếu niên (13-19 tuổi)',
        example: 'Teenagers love using technology and social media.',
        exampleMeaning: 'Thanh thiếu niên thích sử dụng công nghệ và mạng xã hội.'
      },
      {
        id: 'ta_u3_v2',
        word: 'stress',
        phonetic: '/stres/',
        partOfSpeech: 'noun (danh từ)',
        meaning: 'sự căng thẳng, áp lực',
        example: 'School exams sometimes cause stress.',
        exampleMeaning: 'Các kỳ thi ở trường đôi khi gây ra sự căng thẳng.'
      }
    ]
  },
  {
    id: 'ta_u3_l2',
    subjectId: 'tienganh',
    subjectName: 'Tiếng Anh 8',
    chapterId: 'ch_tienganh_3',
    chapterNumber: 3,
    lessonNumber: 2,
    title: 'A Closer Look 1',
    chapter: 'Unit 3: Teenagers',
    readTimeMinutes: 5,
    summary: 'A Closer Look 1 - Unit 3: Teenagers',
    keyConcepts: [
      {
        term: 'Từ vựng về áp lực học tập và mạng xã hội',
        definition: 'peer pressure, exam stress, schoolwork, browse, post, forum.',
        example: 'Many students feel peer pressure from classmates.'
      },
      {
        term: 'Ngữ âm: Trọng âm của từ có 3 âm tiết tận cùng -ous, -ful',
        definition: 'Trọng âm thường rơi vào âm tiết đầu tiên: wonderful, dangerous, beautiful.',
        example: 'DANG-er-ous, WON-der-ful, BEAU-ti-ful'
      }
    ],
    vocabulary: [
      {
        id: 'ta_u3_v3',
        word: 'peer pressure',
        phonetic: '/pɪə ˈpreʃə(r)/',
        partOfSpeech: 'noun phrase',
        meaning: 'áp lực từ bạn bè đồng trang lứa',
        example: 'Peer pressure can affect teens\' decisions.',
        exampleMeaning: 'Áp lực đồng trang lứa có thể ảnh hưởng đến quyết định của thanh thiếu niên.'
      },
      {
        id: 'ta_u3_v4',
        word: 'browse',
        phonetic: '/braʊz/',
        partOfSpeech: 'verb (động từ)',
        meaning: 'lướt xem (trên mạng, web)',
        example: 'She browses social media before bedtime.',
        exampleMeaning: 'Cô ấy lướt mạng xã hội trước giờ ngủ.'
      }
    ]
  },
  {
    id: 'ta_u3_l3',
    subjectId: 'tienganh',
    subjectName: 'Tiếng Anh 8',
    chapterId: 'ch_tienganh_3',
    chapterNumber: 3,
    lessonNumber: 3,
    title: 'A Closer Look 2',
    chapter: 'Unit 3: Teenagers',
    readTimeMinutes: 5,
    summary: 'A Closer Look 2 - Unit 3: Teenagers',
    keyConcepts: [
      {
        term: 'Câu đơn và câu ghép (Simple & Compound sentences)',
        definition: 'Câu đơn chỉ có một mệnh đề độc lập. Câu ghép gồm hai mệnh đề độc lập nối với nhau bằng liên từ đẳng lập: and, but, or, so.',
        example: 'I studied hard, so I passed the exam.'
      },
      {
        term: 'Từ nối chỉ quan hệ: However và Therefore',
        definition: 'However (tuy nhiên), Therefore (vì vậy, do đó). Đứng sau dấu chấm/chấm phẩy và trước dấu phẩy.',
        example: 'She was tired; however, she finished her project.'
      }
    ],
    vocabulary: [
      {
        id: 'ta_u3_v5',
        word: 'however',
        phonetic: '/haʊˈevə(r)/',
        partOfSpeech: 'adverb (liên từ/trạng từ)',
        meaning: 'tuy nhiên',
        example: 'The exam was difficult; however, he scored high.',
        exampleMeaning: 'Kỳ thi rất khó; tuy nhiên, cậu ấy vẫn đạt điểm cao.'
      },
      {
        id: 'ta_u3_v6',
        word: 'therefore',
        phonetic: '/ˈðeəfɔː(r)/',
        partOfSpeech: 'adverb (liên từ/trạng từ)',
        meaning: 'vì vậy, do đó',
        example: 'He practiced every day; therefore, he won.',
        exampleMeaning: 'Cậu ấy tập luyện mỗi ngày; vì vậy, cậu ấy đã chiến thắng.'
      }
    ]
  },
  {
    id: 'ta_u3_l4',
    subjectId: 'tienganh',
    subjectName: 'Tiếng Anh 8',
    chapterId: 'ch_tienganh_3',
    chapterNumber: 3,
    lessonNumber: 4,
    title: 'Communication',
    chapter: 'Unit 3: Teenagers',
    readTimeMinutes: 5,
    summary: 'Communication - Unit 3: Teenagers',
    keyConcepts: [
      {
        term: 'Giao tiếp hàng ngày: Đưa ra lời khuyên (Giving advice)',
        definition: 'Sử dụng cấu trúc: You should / You ought to / Why don\'t you...? để khuyên bạn giải tỏa căng thẳng.',
        example: 'Why don\'t you talk to your school counselor?'
      }
    ],
    vocabulary: [
      {
        id: 'ta_u3_v7',
        word: 'counselor',
        phonetic: '/ˈkaʊnsələ(r)/',
        partOfSpeech: 'noun (danh từ)',
        meaning: 'chuyên viên tư vấn tâm lý',
        example: 'The school counselor gives helpful advice.',
        exampleMeaning: 'Thầy cô tư vấn tâm lý trường đưa ra những lời khuyên hữu ích.'
      }
    ]
  },
  {
    id: 'ta_u3_l5',
    subjectId: 'tienganh',
    subjectName: 'Tiếng Anh 8',
    chapterId: 'ch_tienganh_3',
    chapterNumber: 3,
    lessonNumber: 5,
    title: 'Skills 1',
    chapter: 'Unit 3: Teenagers',
    readTimeMinutes: 5,
    summary: 'Skills 1 - Unit 3: Teenagers',
    keyConcepts: [
      {
        term: 'Kỹ năng Đọc & Nói: Teen clubs & forums',
        definition: 'Đọc hiểu về diễn đàn học sinh trực tuyến và cách các bạn trẻ chia sẻ kinh nghiệm học tập.',
        example: 'Students sharing study tips on school forums.'
      }
    ],
    vocabulary: [
      {
        id: 'ta_u3_v8',
        word: 'forum',
        phonetic: '/ˈfɔːrəm/',
        partOfSpeech: 'noun (danh từ)',
        meaning: 'diễn đàn thảo luận',
        example: 'Join our class study forum to ask questions.',
        exampleMeaning: 'Hãy tham gia diễn đàn học tập của lớp để đặt câu hỏi.'
      }
    ]
  },
  {
    id: 'ta_u3_l6',
    subjectId: 'tienganh',
    subjectName: 'Tiếng Anh 8',
    chapterId: 'ch_tienganh_3',
    chapterNumber: 3,
    lessonNumber: 6,
    title: 'Skills 2',
    chapter: 'Unit 3: Teenagers',
    readTimeMinutes: 5,
    summary: 'Skills 2 - Unit 3: Teenagers',
    keyConcepts: [
      {
        term: 'Kỹ năng Nghe & Viết: Đoạn văn về giải tỏa áp lực thi cử',
        definition: 'Nghe bài chia sẻ của học sinh về cách vượt qua căng thẳng. Viết đoạn văn về các giải pháp thư giãn tinh thần.',
        example: 'Ways to overcome exam stress: exercise, good sleep, and study plan.'
      }
    ],
    vocabulary: [
      {
        id: 'ta_u3_v9',
        word: 'overcome',
        phonetic: '/ˌəʊvəˈkʌm/',
        partOfSpeech: 'verb (động từ)',
        meaning: 'vượt qua, khắc phục',
        example: 'Planning helps students overcome stress.',
        exampleMeaning: 'Lập kế hoạch giúp học sinh vượt qua căng thẳng.'
      }
    ]
  },
  {
    id: 'ta_u3_l7',
    subjectId: 'tienganh',
    subjectName: 'Tiếng Anh 8',
    chapterId: 'ch_tienganh_3',
    chapterNumber: 3,
    lessonNumber: 7,
    title: 'Looking Back',
    chapter: 'Unit 3: Teenagers',
    readTimeMinutes: 5,
    summary: 'Looking Back - Unit 3: Teenagers',
    keyConcepts: [
      {
        term: 'Ôn tập tổng kết Unit 3',
        definition: 'Củng cố liên từ ghép (and, but, or, so), từ nối (however, therefore) và từ vựng chủ đề thanh thiếu niên.',
        example: 'Compound sentences & connecting words review.'
      }
    ],
    vocabulary: [
      {
        id: 'ta_u3_v10',
        word: 'connect',
        phonetic: '/kəˈnekt/',
        partOfSpeech: 'verb (động từ)',
        meaning: 'kết nối, liên lạc',
        example: 'Social media helps us connect with friends.',
        exampleMeaning: 'Mạng xã hội giúp chúng ta kết nối với bạn bè.'
      }
    ]
  },
  {
    id: 'ta_u3_l8',
    subjectId: 'tienganh',
    subjectName: 'Tiếng Anh 8',
    chapterId: 'ch_tienganh_3',
    chapterNumber: 3,
    lessonNumber: 8,
    title: 'Project',
    chapter: 'Unit 3: Teenagers',
    readTimeMinutes: 5,
    summary: 'Project - Unit 3: Teenagers',
    keyConcepts: [
      {
        term: 'Dự án học tập: Sổ tay giúp bạn tự tin',
        definition: 'Thiết kế một cẩm nang bỏ túi gồm các mẹo quản lý thời gian và giải tỏa áp lực cho học sinh lớp 8.',
        example: 'Create a pocket handbook: Tips to beat teen stress.'
      }
    ],
    vocabulary: [
      {
        id: 'ta_u3_v11',
        word: 'handbook',
        phonetic: '/ˈhændbʊk/',
        partOfSpeech: 'noun (danh từ)',
        meaning: 'sổ tay cẩm nang hướng dẫn',
        example: 'The student handbook has great tips.',
        exampleMeaning: 'Sổ tay học sinh có những lời khuyên rất bổ ích.'
      }
    ]
  },

  // --- TIẾNG ANH 8: UNIT 4 ---
  {
    id: 'ta_u4_l1',
    subjectId: 'tienganh',
    subjectName: 'Tiếng Anh 8',
    chapterId: 'ch_tienganh_4',
    chapterNumber: 4,
    lessonNumber: 1,
    title: 'Getting Started',
    chapter: 'Unit 4: Ethnic Groups of Viet Nam',
    readTimeMinutes: 5,
    summary: 'Getting Started - Unit 4: Ethnic Groups of Viet Nam',
    keyConcepts: [
      {
        term: 'Hội thoại khởi động: At the Museum of Ethnology',
        definition: 'Tìm hiểu về nét đẹp văn hóa và sự đa dạng của 54 dân tộc anh em trên đất nước Việt Nam.',
        example: 'Viet Nam has 54 ethnic groups living together peacefully.'
      }
    ],
    vocabulary: [
      {
        id: 'ta_u4_v1',
        word: 'ethnic group',
        phonetic: '/ˈeθnɪk ɡruːp/',
        partOfSpeech: 'noun phrase',
        meaning: 'nhóm dân tộc',
        example: 'There are 54 ethnic groups in Viet Nam.',
        exampleMeaning: 'Có 54 nhóm dân tộc ở Việt Nam.'
      },
      {
        id: 'ta_u4_v2',
        word: 'heritage',
        phonetic: '/ˈherɪtɪdʒ/',
        partOfSpeech: 'noun (danh từ)',
        meaning: 'di sản văn hóa',
        example: 'We must preserve our cultural heritage.',
        exampleMeaning: 'Chúng ta phải giữ gìn di sản văn hóa của mình.'
      }
    ]
  },
  {
    id: 'ta_u4_l2',
    subjectId: 'tienganh',
    subjectName: 'Tiếng Anh 8',
    chapterId: 'ch_tienganh_4',
    chapterNumber: 4,
    lessonNumber: 2,
    title: 'A Closer Look 1',
    chapter: 'Unit 4: Ethnic Groups of Viet Nam',
    readTimeMinutes: 5,
    summary: 'A Closer Look 1 - Unit 4: Ethnic Groups of Viet Nam',
    keyConcepts: [
      {
        term: 'Từ vựng văn hóa dân tộc',
        definition: 'stilt house (nhà sàn), terraced fields (ruộng bậc thang), costume (trang phục truyền thống), communal house (nhà rông).',
        example: 'The Tay and Nung live in traditional stilt houses.'
      },
      {
        term: 'Ngữ âm: Phân biệt hai phụ âm /k/ và /ɡ/',
        definition: 'Phụ âm vô thanh /k/ (costume, folk, keep) và hữu thanh /ɡ/ (group, gather, guest).',
        example: '/k/: kitchen, folk | /ɡ/: group, garden'
      }
    ],
    vocabulary: [
      {
        id: 'ta_u4_v3',
        word: 'stilt house',
        phonetic: '/stɪlt haʊs/',
        partOfSpeech: 'noun phrase',
        meaning: 'nhà sàn',
        example: 'Many ethnic minorities live in stilt houses.',
        exampleMeaning: 'Nhiều đồng bào thiểu số sinh sống trong nhà sàn.'
      },
      {
        id: 'ta_u4_v4',
        word: 'terraced field',
        phonetic: '/ˈterəst fiːld/',
        partOfSpeech: 'noun phrase',
        meaning: 'ruộng bậc thang',
        example: 'Mu Cang Chai is famous for terraced fields.',
        exampleMeaning: 'Mù Cang Chải nổi tiếng với những thửa ruộng bậc thang.'
      }
    ]
  },
  {
    id: 'ta_u4_l3',
    subjectId: 'tienganh',
    subjectName: 'Tiếng Anh 8',
    chapterId: 'ch_tienganh_4',
    chapterNumber: 4,
    lessonNumber: 3,
    title: 'A Closer Look 2',
    chapter: 'Unit 4: Ethnic Groups of Viet Nam',
    readTimeMinutes: 5,
    summary: 'A Closer Look 2 - Unit 4: Ethnic Groups of Viet Nam',
    keyConcepts: [
      {
        term: 'Câu hỏi Yes/No và câu hỏi Wh- (Questions)',
        definition: 'Cấu trúc câu hỏi để tìm hiểu thông tin về phong tục tập quán: Do you...? / Which ethnic group...? / Where do they live?',
        example: 'Which ethnic group has the largest population in Viet Nam? - The Kinh.'
      },
      {
        term: 'Mạo từ a, an, the (Articles)',
        definition: 'Quy tắc dùng a/an với danh từ số ít đếm được khi nhắc đến lần đầu; the khi danh từ đã được xác định hoặc duy nhất.',
        example: 'She wears a colourful costume. The costume was woven by her mother.'
      }
    ],
    vocabulary: [
      {
        id: 'ta_u4_v5',
        word: 'costume',
        phonetic: '/ˈkɒstjuːm/',
        partOfSpeech: 'noun (danh từ)',
        meaning: 'trang phục truyền thống',
        example: 'Each ethnic group has its own unique costume.',
        exampleMeaning: 'Mỗi nhóm dân tộc có trang phục độc đáo riêng.'
      },
      {
        id: 'ta_u4_v6',
        word: 'weave',
        phonetic: '/wiːv/',
        partOfSpeech: 'verb (động từ)',
        meaning: 'dệt (vải, thổ cẩm)',
        example: 'Women weave cloth on traditional looms.',
        exampleMeaning: 'Phụ nữ dệt vải trên các khung dệt truyền thống.'
      }
    ]
  },
  {
    id: 'ta_u4_l4',
    subjectId: 'tienganh',
    subjectName: 'Tiếng Anh 8',
    chapterId: 'ch_tienganh_4',
    chapterNumber: 4,
    lessonNumber: 4,
    title: 'Communication',
    chapter: 'Unit 4: Ethnic Groups of Viet Nam',
    readTimeMinutes: 5,
    summary: 'Communication - Unit 4: Ethnic Groups of Viet Nam',
    keyConcepts: [
      {
        term: 'Giao tiếp hàng ngày: Hỏi đường và hỏi thông tin văn hóa',
        definition: 'Cách đặt câu hỏi lịch sự về các lễ hội truyền thống địa phương.',
        example: 'Could you tell me more about the Gong festival?'
      }
    ],
    vocabulary: [
      {
        id: 'ta_u4_v7',
        word: 'festival',
        phonetic: '/ˈfestɪvl/',
        partOfSpeech: 'noun (danh từ)',
        meaning: 'lễ hội truyền thống',
        example: 'The Elephant Race is an exciting festival.',
        exampleMeaning: 'Đua voi là một lễ hội đầy hào hứng.'
      }
    ]
  },
  {
    id: 'ta_u4_l5',
    subjectId: 'tienganh',
    subjectName: 'Tiếng Anh 8',
    chapterId: 'ch_tienganh_4',
    chapterNumber: 4,
    lessonNumber: 5,
    title: 'Skills 1',
    chapter: 'Unit 4: Ethnic Groups of Viet Nam',
    readTimeMinutes: 5,
    summary: 'Skills 1 - Unit 4: Ethnic Groups of Viet Nam',
    keyConcepts: [
      {
        term: 'Kỹ năng Đọc & Nói: Phong tục nhà rông Tây Nguyên',
        definition: 'Đọc hiểu về vai trò của nhà rông (communal house) trong đời sống tâm linh và cộng đồng các dân tộc Ba Na, Gia Rai.',
        example: 'The communal house is the heart of the village.'
      }
    ],
    vocabulary: [
      {
        id: 'ta_u4_v8',
        word: 'communal house',
        phonetic: '/kəˈmjuːnl haʊs/',
        partOfSpeech: 'noun phrase',
        meaning: 'nhà rông, nhà sinh hoạt cộng đồng',
        example: 'Villagers gather at the communal house for meetings.',
        exampleMeaning: 'Dân làng tụ họp tại nhà rông để hội họp.'
      }
    ]
  },
  {
    id: 'ta_u4_l6',
    subjectId: 'tienganh',
    subjectName: 'Tiếng Anh 8',
    chapterId: 'ch_tienganh_4',
    chapterNumber: 4,
    lessonNumber: 6,
    title: 'Skills 2',
    chapter: 'Unit 4: Ethnic Groups of Viet Nam',
    readTimeMinutes: 5,
    summary: 'Skills 2 - Unit 4: Ethnic Groups of Viet Nam',
    keyConcepts: [
      {
        term: 'Kỹ năng Nghe & Viết: Đoạn văn về một dân tộc ở Việt Nam',
        definition: 'Nghe thông tin về người Chăm. Viết đoạn văn giới thiệu đặc điểm dân cư, nơi ở và nghề truyền thống.',
        example: 'Writing about an ethnic group: population, location, and crafts.'
      }
    ],
    vocabulary: [
      {
        id: 'ta_u4_v9',
        word: 'pottery',
        phonetic: '/ˈpɒtəri/',
        partOfSpeech: 'noun (danh từ)',
        meaning: 'nghề làm gốm, đồ gốm',
        example: 'Bau Truc is known for traditional Cham pottery.',
        exampleMeaning: 'Bàu Trúc nổi tiếng với nghề làm gốm Chăm truyền thống.'
      }
    ]
  },
  {
    id: 'ta_u4_l7',
    subjectId: 'tienganh',
    subjectName: 'Tiếng Anh 8',
    chapterId: 'ch_tienganh_4',
    chapterNumber: 4,
    lessonNumber: 7,
    title: 'Looking Back',
    chapter: 'Unit 4: Ethnic Groups of Viet Nam',
    readTimeMinutes: 5,
    summary: 'Looking Back - Unit 4: Ethnic Groups of Viet Nam',
    keyConcepts: [
      {
        term: 'Ôn tập tổng kết Unit 4',
        definition: 'Hệ thống hóa từ vựng về văn hóa các dân tộc và cách dùng mạo từ a/an/the cùng các dạng câu hỏi.',
        example: 'Review of question words and articles.'
      }
    ],
    vocabulary: [
      {
        id: 'ta_u4_v10',
        word: 'diversity',
        phonetic: '/daɪˈvɜːsəti/',
        partOfSpeech: 'noun (danh từ)',
        meaning: 'sự đa dạng, phong phú',
        example: 'We are proud of our cultural diversity.',
        exampleMeaning: 'Chúng tôi tự hào về sự đa dạng văn hóa của đất nước.'
      }
    ]
  },
  {
    id: 'ta_u4_l8',
    subjectId: 'tienganh',
    subjectName: 'Tiếng Anh 8',
    chapterId: 'ch_tienganh_4',
    chapterNumber: 4,
    lessonNumber: 8,
    title: 'Project',
    chapter: 'Unit 4: Ethnic Groups of Viet Nam',
    readTimeMinutes: 5,
    summary: 'Project - Unit 4: Ethnic Groups of Viet Nam',
    keyConcepts: [
      {
        term: 'Dự án học tập: Triển lãm nét đẹp các dân tộc Việt Nam',
        definition: 'Làm tập tranh ảnh và giới thiệu trang phục hoặc lễ hội của một dân tộc anh em.',
        example: 'Make a photo exhibition of ethnic minority cultures in Viet Nam.'
      }
    ],
    vocabulary: [
      {
        id: 'ta_u4_v11',
        word: 'exhibition',
        phonetic: '/ˌeksɪˈbɪʃn/',
        partOfSpeech: 'noun (danh từ)',
        meaning: 'triển lãm, cuộc trưng bày',
        example: 'Our school held an ethnic culture exhibition.',
        exampleMeaning: 'Trường chúng tôi đã tổ chức một buổi triển lãm văn hóa các dân tộc.'
      }
    ]
  }
];

export const SAMPLE_QUIZZES: { [lessonId: string]: QuickQuiz } = {
  ta_u1_l1: {
    id: 'quiz_ta_u1_l1',
    lessonId: 'ta_u1_l1',
    subjectId: 'tienganh',
    title: '5 Câu hỏi trắc nghiệm từ vựng: Unit 1 - Lesson 1: Getting Started',
    timeLimitSeconds: 180,
    questions: [
      {
        id: 'ta_u1_q1',
        question: 'Which activity means “lướt Internet”?',
        options: [
          'Doing puzzles',
          'Surfing the net',
          'Cooking',
          'Cycling'
        ],
        correctIndex: 1,
        explanation: 'Surfing the net có nghĩa là lướt Internet.',
        hint: 'Cụm từ "net" là viết tắt của "Internet".',
        hints: [
          'Hãy chú ý đến từ "net" liên quan đến mạng Internet.',
          'Xem lại nghĩa: Surfing the net = lướt Internet.',
          'Đáp án đúng là Surfing the net.'
        ],
        knowledgeTopic: 'Từ vựng hoạt động rảnh rỗi',
        lessonSectionRef: 'Từ vựng SGK'
      },
      {
        id: 'ta_u1_q2',
        question: '“Doing DIY” có nghĩa là gì?',
        options: [
          'Làm đồ thủ công DIY',
          'Nấu ăn',
          'Đạp xe',
          'Nhắn tin cho bạn bè'
        ],
        correctIndex: 0,
        explanation: 'Doing DIY là làm đồ thủ công DIY.',
        hint: 'DIY là viết tắt của "Do It Yourself" (tự tay làm đồ thủ công).',
        hints: [
          'DIY là viết tắt của "Do It Yourself".',
          'Liên quan đến việc tự làm các đồ thủ công mỹ nghệ.',
          'Đáp án đúng là: Làm đồ thủ công DIY.'
        ],
        knowledgeTopic: 'Từ vựng hoạt động rảnh rỗi',
        lessonSectionRef: 'Từ vựng SGK'
      },
      {
        id: 'ta_u1_q3',
        question: 'Hoạt động nào có nghĩa là “giải câu đố”?',
        options: [
          'Cooking',
          'Cycling',
          'Doing puzzles',
          'Playing sport'
        ],
        correctIndex: 2,
        explanation: 'Doing puzzles có nghĩa là giải câu đố.',
        hint: 'Từ "puzzle" có nghĩa là câu đố, trò chơi ghép hình.',
        hints: [
          'Tìm từ chứa chữ "puzzle".',
          'Doing puzzles nghĩa là chơi giải câu đố.',
          'Đáp án chính xác là Doing puzzles.'
        ],
        knowledgeTopic: 'Từ vựng hoạt động rảnh rỗi',
        lessonSectionRef: 'Từ vựng SGK'
      },
      {
        id: 'ta_u1_q4',
        question: '“Messaging friends” có nghĩa là gì?',
        options: [
          'Làm hoa giấy',
          'Nhắn tin cho bạn bè',
          'Đan len',
          'Chơi thể thao'
        ],
        correctIndex: 1,
        explanation: 'Messaging friends là nhắn tin cho bạn bè.',
        hint: '"Message" là tin nhắn, "friends" là những người bạn.',
        hints: [
          '"Messaging" bắt nguồn từ chữ message (tin nhắn).',
          '"Friends" nghĩa là bạn bè.',
          'Đáp án đúng là: Nhắn tin cho bạn bè.'
        ],
        knowledgeTopic: 'Từ vựng hoạt động rảnh rỗi',
        lessonSectionRef: 'Từ vựng SGK'
      },
      {
        id: 'ta_u1_q5',
        question: 'Từ nào có nghĩa là “nấu ăn”?',
        options: [
          'Knitting',
          'Cooking',
          'Cycling',
          'Cinema'
        ],
        correctIndex: 1,
        explanation: 'Cooking có nghĩa là nấu ăn.',
        hint: 'Động từ "cook" quen thuộc dùng để chỉ việc nấu nướng món ăn.',
        hints: [
          'Động từ quen thuộc bắt đầu bằng chữ "cook".',
          'Cooking là danh từ chỉ hoạt động nấu ăn.',
          'Đáp án chính xác là Cooking.'
        ],
        knowledgeTopic: 'Từ vựng hoạt động rảnh rỗi',
        lessonSectionRef: 'Từ vựng SGK'
      }
    ]
  },
  toan_ch1_b1: {
    id: 'quiz_toan_ch1_b1',
    lessonId: 'toan_ch1_b1',
    subjectId: 'toan',
    title: '5 Câu hỏi tự kiểm tra: Bài 1 - Đơn thức',
    timeLimitSeconds: 180,
    questions: [
      {
        id: 'toan_b1_q1',
        question: 'Đơn thức là biểu thức đại số chỉ gồm một số hoặc một biến, hoặc một ... giữa các số và biến.',
        options: ['Tổng', 'Tích', 'Hiệu', 'Thương'],
        correctIndex: 1,
        explanation: 'Theo SGK Toán 8 (Kết nối tri thức, Trang 5): Đơn thức là biểu thức đại số chỉ gồm một số hoặc một biến, hoặc một tích giữa các số và các biến.',
        hint: 'Đơn thức chỉ gồm một số, một biến hoặc tích các số và biến, không chứa phép cộng trừ giữa các biến.',
        hints: [
          'Đơn thức chỉ gồm một số, một biến hoặc tích giữa các số và biến, không có phép cộng hay phép trừ giữa các biến.',
          'Kết quả của phép nhân trong toán học được gọi là gì? Hãy phân biệt giữa Tổng (cộng), Tích (nhân), Hiệu (trừ) và Thương (chia).',
          'Đọc lại định nghĩa mở đầu trang 5 SGK: "Đơn thức là biểu thức đại số chỉ gồm một số hoặc một biến, hoặc một tích giữa các số và biến."'
        ],
        knowledgeTopic: 'Khái niệm đơn thức',
        lessonSectionRef: 'Khái niệm đơn thức'
      },
      {
        id: 'toan_b1_q2',
        question: 'Biểu thức nào sau đây là đơn thức?',
        options: ['$x + 2y$', '$3xy$', '$x - y$', '$\\frac{x}{y}$'],
        correctIndex: 1,
        explanation: 'Biểu thức $3xy$ là đơn thức vì chỉ gồm tích của số 3 và hai biến $x, y$. Còn $x + 2y$, $x - y$ chứa phép cộng trừ và $\\frac{x}{y}$ chứa biến ở mẫu nên không phải là đơn thức.',
        hint: 'Đơn thức không được chứa phép cộng hay phép trừ giữa các biến.',
        hints: [
          'Đơn thức chỉ gồm một số, một biến hoặc tích giữa các số và biến. Nếu có dấu cộng hoặc trừ giữa các biến thì đó không phải đơn thức.',
          'Kiểm tra từng biểu thức: $x + 2y$ có phép cộng, $x - y$ có phép trừ, $\\frac{x}{y}$ có biến ở mẫu. Còn $3xy$ là phép tính gì?',
          'Biểu thức $3xy$ chỉ gồm tích của số 3 và hai biến $x, y$, do đó nó chính là một đơn thức.'
        ],
        knowledgeTopic: 'Nhận biết đơn thức',
        lessonSectionRef: 'Khái niệm đơn thức'
      },
      {
        id: 'toan_b1_q3',
        question: 'Với đơn thức $-6x^3y^2$, hệ số là:',
        options: ['$6$', '$-6$', '$5$', '$3$'],
        correctIndex: 1,
        explanation: 'Trong đơn thức thu gọn $-6x^3y^2$, hệ số là số đứng trước các biến (kể cả dấu âm), tức là $-6$. Phần biến là $x^3y^2$ (và bậc là $3 + 2 = 5$).',
        hint: 'Hệ số là phần số đứng trước các biến trong đơn thức thu gọn. Chú ý dấu của số đó.',
        hints: [
          'Hệ số là phần số đứng trước các biến trong đơn thức thu gọn. Hãy chú ý dấu đứng trước số.',
          'Nhìn kỹ dấu đứng trước số 6 trong biểu thức $-6x^3y^2$. Dấu âm là một phần không thể tách rời của hệ số!',
          'Trong $-6x^3y^2$, hệ số là số âm: $-6$. Số 6 là thiếu dấu âm, còn 5 là bậc của đơn thức ($3 + 2 = 5$).'
        ],
        knowledgeTopic: 'Hệ số của đơn thức',
        lessonSectionRef: 'Đơn thức thu gọn, hệ số và phần biến'
      },
      {
        id: 'toan_b1_q4',
        question: 'Cặp đơn thức nào sau đây đồng dạng?',
        options: ['$2x^2y$ và $-5x^2y$', '$2xy$ và $2x^2y$', '$3x^2$ và $3x$', '$x^2y$ và $xy^2$'],
        correctIndex: 0,
        explanation: 'Hai đơn thức đồng dạng là hai đơn thức có hệ số khác 0 và có cùng phần biến. Cả $2x^2y$ và $-5x^2y$ đều có cùng phần biến là $x^2y$.',
        hint: 'Hai đơn thức đồng dạng phải có hệ số khác 0 và có CÙNG phần biến (các biến và số mũ tương ứng hoàn toàn giống nhau).',
        hints: [
          'Hai đơn thức đồng dạng phải có hệ số khác 0 và có CÙNG phần biến (cùng biến và cùng số mũ).',
          'So sánh phần biến ở từng phương án: Ở B, $xy$ khác $x^2y$; Ở C, $x^2$ khác $x$; Ở D, $x^2y$ khác $xy^2$. Cặp nào có phần biến giống hệt nhau?',
          'Cặp $2x^2y$ và $-5x^2y$ có cùng phần biến $x^2y$ và hệ số $2, -5 \\neq 0$, nên chúng là hai đơn thức đồng dạng.'
        ],
        knowledgeTopic: 'Đơn thức đồng dạng',
        lessonSectionRef: 'Hai đơn thức đồng dạng'
      },
      {
        id: 'toan_b1_q5',
        question: 'Tính: $2x^2y + 3x^2y$',
        options: ['$5x^2y$', '$6x^2y$', '$5xy$', '$5x^4y^2$'],
        correctIndex: 0,
        explanation: 'Để cộng hai đơn thức đồng dạng, ta cộng các hệ số với nhau và giữ nguyên phần biến: $2x^2y + 3x^2y = (2 + 3)x^2y = 5x^2y$.',
        hint: 'Áp dụng quy tắc SGK: Để cộng các đơn thức đồng dạng, ta cộng các hệ số với nhau và giữ nguyên phần biến.',
        hints: [
          'Áp dụng quy tắc SGK: Để cộng các đơn thức đồng dạng, ta cộng các hệ số với nhau và giữ nguyên phần biến.',
          'Cộng hai hệ số: $2 + 3 = 5$. Giữ nguyên phần biến $x^2y$ (không được thay đổi số mũ của biến).',
          'Ta lấy $(2 + 3)x^2y = 5x^2y$. Không được nhân hệ số thành 6 hay làm mất số mũ của $x$ thành $xy$.'
        ],
        knowledgeTopic: 'Cộng đơn thức đồng dạng',
        lessonSectionRef: 'Cộng, trừ đơn thức đồng dạng'
      }
    ]
  },
  toan_ch1_b2: {
    id: 'quiz_toan_ch1_b2',
    lessonId: 'toan_ch1_b2',
    subjectId: 'toan',
    title: '5 Câu hỏi tự kiểm tra: Bài 2 - Đa thức',
    timeLimitSeconds: 180,
    questions: [
      {
        id: 'toan_b2_q1',
        question: 'Đa thức là tổng của ... ?',
        options: [
          'Những đơn thức.',
          'Những số tự nhiên.',
          'Những biến số.',
          'Những phân số.'
        ],
        correctIndex: 0,
        explanation: 'Theo khái niệm đã học, đa thức là tổng của những đơn thức.',
        hint: 'Xem lại mục 1: Đa thức là tổng của những biểu thức nào đã học ở Bài 1?',
        hints: [
          'Xem lại mục 1: Đa thức là tổng của những biểu thức nào đã học ở Bài 1?',
          'Mỗi đơn thức trong tổng gọi là một hạng tử của đa thức.',
          'Theo định nghĩa đã học: Đa thức là tổng của những đơn thức.'
        ],
        knowledgeTopic: 'Khái niệm đa thức',
        lessonSectionRef: '1. Khái niệm đa thức'
      },
      {
        id: 'toan_b2_q2',
        question: 'Biểu thức nào sau đây là đa thức?',
        options: [
          '$2x + 3y - 5$',
          '$\\frac{1}{x} + 2$',
          '$\\sqrt{x} + 1$',
          '$\\frac{2}{x + 1}$'
        ],
        correctIndex: 0,
        explanation: 'Biểu thức A là tổng của các đơn thức. Các biểu thức còn lại không có dạng tổng của những đơn thức theo nội dung bài học.',
        hint: 'Đa thức là tổng của các đơn thức. Đơn thức không chứa biến ở mẫu thức hay dưới dấu căn.',
        hints: [
          'Đa thức là tổng của các đơn thức. Hãy kiểm tra biểu thức nào chỉ gồm các đơn thức cộng trừ với nhau.',
          'Các biểu thức $\\frac{1}{x} + 2$, $\\sqrt{x} + 1$ và $\\frac{2}{x + 1}$ có chứa biến ở mẫu số hoặc dưới dấu căn nên không phải là tổng của các đơn thức.',
          'Biểu thức $2x + 3y - 5$ là tổng của các đơn thức $2x$, $3y$ và $-5$, do đó là một đa thức.'
        ],
        knowledgeTopic: 'Nhận biết đa thức',
        lessonSectionRef: '1. Khái niệm đa thức'
      },
      {
        id: 'toan_b2_q3',
        question: 'Trong đa thức $A = x^2 + 3xy - 2y + 5$ có bao nhiêu hạng tử?',
        options: [
          '2 hạng tử.',
          '3 hạng tử.',
          '4 hạng tử.',
          '5 hạng tử.'
        ],
        correctIndex: 2,
        explanation: 'Các hạng tử là $x^2$; $3xy$; $-2y$; $5$. Vậy có 4 hạng tử.',
        hint: 'Mỗi đơn thức trong tổng gọi là một hạng tử của đa thức. Hãy đếm từng đơn thức trong biểu thức A.',
        hints: [
          'Mỗi đơn thức trong tổng gọi là một hạng tử của đa thức. Hãy liệt kê tất cả các đơn thức trong biểu thức $A$.',
          'Các hạng tử gồm có: $x^2$; $3xy$; $-2y$; $5$.',
          'Đếm lại các hạng tử đã liệt kê: $x^2$; $3xy$; $-2y$; $5$ có tất cả 4 hạng tử.'
        ],
        knowledgeTopic: 'Hạng tử của đa thức',
        lessonSectionRef: '1. Khái niệm đa thức'
      },
      {
        id: 'toan_b2_q4',
        question: 'Đa thức thu gọn là đa thức như thế nào?',
        options: [
          'Có tất cả các hạng tử đồng dạng.',
          'Không có hai hạng tử nào đồng dạng.',
          'Chỉ có một hạng tử.',
          'Không chứa biến.'
        ],
        correctIndex: 1,
        explanation: 'Đa thức thu gọn là đa thức không có hai hạng tử nào đồng dạng.',
        hint: 'Xem lại mục 2: Sau khi nhóm và cộng hết các hạng tử đồng dạng thì trong đa thức có còn hai hạng tử nào đồng dạng nữa không?',
        hints: [
          'Xem lại mục 2 về đa thức thu gọn: Nếu còn hai hạng tử đồng dạng thì ta vẫn có thể tiếp tục thu gọn được.',
          'Do đó khi đã là đa thức thu gọn thì không thể còn hai hạng tử nào đồng dạng với nhau.',
          'Theo định nghĩa SGK: Đa thức thu gọn là đa thức không có hai hạng tử nào đồng dạng.'
        ],
        knowledgeTopic: 'Khái niệm đa thức thu gọn',
        lessonSectionRef: '2. Đa thức thu gọn'
      },
      {
        id: 'toan_b2_q5',
        question: 'Thu gọn đa thức $P = 2x + 3x - y$ ta được kết quả nào?',
        options: [
          '$5x - y$.',
          '$6x - y$.',
          '$5x + y$.',
          '$2x - 4y$.'
        ],
        correctIndex: 0,
        explanation: 'Hai hạng tử $2x$ và $3x$ đồng dạng. Cộng các hệ số và giữ nguyên phần biến, ta được $5x - y$.',
        hint: 'Tìm các hạng tử đồng dạng trong P rồi cộng hệ số và giữ nguyên phần biến.',
        hints: [
          'Trong $P = 2x + 3x - y$, hai hạng tử $2x$ và $3x$ đồng dạng với nhau vì có cùng phần biến $x$.',
          'Cộng các hệ số của hai hạng tử đồng dạng: $2 + 3 = 5$, giữ nguyên biến $x$, ta được $5x$.',
          'Kết hợp với hạng tử còn lại $-y$, ta được kết quả thu gọn là $5x - y$.'
        ],
        knowledgeTopic: 'Thu gọn đa thức',
        lessonSectionRef: '2. Đa thức thu gọn'
      }
    ]
  },
  toan_ch1_b3: {
    id: 'quiz_toan_ch1_b3',
    lessonId: 'toan_ch1_b3',
    subjectId: 'toan',
    title: '5 Câu hỏi tự kiểm tra: Bài 3 - Phép cộng và phép trừ đa thức',
    timeLimitSeconds: 180,
    questions: [
      {
        id: 'toan_b3_q1',
        question: 'Muốn cộng (hay trừ) hai đa thức, ta thực hiện theo quy tắc nào?',
        options: [
          'Nối hai đa thức đã cho bởi dấu “+” (hay dấu “−”) rồi bỏ dấu ngoặc (nếu có) và thu gọn đa thức nhận được.',
          'Nhân hai đa thức với nhau rồi thu gọn.',
          'Chia hai đa thức cho nhau rồi thu gọn.',
          'Chỉ cần cộng hoặc trừ các hệ số.'
        ],
        correctIndex: 0,
        explanation: 'Đây là quy tắc cộng và trừ hai đa thức trong SGK.',
        hint: 'Xem lại quy tắc ở đầu phần Kiến thức trọng tâm: muốn cộng (hay trừ) hai đa thức, ta nối hai đa thức bởi dấu gì rồi làm gì tiếp theo?',
        hints: [
          'Xem lại quy tắc ở mục 1: Muốn cộng (hay trừ) hai đa thức, ta nối hai đa thức bởi dấu gì?',
          'Sau khi nối hai đa thức bởi dấu “+” (hay dấu “−”), bước tiếp theo là bỏ dấu ngoặc (nếu có) và thu gọn đa thức nhận được.',
          'Theo SGK: "Muốn cộng (hay trừ) hai đa thức, ta nối hai đa thức đã cho bởi dấu “+” (hay dấu “−”) rồi bỏ dấu ngoặc (nếu có) và thu gọn đa thức nhận được."'
        ],
        knowledgeTopic: 'Quy tắc cộng và trừ hai đa thức',
        lessonSectionRef: '1. Quy tắc cộng và trừ hai đa thức'
      },
      {
        id: 'toan_b3_q2',
        question: 'Cho hai đa thức $A = 3x + 2y - 1$ và $B = x + y + 2$. Tính $A - B$.',
        options: [
          '$2x + y - 3$.',
          '$2x + 3y + 1$.',
          '$4x + 3y + 1$.',
          '$2x + y + 3$.'
        ],
        correctIndex: 0,
        explanation: 'A − B = (3x + 2y − 1) − (x + y + 2) = 3x + 2y − 1 − x − y − 2 = 2x + y − 3.',
        hint: 'Áp dụng quy tắc: $A - B = (3x + 2y - 1) - (x + y + 2)$. Khi bỏ ngoặc có dấu trừ đằng trước, nhớ đổi dấu tất cả các hạng tử trong $B$.',
        hints: [
          'Bỏ ngoặc có dấu trừ phía trước: $-(x + y + 2) = -x - y - 2$.',
          'Ta có: $A - B = 3x + 2y - 1 - x - y - 2 = (3x - x) + (2y - y) + (-1 - 2)$.',
          'Thu gọn từng nhóm: $(3x - x) = 2x$; $(2y - y) = y$; $(-1 - 2) = -3$. Kết quả là $2x + y - 3$.'
        ],
        knowledgeTopic: 'Trừ hai đa thức',
        lessonSectionRef: '2. Ví dụ minh họa'
      },
      {
        id: 'toan_b3_q3',
        question: 'Phép cộng đa thức có những tính chất nào?',
        options: [
          'Tính chất giao hoán và kết hợp.',
          'Tính chất phân phối và giao hoán.',
          'Tính chất kết hợp và phân phối.',
          'Chỉ có tính chất giao hoán.'
        ],
        correctIndex: 0,
        explanation: 'Phép cộng đa thức có tính chất giao hoán và kết hợp tương tự như phép cộng các số.',
        hint: 'Xem lại mục 3 (Chú ý): Phép cộng đa thức có các tính chất tương tự như phép cộng các số: $A + B = B + A$ và $(A + B) + C = A + (B + C)$.',
        hints: [
          '$A + B = B + A$ là tính chất gì? Và $(A + B) + C = A + (B + C)$ là tính chất gì?',
          '$A + B = B + A$ là tính chất giao hoán; $(A + B) + C = A + (B + C)$ là tính chất kết hợp.',
          'Vậy phép cộng đa thức có tính chất giao hoán và kết hợp.'
        ],
        knowledgeTopic: 'Tính chất phép cộng đa thức',
        lessonSectionRef: '3. Chú ý'
      },
      {
        id: 'toan_b3_q4',
        question: 'Tính tổng:\n$$(x - y) + (y - z) + (z - x)$$',
        options: [
          '0.',
          '$x + y + z$.',
          '$2x - 2y$.',
          '$x - y + z$.'
        ],
        correctIndex: 0,
        explanation: 'Bỏ dấu ngoặc và thu gọn, ta được:\n$$x - y + y - z + z - x = 0.$$',
        hint: 'Bỏ các dấu ngoặc tròn (vì đằng trước đều là dấu cộng nên giữ nguyên các hạng tử) rồi nhóm các biến giống nhau.',
        hints: [
          'Bỏ ngoặc: $x - y + y - z + z - x$.',
          'Nhóm lại: $(x - x) + (y - y) + (z - z)$.',
          'Mỗi nhóm đều trừ đi chính nó: $0 + 0 + 0 = 0$.'
        ],
        knowledgeTopic: 'Cộng nhiều đa thức',
        lessonSectionRef: '2. Ví dụ minh họa'
      },
      {
        id: 'toan_b3_q5',
        question: 'Tính:\n$$(2x - 3y) + (2y - 3z) + (2z - 3x)$$',
        options: [
          '$-x - y - z$.',
          '$x + y + z$.',
          '$-x + y - z$.',
          '$5x - y - z$.'
        ],
        correctIndex: 0,
        explanation: 'Bỏ dấu ngoặc, nhóm các hạng tử đồng dạng và thu gọn, ta được:\n$$-x - y - z.$$',
        hint: 'Bỏ ngoặc rồi nhóm các hạng tử đồng dạng theo từng biến $x$, $y$, $z$: $(2x - 3x) + (-3y + 2y) + (-3z + 2z)$.',
        hints: [
          'Bỏ ngoặc: $2x - 3y + 2y - 3z + 2z - 3x$.',
          'Nhóm theo biến: $(2x - 3x) + (-3y + 2y) + (-3z + 2z)$.',
          'Tính từng nhóm: $2x - 3x = -x$; $-3y + 2y = -y$; $-3z + 2z = -z$. Kết quả là $-x - y - z$.'
        ],
        knowledgeTopic: 'Thu gọn tổng các đa thức',
        lessonSectionRef: '2. Ví dụ minh họa'
      }
    ]
  },
  toan_ch1_b4: {
    id: 'quiz_toan_ch1_b4',
    lessonId: 'toan_ch1_b4',
    subjectId: 'toan',
    title: '5 Câu hỏi tự kiểm tra: Bài 4 - Phép nhân đa thức',
    timeLimitSeconds: 180,
    questions: [
      {
        id: 'toan_b4_q1',
        question: 'Muốn nhân một đơn thức với một đa thức, ta làm như thế nào?',
        options: [
          'Nối hai đa thức đã cho bởi dấu cộng rồi bỏ dấu ngoặc.',
          'Nhân đơn thức với từng hạng tử của đa thức rồi cộng các tích với nhau.',
          'Chỉ nhân đơn thức với hạng tử đầu tiên của đa thức.',
          'Cộng đơn thức với từng hạng tử của đa thức.'
        ],
        correctIndex: 1,
        explanation: 'Muốn nhân một đơn thức với một đa thức, ta nhân đơn thức với từng hạng tử của đa thức rồi cộng các tích với nhau.',
        hint: 'Hãy nhớ rằng đa thức có thể gồm nhiều hạng tử.',
        hints: [
          'Hãy nhớ rằng đa thức có thể gồm nhiều hạng tử.',
          'Đơn thức cần được nhân với từng hạng tử của đa thức.',
          'Đọc lại quy tắc nhân đơn thức với đa thức.'
        ],
        knowledgeTopic: 'Nhận biết quy tắc nhân đơn thức với đa thức',
        lessonSectionRef: '1. NHÂN ĐƠN THỨC VỚI ĐA THỨC'
      },
      {
        id: 'toan_b4_q2',
        question: 'Kết quả của phép nhân:\n$$(-4xy)(2x^2 + xy - y^2)$$\nlà:',
        options: [
          '$-8x^3y - 4x^2y^2 + 4xy^3$.',
          '$-8x^3y + 4x^2y^2 - 4xy^3$.',
          '$-8x^2y - 4xy^2 + 4xy^3$.',
          '$8x^3y - 4x^2y^2 + 4xy^3$.'
        ],
        correctIndex: 0,
        explanation: '(-4xy)(2x² + xy − y²) = (-4xy) · 2x² + (-4xy) · xy + (-4xy) · (-y²) = -8x³y − 4x²y² + 4xy³.',
        hint: 'Hãy nhân -4xy lần lượt với cả ba hạng tử trong ngoặc.',
        hints: [
          'Hãy nhân -4xy lần lượt với cả ba hạng tử trong ngoặc.',
          'Chú ý dấu của tích khi nhân hai số âm và số dương.',
          'Kiểm tra riêng hệ số và số mũ của từng hạng tử.'
        ],
        knowledgeTopic: 'Thực hiện phép nhân đơn thức với đa thức',
        lessonSectionRef: '1. NHÂN ĐƠN THỨC VỚI ĐA THỨC'
      },
      {
        id: 'toan_b4_q3',
        question: 'Muốn nhân một đa thức với một đa thức, ta làm như thế nào?',
        options: [
          'Chỉ nhân hai hạng tử đầu tiên của hai đa thức.',
          'Nhân mỗi hạng tử của đa thức này với từng hạng tử của đa thức kia rồi cộng các kết quả với nhau.',
          'Cộng hai đa thức rồi nhân với một hạng tử bất kỳ.',
          'Chỉ nhân các hạng tử đồng dạng với nhau.'
        ],
        correctIndex: 1,
        explanation: 'Đây là quy tắc nhân một đa thức với một đa thức.',
        hint: 'Hãy chú ý đến tất cả các hạng tử của cả hai đa thức.',
        hints: [
          'Hãy chú ý đến tất cả các hạng tử của cả hai đa thức.',
          'Mỗi hạng tử của đa thức thứ nhất cần nhân với từng hạng tử của đa thức thứ hai.',
          'Đọc lại quy tắc nhân đa thức với đa thức.'
        ],
        knowledgeTopic: 'Nhận biết quy tắc nhân hai đa thức',
        lessonSectionRef: '2. NHÂN ĐA THỨC VỚI ĐA THỨC'
      },
      {
        id: 'toan_b4_q4',
        question: 'Đẳng thức nào sau đây thể hiện tính chất giao hoán của phép nhân đa thức?',
        options: [
          '$A \\cdot B = B \\cdot A$.',
          '$(A \\cdot B) \\cdot C = A \\cdot (B \\cdot C)$.',
          '$A \\cdot (B + C) = A \\cdot B + A \\cdot C$.',
          '$A \\cdot B = A + B$.'
        ],
        correctIndex: 0,
        explanation: 'Tính chất giao hoán được thể hiện bởi: A · B = B · A.',
        hint: 'Hãy chú ý đến việc đổi vị trí hai thừa số.',
        hints: [
          'Hãy chú ý đến việc đổi vị trí hai thừa số.',
          'Tính chất giao hoán cho phép đổi chỗ hai thừa số mà không làm thay đổi tích.',
          'Đối chiếu các đẳng thức với ba tính chất giao hoán, kết hợp và phân phối.'
        ],
        knowledgeTopic: 'Nhận biết tính chất phép nhân đa thức',
        lessonSectionRef: '2. NHÂN ĐA THỨC VỚI ĐA THỨC'
      },
      {
        id: 'toan_b4_q5',
        question: 'Rút gọn biểu thức:\n$$(x + y)(2x - y) - (x - y)(2x + y)$$\nTa được kết quả nào?',
        options: [
          '$2xy$.',
          '$2x^2 + 2y^2$.',
          '$2x^2 - 2xy$.',
          '$2xy - 2y^2$.'
        ],
        correctIndex: 0,
        explanation: 'Ta có:\n(x + y)(2x − y) = 2x² + xy − y².\n(x − y)(2x + y) = 2x² − xy − y².\nDo đó:\n(2x² + xy − y²) − (2x² − xy − y²) = 2xy.',
        hint: 'Hãy khai triển riêng từng tích trước khi thực hiện phép trừ.',
        hints: [
          'Hãy khai triển riêng từng tích trước khi thực hiện phép trừ.',
          'Khi bỏ ngoặc đứng sau dấu trừ, cần đổi dấu tất cả các hạng tử trong ngoặc.',
          'Thu gọn các hạng tử đồng dạng sau khi bỏ ngoặc.'
        ],
        knowledgeTopic: 'Rút gọn biểu thức',
        lessonSectionRef: '2. NHÂN ĐA THỨC VỚI ĐA THỨC'
      }
    ]
  },
  toan_ch1_b5: {
    id: 'quiz_toan_ch1_b5',
    lessonId: 'toan_ch1_b5',
    subjectId: 'toan',
    title: '5 Câu hỏi tự kiểm tra: Bài 5 - Phép chia đa thức cho đơn thức',
    timeLimitSeconds: 180,
    questions: [
      {
        id: 'toan_b5_q1',
        question: 'Đơn thức A chia hết cho đơn thức B (B ≠ 0) khi nào?',
        options: [
          'Mọi biến của B đều là biến của A, với số mũ không lớn hơn số mũ của biến đó trong A.',
          'Mọi biến của B đều có số mũ lớn hơn trong A.',
          'Hai đơn thức phải có cùng hệ số.',
          'Hai đơn thức phải có cùng số biến.'
        ],
        correctIndex: 0,
        explanation: 'Theo kết luận trong SGK: Đơn thức A chia hết cho đơn thức B (B ≠ 0) khi mọi biến của B đều là biến của A với số mũ không lớn hơn số mũ của biến đó trong A.',
        hint: 'Hãy chú ý đến các biến và số mũ của chúng.',
        hints: [
          'Hãy chú ý đến các biến và số mũ của chúng.',
          'Số mũ của biến trong đơn thức chia không được lớn hơn số mũ tương ứng trong đơn thức bị chia.',
          'Đọc lại kết luận về điều kiện chia hết của hai đơn thức trong mục 1.'
        ],
        knowledgeTopic: 'Nhận biết điều kiện chia hết',
        lessonSectionRef: '1. CHIA ĐƠN THỨC CHO ĐƠN THỨC'
      },
      {
        id: 'toan_b5_q2',
        question: 'Kết quả của phép chia:\n$$12x^3y^2 : 3xy$$\nlà:',
        options: [
          '$4x^2y$.',
          '$4x^3y$.',
          '$9x^2y$.',
          '$4x^2y^2$.'
        ],
        correctIndex: 0,
        explanation: 'Ta chia hệ số: $12 : 3 = 4$. Chia các biến: $x^3 : x = x^2$ và $y^2 : y = y$. Kết quả là: $4x^2y$.',
        hint: 'Hãy chia hệ số trước, sau đó chia các lũy thừa cùng biến.',
        hints: [
          'Hãy chia hệ số trước, sau đó chia các lũy thừa cùng biến.',
          'Khi chia hai lũy thừa cùng cơ số, ta lấy số mũ của số bị chia trừ số mũ của số chia.',
          'Tính riêng 12 : 3, x³ : x và y² : y rồi nhân lại.'
        ],
        knowledgeTopic: 'Thực hiện phép chia đơn thức',
        lessonSectionRef: '1. CHIA ĐƠN THỨC CHO ĐƠN THỨC'
      },
      {
        id: 'toan_b5_q3',
        question: 'Đơn thức nào sau đây chia hết cho đơn thức $2xy^2$?',
        options: [
          '$6x^2y^3$.',
          '$6xy$.',
          '$6x^2y$.',
          '$6y^3$.'
        ],
        correctIndex: 0,
        explanation: '$6x^2y^3 : 2xy^2 = 3xy$. Các đơn thức còn lại không chia hết vì thiếu biến x (như $6y^3$) hoặc có số mũ của y nhỏ hơn 2 (như $6xy$ và $6x^2y$).',
        hint: 'Hãy kiểm tra xem đơn thức bị chia có đủ cả hai biến x và y không.',
        hints: [
          'Hãy kiểm tra xem đơn thức bị chia có đủ cả hai biến x và y không.',
          'So sánh số mũ của x và y ở hai đơn thức. Số mũ của y trong đơn thức bị chia phải từ 2 trở lên.',
          'Nhớ rằng số mũ của từng biến trong đơn thức chia phải không lớn hơn số mũ tương ứng trong đơn thức bị chia.'
        ],
        knowledgeTopic: 'Nhận biết trường hợp chia hết',
        lessonSectionRef: '1. CHIA ĐƠN THỨC CHO ĐƠN THỨC'
      },
      {
        id: 'toan_b5_q4',
        question: 'Kết quả của phép chia:\n$$(6x^4y^3 - 8x^3y^4 + 3x^2y^2) : 2x^2y^2$$\nlà:',
        options: [
          '$3x^2y - 4xy^2 + \\frac{3}{2}$.',
          '$3x^2y - 4xy^2 + 3$.',
          '$3x^2y + 4xy^2 + \\frac{3}{2}$.',
          '$3x^2y - 4xy + \\frac{3}{2}$.'
        ],
        correctIndex: 0,
        explanation: 'Ta chia từng hạng tử của đa thức cho đơn thức:\n$$\\begin{aligned} 6x^4y^3 : 2x^2y^2 &= 3x^2y \\\\ -8x^3y^4 : 2x^2y^2 &= -4xy^2 \\\\ 3x^2y^2 : 2x^2y^2 &= \\frac{3}{2} \\end{aligned}$$\nCộng các kết quả lại ta được:\n$$3x^2y - 4xy^2 + \\frac{3}{2}$$',
        hint: 'Hãy chia từng hạng tử của đa thức cho đơn thức.',
        hints: [
          'Hãy chia từng hạng tử của đa thức cho đơn thức.',
          'Thực hiện lần lượt phép chia hệ số và phép chia các lũy thừa cùng biến cho từng hạng tử.',
          'Kiểm tra riêng cả ba hạng tử trước khi cộng các kết quả.'
        ],
        knowledgeTopic: 'Thực hiện phép chia đa thức cho đơn thức',
        lessonSectionRef: '2. CHIA ĐA THỨC CHO ĐƠN THỨC'
      },
      {
        id: 'toan_b5_q5',
        question: 'Muốn chia đa thức A cho đơn thức B trong trường hợp chia hết, ta làm như thế nào?',
        options: [
          'Chỉ chia hạng tử đầu tiên của A cho B.',
          'Chia từng hạng tử của A cho B rồi cộng các kết quả với nhau.',
          'Chia đơn thức B cho từng hạng tử của A.',
          'Cộng các hạng tử của A rồi chia kết quả cho từng biến của B.'
        ],
        correctIndex: 1,
        explanation: 'Đây là quy tắc chia đa thức cho đơn thức trong SGK: Muốn chia đa thức A cho đơn thức B ta chia từng hạng tử của A cho B rồi cộng các kết quả với nhau.',
        hint: 'Hãy nhớ rằng đa thức có nhiều hạng tử.',
        hints: [
          'Hãy nhớ rằng đa thức có nhiều hạng tử.',
          'Mỗi hạng tử của đa thức đều phải được thực hiện phép chia với đơn thức B.',
          'Đọc lại quy tắc chia đa thức cho đơn thức trong phần kiến thức trọng tâm.'
        ],
        knowledgeTopic: 'Hiểu quy tắc chia đa thức cho đơn thức',
        lessonSectionRef: '2. CHIA ĐA THỨC CHO ĐƠN THỨC'
      }
    ]
  },
  toan_ch2_b6: {
    id: 'quiz_toan_ch2_b6',
    lessonId: 'toan_ch2_b6',
    subjectId: 'toan',
    title: '5 Câu hỏi luyện tập: Bài 6 - Hiệu hai bình phương. Bình phương của một tổng. Bình phương của một hiệu',
    timeLimitSeconds: 180,
    questions: [
      {
        id: 'toan_b6_q1',
        question: 'Công thức nào là hằng đẳng thức hiệu hai bình phương?',
        options: [
          '$A^2 - B^2 = (A - B)^2$',
          '$A^2 - B^2 = (A - B)(A + B)$',
          '$A^2 - B^2 = A^2 + 2AB + B^2$',
          '$A^2 - B^2 = (A + B)^2$'
        ],
        correctIndex: 1,
        explanation: 'Hiệu hai bình phương bằng hiệu của hai biểu thức nhân với tổng của chúng: $A^2 - B^2 = (A - B)(A + B)$.',
        hint: 'Hãy nhớ công thức có hai thừa số trong ngoặc.',
        hints: [
          'Lần 1: Hãy nhớ công thức có hai thừa số trong ngoặc.',
          'Lần 2: Hai thừa số là (A − B) và (A + B).',
          'Lần 3: Công thức chuẩn: $A^2 - B^2 = (A - B)(A + B)$.'
        ],
        knowledgeTopic: 'Hiệu hai bình phương',
        lessonSectionRef: '2. Hiệu hai bình phương'
      },
      {
        id: 'toan_b6_q2',
        question: 'Khai triển $(x + 2)^2$ được kết quả nào?',
        options: [
          '$x^2 + 2x + 4$',
          '$x^2 + 4x + 4$',
          '$x^2 + 4$',
          '$x^2 - 4x + 4$'
        ],
        correctIndex: 1,
        explanation: 'Áp dụng $(A + B)^2 = A^2 + 2AB + B^2$, ta được: $(x + 2)^2 = x^2 + 2\\cdot x\\cdot 2 + 2^2 = x^2 + 4x + 4$.',
        hint: 'Xác định A = x, B = 2.',
        hints: [
          'Lần 1: Xác định A = x, B = 2.',
          'Lần 2: Số hạng giữa là 2 · x · 2.',
          'Lần 3: Áp dụng $(A + B)^2 = A^2 + 2AB + B^2$ với A = x, B = 2.'
        ],
        knowledgeTopic: 'Bình phương của một tổng',
        lessonSectionRef: '3. Bình phương của một tổng'
      },
      {
        id: 'toan_b6_q3',
        question: 'Công thức bình phương của một hiệu là gì?',
        options: [
          '$(A - B)^2 = A^2 + 2AB + B^2$',
          '$(A - B)^2 = A^2 - B^2$',
          '$(A - B)^2 = A^2 - 2AB + B^2$',
          '$(A - B)^2 = A^2 + B^2$'
        ],
        correctIndex: 2,
        explanation: 'Bình phương của một hiệu gồm bình phương số thứ nhất, trừ hai lần tích hai số, cộng bình phương số thứ hai: $(A - B)^2 = A^2 - 2AB + B^2$.',
        hint: 'Công thức có ba số hạng.',
        hints: [
          'Lần 1: Công thức có ba số hạng.',
          'Lần 2: Số hạng ở giữa mang dấu trừ.',
          'Lần 3: Áp dụng công thức chuẩn: $(A - B)^2 = A^2 - 2AB + B^2$.'
        ],
        knowledgeTopic: 'Bình phương của một hiệu',
        lessonSectionRef: '4. Bình phương của một hiệu'
      },
      {
        id: 'toan_b6_q4',
        question: 'Biểu thức $x^2 - 9$ viết dưới dạng tích là gì?',
        options: [
          '$(x - 3)^2$',
          '$(x + 3)^2$',
          '$(x - 9)(x + 1)$',
          '$(x - 3)(x + 3)$'
        ],
        correctIndex: 3,
        explanation: '$x^2 - 9 = x^2 - 3^2 = (x - 3)(x + 3)$.',
        hint: 'Nhận ra 9 = 3².',
        hints: [
          'Lần 1: Nhận ra 9 = 3².',
          'Lần 2: Dùng công thức A² − B² = (A − B)(A + B).',
          'Lần 3: Với A = x, B = 3, tích thu được là $(x - 3)(x + 3)$.'
        ],
        knowledgeTopic: 'Áp dụng hiệu hai bình phương',
        lessonSectionRef: '2. Hiệu hai bình phương'
      },
      {
        id: 'toan_b6_q5',
        question: 'Kết quả của $(x - y)^2$ là gì?',
        options: [
          '$x^2 - 2xy + y^2$',
          '$x^2 + 2xy + y^2$',
          '$x^2 - y^2$',
          '$x^2 + y^2$'
        ],
        correctIndex: 0,
        explanation: 'Áp dụng $(A - B)^2 = A^2 - 2AB + B^2$ ta được $x^2 - 2xy + y^2$.',
        hint: 'Bình phương của một hiệu có ba số hạng.',
        hints: [
          'Lần 1: Bình phương của một hiệu có ba số hạng.',
          'Lần 2: Số hạng giữa là −2xy.',
          'Lần 3: Công thức khai triển với hai biến x và y là $x^2 - 2xy + y^2$.'
        ],
        knowledgeTopic: 'Bình phương của một hiệu',
        lessonSectionRef: '4. Bình phương của một hiệu'
      }
    ]
  },
  toan_ch2_b1: {
    id: 'quiz_toan_ch2_b1',
    lessonId: 'toan_ch2_b6',
    subjectId: 'toan',
    title: '5 Câu hỏi luyện tập: Bài 6 - Hiệu hai bình phương. Bình phương của một tổng. Bình phương của một hiệu',
    timeLimitSeconds: 180,
    questions: [
      {
        id: 'toan_b6_q1',
        question: 'Công thức nào là hằng đẳng thức hiệu hai bình phương?',
        options: [
          '$A^2 - B^2 = (A - B)^2$',
          '$A^2 - B^2 = (A - B)(A + B)$',
          '$A^2 - B^2 = A^2 + 2AB + B^2$',
          '$A^2 - B^2 = (A + B)^2$'
        ],
        correctIndex: 1,
        explanation: 'Hiệu hai bình phương bằng hiệu của hai biểu thức nhân với tổng của chúng: $A^2 - B^2 = (A - B)(A + B)$.',
        hint: 'Hãy nhớ công thức có hai thừa số trong ngoặc.',
        hints: [
          'Lần 1: Hãy nhớ công thức có hai thừa số trong ngoặc.',
          'Lần 2: Hai thừa số là (A − B) và (A + B).',
          'Lần 3: Công thức chuẩn: $A^2 - B^2 = (A - B)(A + B)$.'
        ],
        knowledgeTopic: 'Hiệu hai bình phương',
        lessonSectionRef: '2. Hiệu hai bình phương'
      },
      {
        id: 'toan_b6_q2',
        question: 'Khai triển $(x + 2)^2$ được kết quả nào?',
        options: [
          '$x^2 + 2x + 4$',
          '$x^2 + 4x + 4$',
          '$x^2 + 4$',
          '$x^2 - 4x + 4$'
        ],
        correctIndex: 1,
        explanation: 'Áp dụng $(A + B)^2 = A^2 + 2AB + B^2$, ta được: $(x + 2)^2 = x^2 + 2\\cdot x\\cdot 2 + 2^2 = x^2 + 4x + 4$.',
        hint: 'Xác định A = x, B = 2.',
        hints: [
          'Lần 1: Xác định A = x, B = 2.',
          'Lần 2: Số hạng giữa là 2 · x · 2.',
          'Lần 3: Áp dụng $(A + B)^2 = A^2 + 2AB + B^2$ với A = x, B = 2.'
        ],
        knowledgeTopic: 'Bình phương của một tổng',
        lessonSectionRef: '3. Bình phương của một tổng'
      },
      {
        id: 'toan_b6_q3',
        question: 'Công thức bình phương của một hiệu là gì?',
        options: [
          '$(A - B)^2 = A^2 + 2AB + B^2$',
          '$(A - B)^2 = A^2 - B^2$',
          '$(A - B)^2 = A^2 - 2AB + B^2$',
          '$(A - B)^2 = A^2 + B^2$'
        ],
        correctIndex: 2,
        explanation: 'Bình phương của một hiệu gồm bình phương số thứ nhất, trừ hai lần tích hai số, cộng bình phương số thứ hai: $(A - B)^2 = A^2 - 2AB + B^2$.',
        hint: 'Công thức có ba số hạng.',
        hints: [
          'Lần 1: Công thức có ba số hạng.',
          'Lần 2: Số hạng ở giữa mang dấu trừ.',
          'Lần 3: Áp dụng công thức chuẩn: $(A - B)^2 = A^2 - 2AB + B^2$.'
        ],
        knowledgeTopic: 'Bình phương của một hiệu',
        lessonSectionRef: '4. Bình phương của một hiệu'
      },
      {
        id: 'toan_b6_q4',
        question: 'Biểu thức $x^2 - 9$ viết dưới dạng tích là gì?',
        options: [
          '$(x - 3)^2$',
          '$(x + 3)^2$',
          '$(x - 9)(x + 1)$',
          '$(x - 3)(x + 3)$'
        ],
        correctIndex: 3,
        explanation: '$x^2 - 9 = x^2 - 3^2 = (x - 3)(x + 3)$.',
        hint: 'Nhận ra 9 = 3².',
        hints: [
          'Lần 1: Nhận ra 9 = 3².',
          'Lần 2: Dùng công thức A² − B² = (A − B)(A + B).',
          'Lần 3: Với A = x, B = 3, tích thu được là $(x - 3)(x + 3)$.'
        ],
        knowledgeTopic: 'Áp dụng hiệu hai bình phương',
        lessonSectionRef: '2. Hiệu hai bình phương'
      },
      {
        id: 'toan_b6_q5',
        question: 'Kết quả của $(x - y)^2$ là gì?',
        options: [
          '$x^2 - 2xy + y^2$',
          '$x^2 + 2xy + y^2$',
          '$x^2 - y^2$',
          '$x^2 + y^2$'
        ],
        correctIndex: 0,
        explanation: 'Áp dụng $(A - B)^2 = A^2 - 2AB + B^2$ ta được $x^2 - 2xy + y^2$.',
        hint: 'Bình phương của một hiệu có ba số hạng.',
        hints: [
          'Lần 1: Bình phương của một hiệu có ba số hạng.',
          'Lần 2: Số hạng giữa là −2xy.',
          'Lần 3: Công thức khai triển với hai biến x và y là $x^2 - 2xy + y^2$.'
        ],
        knowledgeTopic: 'Bình phương của một hiệu',
        lessonSectionRef: '4. Bình phương của một hiệu'
      }
    ]
  },
  toan_ch2_b7: {
    id: 'quiz_toan_ch2_b7',
    lessonId: 'toan_ch2_b7',
    subjectId: 'toan',
    title: '5 Câu hỏi luyện tập: Bài 7 - Lập phương của một tổng. Lập phương của một hiệu',
    timeLimitSeconds: 180,
    questions: [
      {
        id: 'toan_b7_q1',
        question: 'Công thức lập phương của một tổng là gì?',
        options: [
          '$(A + B)^3 = A^3 + B^3$',
          '$(A + B)^3 = A^3 + 3A^2B + 3AB^2 + B^3$',
          '$(A + B)^3 = A^3 - 3A^2B + 3AB^2 - B^3$',
          '$(A + B)^3 = A^2 + 2AB + B^2$'
        ],
        correctIndex: 1,
        explanation: 'Lập phương của một tổng có bốn số hạng với các hệ số 1, 3, 3, 1.',
        hint: 'Công thức lập phương có bốn số hạng.',
        hints: [
          'Lần 1: Công thức lập phương có bốn số hạng.',
          'Lần 2: Các hệ số lần lượt là 1, 3, 3, 1 và các dấu đều là dấu cộng.'
        ],
        knowledgeTopic: 'Lập phương của một tổng',
        lessonSectionRef: '1. Lập phương của một tổng'
      },
      {
        id: 'toan_b7_q2',
        question: 'Khai triển $(x + 2)^3$ được kết quả nào?',
        options: [
          '$x^3 + 6x^2 + 12x + 8$',
          '$x^3 + 2x^2 + 4x + 8$',
          '$x^3 + 6x^2 + 8$',
          '$x^3 - 6x^2 + 12x - 8$'
        ],
        correctIndex: 0,
        explanation: 'Áp dụng công thức lập phương của một tổng với A = x, B = 2.',
        hint: 'Thay A = x, B = 2 vào công thức.',
        hints: [
          'Lần 1: Thay A = x, B = 2 vào công thức.',
          'Lần 2: Các số hạng lần lượt là $x^3$, $3x^2 \\cdot 2$, $3x \\cdot 2^2$ và $2^3$.'
        ],
        knowledgeTopic: 'Khai triển lập phương của một tổng',
        lessonSectionRef: '1. Lập phương của một tổng'
      },
      {
        id: 'toan_b7_q3',
        question: 'Công thức lập phương của một hiệu là gì?',
        options: [
          '$(A - B)^3 = A^3 + 3A^2B + 3AB^2 + B^3$',
          '$(A - B)^3 = A^3 - B^3$',
          '$(A - B)^3 = A^3 - 3A^2B + 3AB^2 - B^3$',
          '$(A - B)^3 = A^2 - 2AB + B^2$'
        ],
        correctIndex: 2,
        explanation: 'Công thức lập phương của một hiệu có dấu lần lượt là cộng, trừ, cộng, trừ.',
        hint: 'Công thức có bốn số hạng.',
        hints: [
          'Lần 1: Công thức có bốn số hạng.',
          'Lần 2: Dấu của các số hạng lần lượt là +, −, +, −.'
        ],
        knowledgeTopic: 'Lập phương của một hiệu',
        lessonSectionRef: '2. Lập phương của một hiệu'
      },
      {
        id: 'toan_b7_q4',
        question: 'Biểu thức $27 - 27x + 9x^2 - x^3$ viết dưới dạng nào?',
        options: [
          '$(3 + x)^3$',
          '$(x - 3)^3$',
          '$(3 - x)^2$',
          '$(3 - x)^3$'
        ],
        correctIndex: 3,
        explanation: 'Biểu thức có dạng $A^3 - 3A^2B + 3AB^2 - B^3$ với A = 3, B = x.',
        hint: 'Nhận ra 27 = 3³ và số hạng cuối là −x³.',
        hints: [
          'Lần 1: Nhận ra 27 = 3³ và số hạng cuối là −x³.',
          'Lần 2: So sánh dấu và hệ số với công thức lập phương của một hiệu.'
        ],
        knowledgeTopic: 'Viết dưới dạng lập phương của một hiệu',
        lessonSectionRef: '2. Lập phương của một hiệu'
      },
      {
        id: 'toan_b7_q5',
        question: 'Rút gọn $(x - y)^3 + (x + y)^3$ được kết quả nào?',
        options: [
          '$2x^3 + 6xy^2$',
          '$2x^3 + 2y^3$',
          '$2x^3 - 6xy^2$',
          '$2x^3 + 6x^2y$'
        ],
        correctIndex: 0,
        explanation: 'Ta có:\n$$(x - y)^3 = x^3 - 3x^2y + 3xy^2 - y^3$$\n$$(x + y)^3 = x^3 + 3x^2y + 3xy^2 + y^3$$\nCộng hai biểu thức, ta được:\n$$2x^3 + 6xy^2$$',
        hint: 'Hãy khai triển riêng từng lập phương.',
        hints: [
          'Lần 1: Hãy khai triển riêng từng lập phương.',
          'Lần 2: Khi cộng hai biểu thức, các số hạng đối nhau $-3x^2y$ và $+3x^2y$; $-y^3$ và $+y^3$ triệt tiêu.'
        ],
        knowledgeTopic: 'Rút gọn biểu thức lập phương',
        lessonSectionRef: '2. Lập phương của một hiệu'
      }
    ]
  },
  toan_ch2_b2: {
    id: 'quiz_toan_ch2_b2',
    lessonId: 'toan_ch2_b7',
    subjectId: 'toan',
    title: '5 Câu hỏi luyện tập: Bài 7 - Lập phương của một tổng. Lập phương của một hiệu',
    timeLimitSeconds: 180,
    questions: [
      {
        id: 'toan_b7_q1',
        question: 'Công thức lập phương của một tổng là gì?',
        options: [
          '$(A + B)^3 = A^3 + B^3$',
          '$(A + B)^3 = A^3 + 3A^2B + 3AB^2 + B^3$',
          '$(A + B)^3 = A^3 - 3A^2B + 3AB^2 - B^3$',
          '$(A + B)^3 = A^2 + 2AB + B^2$'
        ],
        correctIndex: 1,
        explanation: 'Lập phương của một tổng có bốn số hạng với các hệ số 1, 3, 3, 1.',
        hint: 'Công thức lập phương có bốn số hạng.',
        hints: [
          'Lần 1: Công thức lập phương có bốn số hạng.',
          'Lần 2: Các hệ số lần lượt là 1, 3, 3, 1 và các dấu đều là dấu cộng.'
        ],
        knowledgeTopic: 'Lập phương của một tổng',
        lessonSectionRef: '1. Lập phương của một tổng'
      },
      {
        id: 'toan_b7_q2',
        question: 'Khai triển $(x + 2)^3$ được kết quả nào?',
        options: [
          '$x^3 + 6x^2 + 12x + 8$',
          '$x^3 + 2x^2 + 4x + 8$',
          '$x^3 + 6x^2 + 8$',
          '$x^3 - 6x^2 + 12x - 8$'
        ],
        correctIndex: 0,
        explanation: 'Áp dụng công thức lập phương của một tổng với A = x, B = 2.',
        hint: 'Thay A = x, B = 2 vào công thức.',
        hints: [
          'Lần 1: Thay A = x, B = 2 vào công thức.',
          'Lần 2: Các số hạng lần lượt là $x^3$, $3x^2 \\cdot 2$, $3x \\cdot 2^2$ và $2^3$.'
        ],
        knowledgeTopic: 'Khai triển lập phương của một tổng',
        lessonSectionRef: '1. Lập phương của một tổng'
      },
      {
        id: 'toan_b7_q3',
        question: 'Công thức lập phương của một hiệu là gì?',
        options: [
          '$(A - B)^3 = A^3 + 3A^2B + 3AB^2 + B^3$',
          '$(A - B)^3 = A^3 - B^3$',
          '$(A - B)^3 = A^3 - 3A^2B + 3AB^2 - B^3$',
          '$(A - B)^3 = A^2 - 2AB + B^2$'
        ],
        correctIndex: 2,
        explanation: 'Công thức lập phương của một hiệu có dấu lần lượt là cộng, trừ, cộng, trừ.',
        hint: 'Công thức có bốn số hạng.',
        hints: [
          'Lần 1: Công thức có bốn số hạng.',
          'Lần 2: Dấu của các số hạng lần lượt là +, −, +, −.'
        ],
        knowledgeTopic: 'Lập phương của một hiệu',
        lessonSectionRef: '2. Lập phương của một hiệu'
      },
      {
        id: 'toan_b7_q4',
        question: 'Biểu thức $27 - 27x + 9x^2 - x^3$ viết dưới dạng nào?',
        options: [
          '$(3 + x)^3$',
          '$(x - 3)^3$',
          '$(3 - x)^2$',
          '$(3 - x)^3$'
        ],
        correctIndex: 3,
        explanation: 'Biểu thức có dạng $A^3 - 3A^2B + 3AB^2 - B^3$ với A = 3, B = x.',
        hint: 'Nhận ra 27 = 3³ và số hạng cuối là −x³.',
        hints: [
          'Lần 1: Nhận ra 27 = 3³ và số hạng cuối là −x³.',
          'Lần 2: So sánh dấu và hệ số với công thức lập phương của một hiệu.'
        ],
        knowledgeTopic: 'Viết dưới dạng lập phương của một hiệu',
        lessonSectionRef: '2. Lập phương của một hiệu'
      },
      {
        id: 'toan_b7_q5',
        question: 'Rút gọn $(x - y)^3 + (x + y)^3$ được kết quả nào?',
        options: [
          '$2x^3 + 6xy^2$',
          '$2x^3 + 2y^3$',
          '$2x^3 - 6xy^2$',
          '$2x^3 + 6x^2y$'
        ],
        correctIndex: 0,
        explanation: 'Ta có:\n$$(x - y)^3 = x^3 - 3x^2y + 3xy^2 - y^3$$\n$$(x + y)^3 = x^3 + 3x^2y + 3xy^2 + y^3$$\nCộng hai biểu thức, ta được:\n$$2x^3 + 6xy^2$$',
        hint: 'Hãy khai triển riêng từng lập phương.',
        hints: [
          'Lần 1: Hãy khai triển riêng từng lập phương.',
          'Lần 2: Khi cộng hai biểu thức, các số hạng đối nhau $-3x^2y$ và $+3x^2y$; $-y^3$ và $+y^3$ triệt tiêu.'
        ],
        knowledgeTopic: 'Rút gọn biểu thức lập phương',
        lessonSectionRef: '2. Lập phương của một hiệu'
      }
    ]
  },
  toan_ch2_b8: {
    id: 'quiz_toan_ch2_b8',
    lessonId: 'toan_ch2_b8',
    subjectId: 'toan',
    title: '5 Câu hỏi luyện tập: Bài 8 - Tổng và hiệu hai lập phương',
    timeLimitSeconds: 180,
    questions: [
      {
        id: 'toan_b8_q1',
        question: 'Công thức tổng hai lập phương là gì?',
        options: [
          '$A^3 + B^3 = (A + B)(A^2 + AB + B^2)$',
          '$A^3 + B^3 = (A - B)(A^2 - AB + B^2)$',
          '$A^3 + B^3 = (A + B)(A^2 - AB + B^2)$',
          '$A^3 + B^3 = (A - B)(A^2 + AB + B^2)$'
        ],
        correctIndex: 2,
        explanation: 'Tổng hai lập phương bằng tổng hai biểu thức nhân với biểu thức $A^2 - AB + B^2$: $A^3 + B^3 = (A + B)(A^2 - AB + B^2)$.',
        hint: 'Nhớ rằng tổng hai lập phương có thừa số thứ nhất là A + B.',
        hints: [
          'Lần 1: Nhớ rằng tổng hai lập phương có thừa số thứ nhất là A + B.',
          'Lần 2: Trong ngoặc thứ hai, số hạng giữa mang dấu trừ.'
        ],
        knowledgeTopic: 'Tổng hai lập phương',
        lessonSectionRef: '1. Tổng hai lập phương'
      },
      {
        id: 'toan_b8_q2',
        question: 'Phân tích $x^3 + 8$ thành nhân tử được kết quả nào?',
        options: [
          '$(x + 2)(x^2 - 2x + 4)$',
          '$(x - 2)(x^2 + 2x + 4)$',
          '$(x + 2)(x^2 + 2x + 4)$',
          '$(x - 2)(x^2 - 2x + 4)$'
        ],
        correctIndex: 0,
        explanation: '$x^3 + 8 = x^3 + 2^3 = (x + 2)(x^2 - 2x + 4)$.',
        hint: 'Nhận ra 8 = 2³.',
        hints: [
          'Lần 1: Nhận ra 8 = 2³.',
          'Lần 2: Áp dụng công thức tổng hai lập phương với A = x, B = 2.'
        ],
        knowledgeTopic: 'Phân tích tổng hai lập phương',
        lessonSectionRef: '1. Tổng hai lập phương'
      },
      {
        id: 'toan_b8_q3',
        question: 'Công thức hiệu hai lập phương là gì?',
        options: [
          '$A^3 - B^3 = (A + B)(A^2 - AB + B^2)$',
          '$A^3 - B^3 = (A - B)(A^2 + AB + B^2)$',
          '$A^3 - B^3 = (A + B)(A^2 + AB + B^2)$',
          '$A^3 - B^3 = (A - B)(A^2 - AB + B^2)$'
        ],
        correctIndex: 1,
        explanation: 'Hiệu hai lập phương bằng hiệu hai biểu thức nhân với $A^2 + AB + B^2$: $A^3 - B^3 = (A - B)(A^2 + AB + B^2)$.',
        hint: 'Thừa số thứ nhất là hiệu A − B.',
        hints: [
          'Lần 1: Thừa số thứ nhất là hiệu A − B.',
          'Lần 2: Trong ngoặc thứ hai, số hạng giữa mang dấu cộng.'
        ],
        knowledgeTopic: 'Hiệu hai lập phương',
        lessonSectionRef: '2. Hiệu hai lập phương'
      },
      {
        id: 'toan_b8_q4',
        question: 'Phân tích $x^3 - 27$ thành nhân tử được kết quả nào?',
        options: [
          '$(x + 3)(x^2 - 3x + 9)$',
          '$(x - 3)(x^2 - 3x + 9)$',
          '$(x + 3)(x^2 + 3x + 9)$',
          '$(x - 3)(x^2 + 3x + 9)$'
        ],
        correctIndex: 3,
        explanation: '$x^3 - 27 = x^3 - 3^3 = (x - 3)(x^2 + 3x + 9)$.',
        hint: 'Nhận ra 27 = 3³.',
        hints: [
          'Lần 1: Nhận ra 27 = 3³.',
          'Lần 2: Dùng công thức hiệu hai lập phương.'
        ],
        knowledgeTopic: 'Phân tích hiệu hai lập phương',
        lessonSectionRef: '2. Hiệu hai lập phương'
      },
      {
        id: 'toan_b8_q5',
        question: 'Rút gọn biểu thức $(x + 2)(x^2 - 2x + 4) - x^3$ được kết quả nào?',
        options: [
          '$2$',
          '$4$',
          '$8$',
          '$x^3$'
        ],
        correctIndex: 2,
        explanation: 'Ta có:\n$$\\begin{aligned} (x + 2)(x^2 - 2x + 4) - x^3 &= x^3 + 2^3 - x^3 \\\\ &= 8 \\end{aligned}$$',
        hint: 'Nhận ra tích trong biểu thức có dạng tổng hai lập phương.',
        hints: [
          'Lần 1: Nhận ra tích trong biểu thức có dạng tổng hai lập phương.',
          'Lần 2: Áp dụng công thức tổng hai lập phương rồi rút gọn.'
        ],
        knowledgeTopic: 'Rút gọn biểu thức',
        lessonSectionRef: '1. Tổng hai lập phương'
      }
    ]
  },
  toan_ch2_b3: {
    id: 'quiz_toan_ch2_b3',
    lessonId: 'toan_ch2_b8',
    subjectId: 'toan',
    title: '5 Câu hỏi luyện tập: Bài 8 - Tổng và hiệu hai lập phương',
    timeLimitSeconds: 180,
    questions: [
      {
        id: 'toan_b8_q1',
        question: 'Công thức tổng hai lập phương là gì?',
        options: [
          '$A^3 + B^3 = (A + B)(A^2 + AB + B^2)$',
          '$A^3 + B^3 = (A - B)(A^2 - AB + B^2)$',
          '$A^3 + B^3 = (A + B)(A^2 - AB + B^2)$',
          '$A^3 + B^3 = (A - B)(A^2 + AB + B^2)$'
        ],
        correctIndex: 2,
        explanation: 'Tổng hai lập phương bằng tổng hai biểu thức nhân với biểu thức $A^2 - AB + B^2$: $A^3 + B^3 = (A + B)(A^2 - AB + B^2)$.',
        hint: 'Nhớ rằng tổng hai lập phương có thừa số thứ nhất là A + B.',
        hints: [
          'Lần 1: Nhớ rằng tổng hai lập phương có thừa số thứ nhất là A + B.',
          'Lần 2: Trong ngoặc thứ hai, số hạng giữa mang dấu trừ.'
        ],
        knowledgeTopic: 'Tổng hai lập phương',
        lessonSectionRef: '1. Tổng hai lập phương'
      },
      {
        id: 'toan_b8_q2',
        question: 'Phân tích $x^3 + 8$ thành nhân tử được kết quả nào?',
        options: [
          '$(x + 2)(x^2 - 2x + 4)$',
          '$(x - 2)(x^2 + 2x + 4)$',
          '$(x + 2)(x^2 + 2x + 4)$',
          '$(x - 2)(x^2 - 2x + 4)$'
        ],
        correctIndex: 0,
        explanation: '$x^3 + 8 = x^3 + 2^3 = (x + 2)(x^2 - 2x + 4)$.',
        hint: 'Nhận ra 8 = 2³.',
        hints: [
          'Lần 1: Nhận ra 8 = 2³.',
          'Lần 2: Áp dụng công thức tổng hai lập phương với A = x, B = 2.'
        ],
        knowledgeTopic: 'Phân tích tổng hai lập phương',
        lessonSectionRef: '1. Tổng hai lập phương'
      },
      {
        id: 'toan_b8_q3',
        question: 'Công thức hiệu hai lập phương là gì?',
        options: [
          '$A^3 - B^3 = (A + B)(A^2 - AB + B^2)$',
          '$A^3 - B^3 = (A - B)(A^2 + AB + B^2)$',
          '$A^3 - B^3 = (A + B)(A^2 + AB + B^2)$',
          '$A^3 - B^3 = (A - B)(A^2 - AB + B^2)$'
        ],
        correctIndex: 1,
        explanation: 'Hiệu hai lập phương bằng hiệu hai biểu thức nhân với $A^2 + AB + B^2$: $A^3 - B^3 = (A - B)(A^2 + AB + B^2)$.',
        hint: 'Thừa số thứ nhất là hiệu A − B.',
        hints: [
          'Lần 1: Thừa số thứ nhất là hiệu A − B.',
          'Lần 2: Trong ngoặc thứ hai, số hạng giữa mang dấu cộng.'
        ],
        knowledgeTopic: 'Hiệu hai lập phương',
        lessonSectionRef: '2. Hiệu hai lập phương'
      },
      {
        id: 'toan_b8_q4',
        question: 'Phân tích $x^3 - 27$ thành nhân tử được kết quả nào?',
        options: [
          '$(x + 3)(x^2 - 3x + 9)$',
          '$(x - 3)(x^2 - 3x + 9)$',
          '$(x + 3)(x^2 + 3x + 9)$',
          '$(x - 3)(x^2 + 3x + 9)$'
        ],
        correctIndex: 3,
        explanation: '$x^3 - 27 = x^3 - 3^3 = (x - 3)(x^2 + 3x + 9)$.',
        hint: 'Nhận ra 27 = 3³.',
        hints: [
          'Lần 1: Nhận ra 27 = 3³.',
          'Lần 2: Dùng công thức hiệu hai lập phương.'
        ],
        knowledgeTopic: 'Phân tích hiệu hai lập phương',
        lessonSectionRef: '2. Hiệu hai lập phương'
      },
      {
        id: 'toan_b8_q5',
        question: 'Rút gọn biểu thức $(x + 2)(x^2 - 2x + 4) - x^3$ được kết quả nào?',
        options: [
          '$2$',
          '$4$',
          '$8$',
          '$x^3$'
        ],
        correctIndex: 2,
        explanation: 'Ta có:\n$$\\begin{aligned} (x + 2)(x^2 - 2x + 4) - x^3 &= x^3 + 2^3 - x^3 \\\\ &= 8 \\end{aligned}$$',
        hint: 'Nhận ra tích trong biểu thức có dạng tổng hai lập phương.',
        hints: [
          'Lần 1: Nhận ra tích trong biểu thức có dạng tổng hai lập phương.',
          'Lần 2: Áp dụng công thức tổng hai lập phương rồi rút gọn.'
        ],
        knowledgeTopic: 'Rút gọn biểu thức',
        lessonSectionRef: '1. Tổng hai lập phương'
      }
    ]
  },
  toan_ch2_b9: {
    id: 'quiz_toan_ch2_b9',
    lessonId: 'toan_ch2_b9',
    subjectId: 'toan',
    title: '5 Câu hỏi luyện tập (Biên soạn thêm): Bài 9 - Phân tích đa thức thành nhân tử',
    timeLimitSeconds: 180,
    questions: [
      {
        id: 'toan_b9_q1',
        question: 'Phân tích $x^3 + x$ thành nhân tử được kết quả nào?',
        options: [
          '$x(x^2 + 1)$',
          '$x^2(x + 1)$',
          '$x(x + 1)$',
          '$x^3(1 + x)$'
        ],
        correctIndex: 0,
        explanation: 'Đặt nhân tử chung x, ta được $x^3 + x = x(x^2 + 1)$.',
        hint: 'Tìm nhân tử xuất hiện trong cả hai hạng tử.',
        hints: [
          'Lần 1: Tìm nhân tử xuất hiện trong cả hai hạng tử.',
          'Lần 2: Cả $x^3$ và $x$ đều có nhân tử chung là x.'
        ],
        knowledgeTopic: 'Đặt nhân tử chung',
        lessonSectionRef: '1. Phân tích đa thức thành nhân tử bằng cách đặt nhân tử chung'
      },
      {
        id: 'toan_b9_q2',
        question: 'Phân tích $x^2 - 6x + 9$ thành nhân tử được kết quả nào?',
        options: [
          '$(x + 3)^2$',
          '$(x - 3)^2$',
          '$(x - 9)(x + 1)$',
          '$(x - 3)(x + 3)$'
        ],
        correctIndex: 1,
        explanation: '$x^2 - 6x + 9 = x^2 - 2 \\cdot x \\cdot 3 + 3^2 = (x - 3)^2$.',
        hint: 'Nhận ra $9 = 3^2$.',
        hints: [
          'Lần 1: Nhận ra $9 = 3^2$.',
          'Lần 2: So sánh với hằng đẳng thức bình phương của một hiệu.'
        ],
        knowledgeTopic: 'Sử dụng hằng đẳng thức',
        lessonSectionRef: '2. Phân tích đa thức thành nhân tử bằng cách sử dụng hằng đẳng thức'
      },
      {
        id: 'toan_b9_q3',
        question: 'Phân tích $8x^3 - 27$ thành nhân tử được kết quả nào?',
        options: [
          '$(2x + 3)(4x^2 - 6x + 9)$',
          '$(2x - 3)(4x^2 - 6x + 9)$',
          '$(2x - 3)(4x^2 + 6x + 9)$',
          '$(2x + 3)(4x^2 + 6x + 9)$'
        ],
        correctIndex: 2,
        explanation: '$8x^3 - 27 = (2x)^3 - 3^3 = (2x - 3)(4x^2 + 6x + 9)$.',
        hint: 'Nhận ra đây là hiệu hai lập phương.',
        hints: [
          'Lần 1: Nhận ra đây là hiệu hai lập phương.',
          'Lần 2: Đặt A = 2x, B = 3 vào công thức hiệu hai lập phương.'
        ],
        knowledgeTopic: 'Hiệu hai lập phương',
        lessonSectionRef: '2. Phân tích đa thức thành nhân tử bằng cách sử dụng hằng đẳng thức'
      },
      {
        id: 'toan_b9_q4',
        question: 'Phân tích $x^2 + 2x + xy + 2y$ bằng cách nhóm các hạng tử, ta được kết quả nào?',
        options: [
          '$(x + y)(x + 2)$',
          '$(x - y)(x + 2)$',
          '$(x + 2y)(x + 1)$',
          '$(x + 2)(x - y)$'
        ],
        correctIndex: 0,
        explanation: 'Ta có:\n$x^2 + 2x + xy + 2y$\n$= (x^2 + xy) + (2x + 2y)$\n$= x(x + y) + 2(x + y)$\n$= (x + 2)(x + y).',
        hint: 'Tìm cách nhóm hai cặp hạng tử để xuất hiện nhân tử chung.',
        hints: [
          'Lần 1: Tìm cách nhóm hai cặp hạng tử để xuất hiện nhân tử chung.',
          'Lần 2: Nhóm $x^2 + xy$ và $2x + 2y$.'
        ],
        knowledgeTopic: 'Nhóm các hạng tử',
        lessonSectionRef: '3. Phân tích đa thức thành nhân tử bằng cách nhóm các hạng tử'
      },
      {
        id: 'toan_b9_q5',
        question: 'Cách làm nào được gọi là phân tích đa thức thành nhân tử bằng cách nhóm các hạng tử?',
        options: [
          'Tìm nhân tử chung của tất cả các hạng tử rồi đặt ra ngoài.',
          'Biến đổi đa thức theo một hằng đẳng thức đáng nhớ.',
          'Nhóm các hạng tử thích hợp để xuất hiện nhân tử chung.',
          'Chỉ cộng các hạng tử đồng dạng với nhau.'
        ],
        correctIndex: 2,
        explanation: 'Nhóm các hạng tử thích hợp giúp tạo ra nhân tử chung để tiếp tục phân tích thành nhân tử.',
        hint: 'Hãy nhớ tên phương pháp có từ “nhóm”.',
        hints: [
          'Lần 1: Hãy nhớ tên phương pháp có từ “nhóm”.',
          'Lần 2: Phương pháp này cần sắp xếp các hạng tử thành từng nhóm thích hợp.'
        ],
        knowledgeTopic: 'Khái niệm phương pháp nhóm hạng tử',
        lessonSectionRef: '3. Phân tích đa thức thành nhân tử bằng cách nhóm các hạng tử'
      }
    ]
  },
  toan_ch3_b10: {
    id: 'quiz_toan_ch3_b10',
    lessonId: 'toan_ch3_b10',
    subjectId: 'toan',
    title: '5 Câu hỏi trắc nghiệm: Bài 10 - Tứ giác',
    timeLimitSeconds: 180,
    questions: [
      {
        id: 'toan_b10_q1',
        question: 'Tứ giác ABCD có những cạnh nào?',
        options: [
          'AB, BC, CD, DA.',
          'AC, BD, AB, CD.',
          'AB, AC, CD, BD.',
          'AD, BC, AC, BD.'
        ],
        correctIndex: 0,
        explanation: 'Bốn cạnh của tứ giác là bốn đoạn thẳng nối các đỉnh liên tiếp.',
        hint: 'Cạnh của tứ giác được tạo bởi hai đỉnh liên tiếp, không nối hai đỉnh đối nhau.',
        hints: [
          'Cạnh của tứ giác được tạo bởi hai đỉnh liên tiếp, không nối hai đỉnh đối nhau.',
          'Hãy liệt kê lần lượt 4 đoạn thẳng nối các đỉnh theo thứ tự vòng quanh A, B, C, D.',
          'Bốn cạnh lần lượt là đoạn thẳng từ A sang B, B sang C, C sang D và D về A (không chứa các đường chéo AC, BD).'
        ],
        knowledgeTopic: 'Các yếu tố của tứ giác',
        lessonSectionRef: '1. Tứ giác và các yếu tố của tứ giác'
      },
      {
        id: 'toan_b10_q2',
        question: 'Hai đường chéo của tứ giác ABCD là:',
        options: [
          'AB và CD.',
          'AC và BD.',
          'AD và BC.',
          'AB và BC.'
        ],
        correctIndex: 1,
        explanation: 'Đường chéo nối hai đỉnh đối nhau.',
        hint: 'Đường chéo của tứ giác là đoạn thẳng nối hai đỉnh đối nhau, không cùng thuộc một cạnh.',
        hints: [
          'Đường chéo của tứ giác là đoạn thẳng nối hai đỉnh đối nhau, không cùng thuộc một cạnh.',
          'Trong tứ giác ABCD, đỉnh A đối diện với đỉnh C, còn đỉnh B đối diện với đỉnh D.',
          'Đoạn thẳng nối đỉnh A với đỉnh đối diện C là AC; nối đỉnh B với đỉnh đối diện D là BD.'
        ],
        knowledgeTopic: 'Đường chéo của tứ giác',
        lessonSectionRef: '1. Tứ giác và các yếu tố của tứ giác'
      },
      {
        id: 'toan_b10_q3',
        question: 'Tứ giác lồi là tứ giác mà:',
        options: [
          'Có bốn cạnh bằng nhau.',
          'Có hai đường chéo bằng nhau.',
          'Hai đỉnh bất kì thuộc một cạnh luôn nằm về một phía của đường thẳng đi qua hai đỉnh còn lại.',
          'Có bốn góc vuông.'
        ],
        correctIndex: 2,
        explanation: 'Đây là định nghĩa tứ giác lồi.',
        hint: 'Nhớ lại định nghĩa tứ giác lồi dựa vào vị trí của các đỉnh đối với đường thẳng chứa một cạnh bất kì.',
        hints: [
          'Nhớ lại định nghĩa tứ giác lồi dựa vào vị trí của các đỉnh đối với đường thẳng chứa một cạnh bất kì.',
          'Tứ giác lồi không bị lõm vào trong; bất kì cạnh nào cũng chia mặt phẳng sao cho toàn bộ tứ giác nằm trọn về một nửa mặt phẳng.',
          'Định nghĩa chuẩn SGK: Tứ giác lồi là tứ giác mà hai đỉnh bất kì thuộc một cạnh luôn nằm về một phía của đường thẳng đi qua hai đỉnh còn lại.'
        ],
        knowledgeTopic: 'Định nghĩa tứ giác lồi',
        lessonSectionRef: '2. Tứ giác lồi'
      },
      {
        id: 'toan_b10_q4',
        question: 'Tổng các góc của một tứ giác bằng:',
        options: [
          '180°.',
          '270°.',
          '360°.',
          '90°.'
        ],
        correctIndex: 2,
        explanation: 'Tổng bốn góc của một tứ giác luôn bằng 360°.',
        hint: 'Một tứ giác có thể chia thành hai tam giác bằng một đường chéo. Tổng các góc của mỗi tam giác là bao nhiêu?',
        hints: [
          'Một tứ giác có thể chia thành hai tam giác bằng một đường chéo. Tổng các góc của mỗi tam giác là bao nhiêu?',
          'Mỗi tam giác có tổng ba góc bằng 180°. Tứ giác gồm hai tam giác nên tổng các góc bằng 180° × 2.',
          'Định lí SGK: Tổng các góc của một tứ giác bằng 360° ($\\widehat{A} + \\widehat{B} + \\widehat{C} + \\widehat{D} = 360^\\circ$).'
        ],
        knowledgeTopic: 'Tổng các góc của tứ giác',
        lessonSectionRef: '3. Tổng các góc của một tứ giác'
      },
      {
        id: 'toan_b10_q5',
        question: 'Một tứ giác có ba góc lần lượt là 80°, 100°, 90°. Góc còn lại bằng:',
        options: [
          '80°.',
          '90°.',
          '100°.',
          '110°.'
        ],
        correctIndex: 1,
        explanation: '360° − (80° + 100° + 90°) = 90°.',
        hint: 'Áp dụng định lí tổng bốn góc của một tứ giác luôn bằng 360°.',
        hints: [
          'Áp dụng định lí tổng bốn góc của một tứ giác luôn bằng 360°.',
          'Để tìm góc còn lại, lấy 360° trừ đi tổng số đo của ba góc đã biết.',
          'Thực hiện phép tính: 360° − (80° + 100° + 90°) = 360° − 270° = 90°.'
        ],
        knowledgeTopic: 'Tính góc trong tứ giác',
        lessonSectionRef: '3. Tổng các góc của một tứ giác'
      }
    ]
  },
  toan_ch3_b11: {
    id: 'quiz_toan_ch3_b11',
    lessonId: 'toan_ch3_b11',
    subjectId: 'toan',
    title: '5 Câu hỏi trắc nghiệm: Bài 11 - Hình thang cân',
    timeLimitSeconds: 180,
    questions: [
      {
        id: 'toan_b11_q1',
        question: 'Hình thang là tứ giác có:',
        options: [
          'Hai cạnh đối song song.',
          'Bốn cạnh bằng nhau.',
          'Hai đường chéo vuông góc.',
          'Bốn góc bằng nhau.'
        ],
        correctIndex: 0,
        explanation: 'Đây là định nghĩa hình thang.',
        hint: 'Hình thang là một dạng tứ giác đặc biệt có liên quan đến quan hệ song song giữa các cạnh.',
        hints: [
          'Hình thang là một dạng tứ giác đặc biệt có liên quan đến quan hệ song song giữa các cạnh.',
          'Để một tứ giác là hình thang, chỉ cần ít nhất một cặp cạnh đối diện có quan hệ gì với nhau?',
          'Theo định nghĩa: Hình thang là tứ giác có hai cạnh đối song song (hai cạnh này được gọi là hai đáy).'
        ],
        knowledgeTopic: 'Định nghĩa hình thang',
        lessonSectionRef: '1. Hình thang'
      },
      {
        id: 'toan_b11_q2',
        question: 'Trong hình thang ABCD, với AB song song CD, hai cạnh đáy là:',
        options: [
          'AD và BC.',
          'AB và CD.',
          'AC và BD.',
          'AB và AD.'
        ],
        correctIndex: 1,
        explanation: 'Hai cạnh song song của hình thang được gọi là hai cạnh đáy.',
        hint: 'Trong hình thang, các cạnh song song được gọi là gì, và các cạnh còn lại được gọi là gì?',
        hints: [
          'Trong hình thang, các cạnh song song được gọi là gì, và các cạnh còn lại được gọi là gì?',
          'Hai cạnh song song với nhau được gọi là hai cạnh đáy; hai cạnh không song song là hai cạnh bên.',
          'Đề bài cho biết AB song song CD, do đó hai cạnh đáy chính là AB và CD.'
        ],
        knowledgeTopic: 'Các yếu tố của hình thang',
        lessonSectionRef: '1. Hình thang'
      },
      {
        id: 'toan_b11_q3',
        question: 'Hình thang cân là hình thang có:',
        options: [
          'Hai cạnh đáy bằng nhau.',
          'Hai cạnh bên song song.',
          'Hai góc kề một đáy bằng nhau.',
          'Hai đường chéo vuông góc.'
        ],
        correctIndex: 2,
        explanation: 'Đây là định nghĩa hình thang cân.',
        hint: 'Hình thang cân là hình thang có thêm yếu tố bằng nhau về góc.',
        hints: [
          'Hình thang cân là hình thang có thêm yếu tố bằng nhau về góc.',
          'Xét các góc ở cùng một đáy: hai góc kề đáy dưới hoặc hai góc kề đáy trên có mối quan hệ như thế nào?',
          'Định nghĩa SGK: Hình thang cân là hình thang có hai góc kề một đáy bằng nhau ($\\widehat{A} = \\widehat{B}$ hoặc $\\widehat{C} = \\widehat{D}$).'
        ],
        knowledgeTopic: 'Định nghĩa hình thang cân',
        lessonSectionRef: '2. Hình thang cân'
      },
      {
        id: 'toan_b11_q4',
        question: 'Trong hình thang cân ABCD, hai cạnh bên AD và BC có quan hệ:',
        options: [
          'AD song song BC.',
          'AD = BC.',
          'AD > BC.',
          'AD < BC.'
        ],
        correctIndex: 1,
        explanation: 'Hai cạnh bên của hình thang cân bằng nhau.',
        hint: 'Nhớ lại tính chất về cạnh bên của hình thang cân.',
        hints: [
          'Nhớ lại tính chất về cạnh bên của hình thang cân.',
          'Nếu hai cạnh bên song song thì hình thang đã thành hình bình hành. Trong hình thang cân, độ dài hai cạnh bên như thế nào?',
          'Tính chất định lí: Trong hình thang cân, hai cạnh bên bằng nhau, tức là AD = BC.'
        ],
        knowledgeTopic: 'Tính chất hình thang cân',
        lessonSectionRef: '3. Tính chất của hình thang cân'
      },
      {
        id: 'toan_b11_q5',
        question: 'Một hình thang có hai đường chéo bằng nhau. Có thể kết luận:',
        options: [
          'Hình thang đó là hình thang cân.',
          'Hình thang đó là hình vuông.',
          'Hình thang đó có bốn cạnh bằng nhau.',
          'Hình thang đó có hai cạnh bên song song.'
        ],
        correctIndex: 0,
        explanation: 'Đây là dấu hiệu nhận biết hình thang cân.',
        hint: 'Nhớ lại dấu hiệu nhận biết hình thang cân liên quan đến hai đường chéo.',
        hints: [
          'Nhớ lại dấu hiệu nhận biết hình thang cân liên quan đến hai đường chéo.',
          'Nếu một hình thang có hai đường chéo có độ dài bằng nhau thì nó thuộc loại hình thang đặc biệt nào?',
          'Dấu hiệu nhận biết SGK: Nếu một hình thang có hai đường chéo bằng nhau thì hình thang đó là hình thang cân.'
        ],
        knowledgeTopic: 'Dấu hiệu nhận biết hình thang cân',
        lessonSectionRef: '4. Dấu hiệu nhận biết hình thang cân'
      }
    ]
  },
  toan_ch3_b12: {
    id: 'quiz_toan_ch3_b12',
    lessonId: 'toan_ch3_b12',
    subjectId: 'toan',
    title: '5 Câu hỏi trắc nghiệm: Bài 12 - Hình bình hành',
    timeLimitSeconds: 180,
    questions: [
      {
        id: 'toan_b12_q1',
        question: 'Hình bình hành là tứ giác có:',
        options: [
          'Các cạnh đối song song.',
          'Bốn góc bằng nhau.',
          'Hai đường chéo vuông góc.',
          'Bốn cạnh bằng nhau.'
        ],
        correctIndex: 0,
        explanation: 'Theo định nghĩa trong SGK Toán 8: Hình bình hành là tứ giác có các cạnh đối song song.',
        hint: 'Nhớ lại định nghĩa chuẩn của hình bình hành dựa vào quan hệ song song của các cạnh đối.',
        hints: [
          'Nhớ lại định nghĩa chuẩn của hình bình hành dựa vào quan hệ song song của các cạnh đối.',
          'Hình bình hành là một dạng tứ giác đặc biệt có các cặp cạnh đối diện như thế nào với nhau?',
          'Định nghĩa SGK: Hình bình hành là tứ giác có các cạnh đối song song.'
        ],
        knowledgeTopic: 'Định nghĩa hình bình hành',
        lessonSectionRef: '1. Định nghĩa'
      },
      {
        id: 'toan_b12_q2',
        question: 'Trong một hình bình hành ABCD, khẳng định nào sau đây về các góc là đúng?',
        options: [
          '$\\widehat{A} = \\widehat{C}$ và $\\widehat{B} = \\widehat{D}$.',
          '$\\widehat{A} = \\widehat{B}$ và $\\widehat{C} = \\widehat{D}$.',
          '$\\widehat{A} + \\widehat{C} = 180^\\circ$.',
          'Bốn góc bằng nhau.'
        ],
        correctIndex: 0,
        explanation: 'Trong hình bình hành, các góc đối bằng nhau: $\\widehat{A} = \\widehat{C}$ và $\\widehat{B} = \\widehat{D}$.',
        hint: 'Trong hình bình hành, hai góc đối diện nhau thì bằng nhau.',
        hints: [
          'Trong hình bình hành, hai góc đối diện nhau thì bằng nhau.',
          'Đỉnh A đối diện với đỉnh C, đỉnh B đối diện với đỉnh D.',
          'Tính chất SGK: Trong hình bình hành, các góc đối bằng nhau ($\\widehat{A} = \\widehat{C}$ và $\\widehat{B} = \\widehat{D}$).'
        ],
        knowledgeTopic: 'Tính chất góc của hình bình hành',
        lessonSectionRef: '2. Tính chất'
      },
      {
        id: 'toan_b12_q3',
        question: 'Cho hình bình hành ABCD có hai đường chéo AC và BD cắt nhau tại O. Khẳng định nào sau đây là sai?',
        options: [
          'AB = CD và AD = BC.',
          'OA = OC và OB = OD.',
          'AC = BD.',
          'AB ∥ CD và AD ∥ BC.'
        ],
        correctIndex: 2,
        explanation: 'Trong hình bình hành, hai đường chéo cắt nhau tại trung điểm của mỗi đường ($OA = OC, OB = OD$), các cạnh đối bằng nhau và song song. Hai đường chéo AC và BD không nhất thiết bằng nhau (chúng chỉ bằng nhau khi hình bình hành là hình chữ nhật).',
        hint: 'Hai đường chéo của hình bình hành có nhất thiết phải có độ dài bằng nhau không?',
        hints: [
          'Hai đường chéo của hình bình hành có nhất thiết phải có độ dài bằng nhau không?',
          'Đường chéo hình bình hành cắt nhau tại trung điểm mỗi đường nhưng thường có một đường chéo dài hơn đường kia.',
          'Khẳng định sai là AC = BD vì hai đường chéo bằng nhau là tính chất riêng của hình chữ nhật.'
        ],
        knowledgeTopic: 'Tính chất đường chéo của hình bình hành',
        lessonSectionRef: '2. Tính chất'
      },
      {
        id: 'toan_b12_q4',
        question: 'Tứ giác ABCD là hình bình hành nếu thỏa mãn điều kiện nào sau đây?',
        options: [
          'Một cặp cạnh đối vừa song song vừa bằng nhau.',
          'Hai đường chéo vuông góc với nhau.',
          'Hai cạnh đối bằng nhau và hai cạnh đối còn lại song song.',
          'Có hai góc vuông.'
        ],
        correctIndex: 0,
        explanation: 'Dấu hiệu nhận biết: Tứ giác có một cặp cạnh đối vừa song song vừa bằng nhau là hình bình hành.',
        hint: 'Xem xét dấu hiệu nhận biết kết hợp cả hai yếu tố song song và bằng nhau trên cùng một cặp cạnh đối.',
        hints: [
          'Xem xét dấu hiệu nhận biết kết hợp cả hai yếu tố song song và bằng nhau trên cùng một cặp cạnh đối.',
          'Nếu chỉ có một cặp cạnh đối vừa song song lại vừa bằng nhau thì tứ giác đó đã đủ điều kiện là hình bình hành.',
          'Dấu hiệu SGK: Tứ giác có một cặp cạnh đối vừa song song vừa bằng nhau là hình bình hành.'
        ],
        knowledgeTopic: 'Dấu hiệu nhận biết hình bình hành',
        lessonSectionRef: '3. Dấu hiệu nhận biết'
      },
      {
        id: 'toan_b12_q5',
        question: 'Tứ giác nào sau đây không phải là hình bình hành?',
        options: [
          'Tứ giác có các cạnh đối bằng nhau.',
          'Tứ giác có các góc đối bằng nhau.',
          'Tứ giác có hai đường chéo cắt nhau tại trung điểm của mỗi đường.',
          'Tứ giác có hai đường chéo bằng nhau.'
        ],
        correctIndex: 3,
        explanation: 'Tứ giác có hai đường chéo bằng nhau chưa chắc là hình bình hành (chẳng hạn hình thang cân có hai đường chéo bằng nhau nhưng không phải là hình bình hành).',
        hint: 'Nhớ lại hình thang cân: hai đường chéo của hình thang cân bằng nhau nhưng hình thang cân không phải hình bình hành.',
        hints: [
          'Nhớ lại hình thang cân: hai đường chéo của hình thang cân bằng nhau nhưng hình thang cân không phải hình bình hành.',
          'Để là hình bình hành, hai đường chéo phải cắt nhau tại trung điểm mỗi đường chứ không chỉ đơn thuần là bằng nhau.',
          'Tứ giác có hai đường chéo bằng nhau chưa đủ điều kiện để là hình bình hành.'
        ],
        knowledgeTopic: 'Dấu hiệu nhận biết hình bình hành',
        lessonSectionRef: '3. Dấu hiệu nhận biết'
      }
    ]
  },
  toan_ch3_b13: {
    id: 'quiz_toan_ch3_b13',
    lessonId: 'toan_ch3_b13',
    subjectId: 'toan',
    title: '5 Câu hỏi trắc nghiệm: Bài 13 - Hình chữ nhật',
    timeLimitSeconds: 180,
    questions: [
      {
        id: 'toan_b13_q1',
        question: 'Hình chữ nhật là tứ giác có:',
        options: [
          'Bốn góc vuông.',
          'Bốn cạnh bằng nhau.',
          'Hai đường chéo vuông góc.',
          'Hai cạnh kề bằng nhau.'
        ],
        correctIndex: 0,
        explanation: 'Theo định nghĩa trong SGK Toán 8: Hình chữ nhật là tứ giác có bốn góc vuông ($\\widehat{A} = \\widehat{B} = \\widehat{C} = \\widehat{D} = 90^\\circ$).',
        hint: 'Nhớ lại định nghĩa gốc của hình chữ nhật liên quan đến các góc.',
        hints: [
          'Nhớ lại định nghĩa gốc của hình chữ nhật liên quan đến các góc.',
          'Tên gọi hình chữ nhật thể hiện các góc của tứ giác là góc vuông.',
          'Định nghĩa SGK: Hình chữ nhật là tứ giác có bốn góc vuông.'
        ],
        knowledgeTopic: 'Định nghĩa hình chữ nhật',
        lessonSectionRef: '1. Định nghĩa'
      },
      {
        id: 'toan_b13_q2',
        question: 'Trong hình chữ nhật ABCD có hai đường chéo AC và BD cắt nhau tại O. Khẳng định nào sau đây là đúng?',
        options: [
          'AC = BD và OA = OB = OC = OD.',
          'AC ⟂ BD.',
          'AC là tia phân giác của góc $\\widehat{A}$.',
          'AB = BC = CD = DA.'
        ],
        correctIndex: 0,
        explanation: 'Trong hình chữ nhật, hai đường chéo bằng nhau ($AC = BD$) và cắt nhau tại trung điểm của mỗi đường, do đó bốn đoạn thẳng $OA = OB = OC = OD$.',
        hint: 'Hai đường chéo hình chữ nhật vừa bằng nhau vừa chia đôi nhau.',
        hints: [
          'Hai đường chéo hình chữ nhật vừa bằng nhau vừa chia đôi nhau.',
          'Vì AC = BD và O là trung điểm của cả hai đường chéo nên nửa của chúng cũng bằng nhau.',
          'Tính chất SGK: Trong hình chữ nhật, hai đường chéo bằng nhau và cắt nhau tại trung điểm của mỗi đường (AC = BD, OA = OB = OC = OD).'
        ],
        knowledgeTopic: 'Tính chất đường chéo hình chữ nhật',
        lessonSectionRef: '2. Tính chất'
      },
      {
        id: 'toan_b13_q3',
        question: 'Tứ giác có ít nhất bao nhiêu góc vuông thì chắc chắn là hình chữ nhật?',
        options: [
          '1 góc vuông.',
          '2 góc vuông.',
          '3 góc vuông.',
          '4 góc vuông nhưng phải có hai cạnh kề bằng nhau.'
        ],
        correctIndex: 2,
        explanation: 'Dấu hiệu nhận biết: Tứ giác có ba góc vuông là hình chữ nhật (vì tổng 4 góc của tứ giác là $360^\\circ$, nếu có 3 góc vuông thì góc thứ tư tự động bằng $360^\\circ - 3 \\times 90^\\circ = 90^\\circ$).',
        hint: 'Tổng các góc của một tứ giác là 360°. Nếu biết số đo của 3 góc vuông thì góc thứ tư bằng bao nhiêu?',
        hints: [
          'Tổng các góc của một tứ giác là 360°. Nếu biết số đo của 3 góc vuông thì góc thứ tư bằng bao nhiêu?',
          'Góc thứ tư sẽ là 360° − (90° + 90° + 90°) = 90°, do đó cả 4 góc đều vuông.',
          'Dấu hiệu SGK: Tứ giác có ba góc vuông là hình chữ nhật.'
        ],
        knowledgeTopic: 'Dấu hiệu nhận biết hình chữ nhật',
        lessonSectionRef: '3. Dấu hiệu nhận biết'
      },
      {
        id: 'toan_b13_q4',
        question: 'Hình bình hành trở thành hình chữ nhật khi có thêm điều kiện nào sau đây?',
        options: [
          'Có một góc vuông.',
          'Có hai cạnh kề bằng nhau.',
          'Hai đường chéo vuông góc.',
          'Một đường chéo là tia phân giác của một góc.'
        ],
        correctIndex: 0,
        explanation: 'Dấu hiệu nhận biết: Hình bình hành có một góc vuông là hình chữ nhật (khi có 1 góc vuông, các góc đối và góc kề bù cũng thành góc vuông).',
        hint: 'Hình bình hành đã có các góc đối bằng nhau và hai góc kề bù nhau. Nếu có 1 góc vuông thì các góc còn lại thế nào?',
        hints: [
          'Hình bình hành đã có các góc đối bằng nhau và hai góc kề bù nhau. Nếu có 1 góc vuông thì các góc còn lại thế nào?',
          'Khi một góc bằng 90° thì góc đối diện cũng bằng 90°, hai góc kề bù cũng bằng 180° − 90° = 90°.',
          'Dấu hiệu SGK: Hình bình hành có một góc vuông là hình chữ nhật.'
        ],
        knowledgeTopic: 'Dấu hiệu nhận biết hình chữ nhật từ hình bình hành',
        lessonSectionRef: '3. Dấu hiệu nhận biết'
      },
      {
        id: 'toan_b13_q5',
        question: 'Hình bình hành ABCD có hai đường chéo AC và BD. Để ABCD là hình chữ nhật thì cần thêm điều kiện nào sau đây?',
        options: [
          'AC = BD.',
          'AC ⟂ BD.',
          'AB = BC.',
          'OA ⟂ OB.'
        ],
        correctIndex: 0,
        explanation: 'Dấu hiệu nhận biết: Hình bình hành có hai đường chéo bằng nhau là hình chữ nhật ($AC = BD$).',
        hint: 'So sánh tính chất đặc trưng của đường chéo hình chữ nhật so với hình bình hành thông thường.',
        hints: [
          'So sánh tính chất đặc trưng của đường chéo hình chữ nhật so với hình bình hành thông thường.',
          'Trong hình bình hành, hai đường chéo đã cắt nhau tại trung điểm mỗi đường. Nếu chúng bằng nhau nữa thì tứ giác là hình gì?',
          'Dấu hiệu SGK: Hình bình hành có hai đường chéo bằng nhau là hình chữ nhật.'
        ],
        knowledgeTopic: 'Dấu hiệu đường chéo của hình chữ nhật',
        lessonSectionRef: '3. Dấu hiệu nhận biết'
      }
    ]
  },
  toan_ch3_b14: {
    id: 'quiz_toan_ch3_b14',
    lessonId: 'toan_ch3_b14',
    subjectId: 'toan',
    title: '5 Câu hỏi trắc nghiệm: Bài 14 - Hình thoi và hình vuông',
    timeLimitSeconds: 180,
    questions: [
      {
        id: 'toan_b14_q1',
        question: 'Phát biểu định nghĩa hình thoi.',
        options: [
          'Hình thoi là tứ giác có bốn góc vuông.',
          'Hình thoi là tứ giác có bốn cạnh bằng nhau.',
          'Hình thoi là tứ giác có hai đường chéo bằng nhau.',
          'Hình thoi là tứ giác có các cạnh đối song song nhưng không cần bằng nhau.'
        ],
        correctIndex: 1,
        explanation: 'Theo định nghĩa trong SGK Toán 8: Hình thoi là tứ giác có bốn cạnh bằng nhau.',
        hint: 'Hãy nhớ lại đặc điểm quan trọng nhất về bốn cạnh của hình thoi.',
        hints: [
          'Hãy nhớ lại đặc điểm quan trọng nhất về bốn cạnh của hình thoi.',
          'Hình thoi là một dạng tứ giác đặc biệt có độ dài của cả bốn cạnh như thế nào với nhau?',
          'Định nghĩa SGK: Hình thoi là tứ giác có bốn cạnh bằng nhau.'
        ],
        knowledgeTopic: 'Định nghĩa hình thoi',
        lessonSectionRef: '1. Hình thoi'
      },
      {
        id: 'toan_b14_q2',
        question: 'Hai đường chéo của hình thoi có tính chất nào sau đây?',
        options: [
          'Bằng nhau và song song.',
          'Vuông góc với nhau và là các đường phân giác của các góc trong hình thoi.',
          'Chỉ cắt nhau tại trung điểm mỗi đường.',
          'Vuông góc nhưng không phải đường phân giác của các góc.'
        ],
        correctIndex: 1,
        explanation: 'Trong hình thoi, hai đường chéo vuông góc với nhau và là các đường phân giác của các góc trong hình thoi.',
        hint: 'Hai đường chéo của hình thoi tạo với nhau góc bao nhiêu độ và chia các góc của hình thoi như thế nào?',
        hints: [
          'Hai đường chéo của hình thoi tạo với nhau góc bao nhiêu độ và chia các góc của hình thoi như thế nào?',
          'Xét mối quan hệ vuông góc và tính chất phân giác của hai đường chéo hình thoi.',
          'Tính chất SGK: Hai đường chéo vuông góc với nhau và là các đường phân giác của các góc trong hình thoi.'
        ],
        knowledgeTopic: 'Tính chất hai đường chéo hình thoi',
        lessonSectionRef: '1. Hình thoi'
      },
      {
        id: 'toan_b14_q3',
        question: 'Một hình bình hành có hai đường chéo vuông góc với nhau thì là hình gì?',
        options: [
          'Hình chữ nhật.',
          'Hình thang cân.',
          'Hình thoi.',
          'Tứ giác bất kỳ.'
        ],
        correctIndex: 2,
        explanation: 'Theo dấu hiệu nhận biết: Hình bình hành có hai đường chéo vuông góc với nhau là hình thoi.',
        hint: 'Hãy nhớ lại dấu hiệu nhận biết hình thoi từ hình bình hành liên quan đến hai đường chéo.',
        hints: [
          'Hãy nhớ lại dấu hiệu nhận biết hình thoi từ hình bình hành liên quan đến hai đường chéo.',
          'Nếu hai đường chéo của hình bình hành vuông góc với nhau thì nó trở thành một hình có bốn cạnh bằng nhau.',
          'Dấu hiệu nhận biết SGK: Hình bình hành có hai đường chéo vuông góc với nhau là hình thoi.'
        ],
        knowledgeTopic: 'Dấu hiệu nhận biết hình thoi',
        lessonSectionRef: '1. Hình thoi'
      },
      {
        id: 'toan_b14_q4',
        question: 'Hai đường chéo của hình vuông có tính chất nào sau đây?',
        options: [
          'Chỉ bằng nhau.',
          'Chỉ vuông góc với nhau.',
          'Bằng nhau, vuông góc, cắt nhau tại trung điểm mỗi đường và là các đường phân giác của các góc.',
          'Song song với nhau.'
        ],
        correctIndex: 2,
        explanation: 'Vì hình vuông vừa là hình chữ nhật vừa là hình thoi nên hai đường chéo của nó vừa bằng nhau, vừa vuông góc, cắt nhau tại trung điểm mỗi đường và là các đường phân giác của các góc.',
        hint: 'Hình vuông có tất cả các tính chất của cả hình chữ nhật và hình thoi.',
        hints: [
          'Hình vuông có tất cả các tính chất của cả hình chữ nhật và hình thoi.',
          'Hai đường chéo của hình vuông thừa hưởng tính chất bằng nhau từ hình chữ nhật và vuông góc, là phân giác từ hình thoi.',
          'Tính chất SGK: Hai đường chéo của hình vuông bằng nhau, vuông góc, cắt nhau tại trung điểm mỗi đường và là các đường phân giác của các góc.'
        ],
        knowledgeTopic: 'Tính chất hai đường chéo hình vuông',
        lessonSectionRef: '2. Hình vuông'
      },
      {
        id: 'toan_b14_q5',
        question: 'Một hình chữ nhật có hai cạnh kề bằng nhau thì là hình gì?',
        options: [
          'Hình thang cân.',
          'Hình bình hành.',
          'Hình thoi.',
          'Hình vuông.'
        ],
        correctIndex: 3,
        explanation: 'Dấu hiệu nhận biết: Hình chữ nhật có hai cạnh kề bằng nhau là hình vuông.',
        hint: 'Hình chữ nhật đã có bốn góc vuông, nếu có thêm hai cạnh kề bằng nhau thì bốn cạnh sẽ bằng nhau.',
        hints: [
          'Hình chữ nhật đã có bốn góc vuông, nếu có thêm hai cạnh kề bằng nhau thì bốn cạnh sẽ bằng nhau.',
          'Tứ giác vừa có bốn góc vuông vừa có bốn cạnh bằng nhau là hình gì?',
          'Dấu hiệu nhận biết SGK: Hình chữ nhật có hai cạnh kề bằng nhau là hình vuông.'
        ],
        knowledgeTopic: 'Dấu hiệu nhận biết hình vuông',
        lessonSectionRef: '2. Hình vuông'
      }
    ]
  },
  toan_ch4_b15: {
    id: 'quiz_toan_ch4_b15',
    lessonId: 'toan_ch4_b15',
    subjectId: 'toan',
    title: '5 Câu hỏi trắc nghiệm: Bài 15 - Định lí Thalès trong tam giác',
    timeLimitSeconds: 180,
    questions: [
      {
        id: 'toan_b15_q1',
        question: 'Cho AB = 4 cm và CD = 8 cm. Tỉ số của hai đoạn thẳng AB và CD là:',
        options: [
          '$\\frac{1}{2}$',
          '2',
          '4',
          '$\\frac{1}{4}$'
        ],
        correctIndex: 0,
        explanation: 'Ta có tỉ số $\\frac{AB}{CD} = \\frac{4}{8} = \\frac{1}{2}$.',
        hint: 'Nhớ lại định nghĩa: Tỉ số của hai đoạn thẳng là tỉ số độ dài của chúng khi được đo bằng cùng một đơn vị.',
        hints: [
          'Nhớ lại định nghĩa: Tỉ số của hai đoạn thẳng là tỉ số độ dài của chúng khi được đo bằng cùng một đơn vị.',
          'Lập tỉ số giữa độ dài đoạn thẳng AB và đoạn thẳng CD: $\\frac{AB}{CD} = \\frac{4}{8}$.',
          'Rút gọn phân số $\\frac{4}{8}$ chia cả tử và mẫu cho 4 ta được kết quả là $\\frac{1}{2}$.'
        ],
        knowledgeTopic: 'Tỉ số của hai đoạn thẳng',
        lessonSectionRef: '1. Tỉ số hai đoạn thẳng'
      },
      {
        id: 'toan_b15_q2',
        question: 'Hai đoạn thẳng AB và CD tỉ lệ với hai đoạn thẳng A\'B\' và C\'D\' khi:',
        options: [
          '$AB + CD = A\'B\' + C\'D\'$',
          '$\\frac{AB}{CD} = \\frac{A\'B\'}{C\'D\'}$',
          '$AB \\times CD = A\'B\' \\times C\'D\'$',
          '$AB - CD = A\'B\' - C\'D\'$'
        ],
        correctIndex: 1,
        explanation: 'Hệ thức đúng xác định hai cặp đoạn thẳng tỉ lệ là $\\frac{AB}{CD} = \\frac{A\'B\'}{C\'D\'}$.',
        hint: 'Hai đoạn thẳng tỉ lệ với nhau khi tỉ số độ dài của chúng bằng nhau.',
        hints: [
          'Hai đoạn thẳng tỉ lệ với nhau khi tỉ số độ dài của chúng bằng nhau.',
          'Đối chiếu với định nghĩa trong SGK: Hai đoạn thẳng AB và CD tỉ lệ với A\'B\' và C\'D\' nếu tỉ số của cặp thứ nhất bằng tỉ số của cặp thứ hai.',
          'Hệ thức đúng là: $\\frac{AB}{CD} = \\frac{A\'B\'}{C\'D\'}$.'
        ],
        knowledgeTopic: 'Đoạn thẳng tỉ lệ',
        lessonSectionRef: '1. Tỉ số hai đoạn thẳng'
      },
      {
        id: 'toan_b15_q3',
        question: 'Cho tam giác ABC có B\' thuộc AB, C\' thuộc AC và B\'C\' song song với BC. Biết AB\' = 3 cm, AB = 6 cm, AC = 10 cm. Độ dài AC\' bằng:',
        options: [
          '3 cm',
          '4 cm',
          '5 cm',
          '6 cm'
        ],
        correctIndex: 2,
        explanation: 'Theo định lí Thalès: $\\frac{AB\'}{AB} = \\frac{AC\'}{AC} \\Rightarrow AC\' = \\frac{3 \\times 10}{6} = 5\\text{ cm}$.',
        hint: 'Vì B\'C\' song song với BC nên áp dụng định lí Thalès trong tam giác ABC.',
        hints: [
          'Vì B\'C\' song song với BC nên áp dụng định lí Thalès trong tam giác ABC.',
          'Theo định lí Thalès, ta có tỉ số: $\\frac{AB\'}{AB} = \\frac{AC\'}{AC}$. Thay số vào: $\\frac{3}{6} = \\frac{AC\'}{10}$.',
          'Nhân chéo để tính: $AC\' = \\frac{3 \\times 10}{6} = \\frac{30}{6} = 5\\text{ cm}$.'
        ],
        knowledgeTopic: 'Định lí Thalès trong tam giác',
        lessonSectionRef: '2. Định lí Thalès'
      },
      {
        id: 'toan_b15_q4',
        question: 'Cho tam giác ABC có B\' thuộc AB, C\' thuộc AC. Biết AB = 8 cm, AC = 12 cm, AB\' = 4 cm, AC\' = 6 cm. Kết luận nào sau đây đúng?',
        options: [
          '$B\'C\' \\perp BC$',
          '$B\'C\' = BC$',
          '$B\'C\'$ cắt $BC$ tại trung điểm',
          '$B\'C\' \\parallel BC$'
        ],
        correctIndex: 3,
        explanation: 'Ta có $\\frac{AB\'}{AB} = \\frac{4}{8} = \\frac{1}{2}$ và $\\frac{AC\'}{AC} = \\frac{6}{12} = \\frac{1}{2}$. Theo định lí Thalès đảo, $B\'C\' \\parallel BC$.',
        hint: 'Hãy tính và so sánh hai tỉ số AB\'/AB và AC\'/AC.',
        hints: [
          'Hãy tính và so sánh hai tỉ số AB\'/AB và AC\'/AC.',
          'Ta có $\\frac{AB\'}{AB} = \\frac{4}{8} = \\frac{1}{2}$ và $\\frac{AC\'}{AC} = \\frac{6}{12} = \\frac{1}{2}$, nên $\\frac{AB\'}{AB} = \\frac{AC\'}{AC}$.',
          'Theo định lí Thalès đảo, khi một đường thẳng định ra trên hai cạnh những đoạn thẳng tương ứng tỉ lệ thì nó song song với cạnh còn lại: $B\'C\' \\parallel BC$.'
        ],
        knowledgeTopic: 'Định lí Thalès đảo',
        lessonSectionRef: '3. Định lí Thalès đảo'
      },
      {
        id: 'toan_b15_q5',
        question: 'Cho tam giác ABC có B\' thuộc AB, C\' thuộc AC và B\'C\' song song với BC. Biết AB\' = 4 cm, B\'B = 2 cm, AC\' = 6 cm. Độ dài C\'C bằng:',
        options: [
          '3 cm',
          '4 cm',
          '5 cm',
          '6 cm'
        ],
        correctIndex: 0,
        explanation: 'Theo định lí Thalès: $\\frac{AB\'}{B\'B} = \\frac{AC\'}{C\'C} \\Rightarrow \\frac{4}{2} = \\frac{6}{C\'C} \\Rightarrow C\'C = 3\\text{ cm}$.',
        hint: 'Áp dụng hệ thức tỉ lệ giữa các đoạn thẳng tương ứng trên hai cạnh theo định lí Thalès.',
        hints: [
          'Áp dụng hệ thức tỉ lệ giữa các đoạn thẳng tương ứng trên hai cạnh theo định lí Thalès: $\\frac{AB\'}{B\'B} = \\frac{AC\'}{C\'C}$.',
          'Thay các số đã biết vào: $\\frac{4}{2} = \\frac{6}{C\'C}$, tương đương $2 = \\frac{6}{C\'C}$.',
          'Suy ra: $C\'C = \\frac{6}{2} = 3\\text{ cm}$.'
        ],
        knowledgeTopic: 'Ứng dụng định lí Thalès tính độ dài đoạn thẳng',
        lessonSectionRef: '2. Định lí Thalès'
      }
    ]
  },
  toan_ch4_b16: {
    id: 'quiz_toan_ch4_b16',
    lessonId: 'toan_ch4_b16',
    subjectId: 'toan',
    title: '5 Câu hỏi trắc nghiệm: Bài 16 - Đường trung bình của tam giác',
    timeLimitSeconds: 180,
    questions: [
      {
        id: 'toan_b16_q1',
        question: 'Đường trung bình của tam giác là đoạn thẳng:',
        options: [
          'Nối một đỉnh với trung điểm cạnh đối diện.',
          'Nối trung điểm hai cạnh của tam giác.',
          'Nối hai đỉnh bất kỳ của tam giác.',
          'Vuông góc với một cạnh của tam giác.'
        ],
        correctIndex: 1,
        explanation: 'Đường trung bình nối trung điểm hai cạnh của tam giác.',
        hint: 'Hãy nhớ lại định nghĩa về đường trung bình của tam giác.',
        hints: [
          'Hãy nhớ lại định nghĩa: Đoạn thẳng nối hai điểm đặc biệt trên hai cạnh của tam giác.',
          'Hai điểm đặc biệt này là trung điểm của hai cạnh.',
          'Định nghĩa SGK: Đường trung bình của tam giác là đoạn thẳng nối trung điểm hai cạnh của tam giác.'
        ],
        knowledgeTopic: 'Định nghĩa đường trung bình',
        lessonSectionRef: '1. Định nghĩa'
      },
      {
        id: 'toan_b16_q2',
        question: 'Trong tam giác ABC, D và E lần lượt là trung điểm của AB và AC. Kết luận nào đúng?',
        options: [
          'DE vuông góc BC.',
          'DE = BC.',
          'DE song song BC.',
          'DE = 2BC.'
        ],
        correctIndex: 2,
        explanation: 'Đường trung bình song song với cạnh thứ ba.',
        hint: 'Vì D và E là trung điểm của AB và AC nên DE là đường trung bình của tam giác ABC.',
        hints: [
          'Vì D và E là trung điểm hai cạnh AB và AC nên DE là đường trung bình của tam giác ABC.',
          'Theo tính chất đường trung bình, DE có quan hệ song song và bằng một nửa cạnh thứ ba BC.',
          'Tính chất SGK: Đường trung bình của tam giác song song với cạnh thứ ba ($DE \\parallel BC$) và bằng nửa cạnh ấy.'
        ],
        knowledgeTopic: 'Tính chất đường trung bình',
        lessonSectionRef: '2. Tính chất'
      },
      {
        id: 'toan_b16_q3',
        question: 'Trong tam giác ABC, DE là đường trung bình và BC = 12 cm. Độ dài DE bằng:',
        options: [
          '3 cm',
          '6 cm',
          '12 cm',
          '24 cm'
        ],
        correctIndex: 1,
        explanation: 'DE = 12 : 2 = 6 cm.',
        hint: 'Độ dài đường trung bình bằng một nửa độ dài cạnh thứ ba tương ứng.',
        hints: [
          'Áp dụng tính chất độ dài đường trung bình: $DE = \\frac{1}{2}BC$.',
          'Thay số vào công thức: $DE = \\frac{1}{2} \\times 12$.',
          'Tính toán: $DE = 12 : 2 = 6\\text{ cm}$.'
        ],
        knowledgeTopic: 'Tính độ dài đường trung bình',
        lessonSectionRef: '2. Tính chất'
      },
      {
        id: 'toan_b16_q4',
        question: 'Trong tam giác ABC, DE là đường trung bình, DE = 4,5 cm. Độ dài BC bằng:',
        options: [
          '2,25 cm',
          '4,5 cm',
          '9 cm',
          '18 cm'
        ],
        correctIndex: 2,
        explanation: 'BC = 2 × 4,5 = 9 cm.',
        hint: 'Biết độ dài đường trung bình DE, cạnh thứ ba BC sẽ gấp đôi độ dài đường trung bình.',
        hints: [
          'Từ công thức $DE = \\frac{1}{2}BC$, suy ra $BC = 2 \\times DE$.',
          'Thay số vào: $BC = 2 \\times 4,5$.',
          'Tính toán: $BC = 9\\text{ cm}$.'
        ],
        knowledgeTopic: 'Tính độ dài cạnh từ đường trung bình',
        lessonSectionRef: '2. Tính chất'
      },
      {
        id: 'toan_b16_q5',
        question: 'Cho tam giác ABC, D và E lần lượt là trung điểm của AB và AC. Tứ giác DECB có tính chất nào?',
        options: [
          'Có hai cặp cạnh đối song song.',
          'Có một cặp cạnh đối song song.',
          'Có bốn cạnh bằng nhau.',
          'Có bốn góc vuông.'
        ],
        correctIndex: 1,
        explanation: 'DE song song BC nên tứ giác DECB có một cặp cạnh đối song song.',
        hint: 'Xem xét mối quan hệ giữa cạnh DE và cạnh BC trong tứ giác DECB.',
        hints: [
          'Vì DE là đường trung bình của tam giác ABC nên $DE \\parallel BC$.',
          'Tứ giác DECB có hai cạnh đối DE và BC song song với nhau.',
          'Do đó, tứ giác DECB có một cặp cạnh đối song song (chính là hình thang).'
        ],
        knowledgeTopic: 'Vận dụng tính chất đường trung bình',
        lessonSectionRef: '2. Tính chất'
      }
    ]
  },
  toan_ch4_b17: {
    id: 'quiz_toan_ch4_b17',
    lessonId: 'toan_ch4_b17',
    subjectId: 'toan',
    title: '5 Câu hỏi trắc nghiệm: Bài 17 - Tính chất đường phân giác của tam giác',
    timeLimitSeconds: 180,
    questions: [
      {
        id: 'toan_b17_q1',
        question: 'Trong tam giác ABC, AD là đường phân giác của góc A, D thuộc BC. Hệ thức nào đúng?',
        options: [
          '$\\frac{DB}{DC} = \\frac{AB}{AC}$',
          '$\\frac{DB}{DC} = \\frac{AC}{AB}$',
          '$\\frac{DB}{BC} = \\frac{AB}{AC}$',
          '$\\frac{DC}{BC} = \\frac{AB}{AC}$'
        ],
        correctIndex: 0,
        explanation: 'Đây là hệ thức của tính chất đường phân giác trong tam giác.',
        hint: 'Nhớ lại định nghĩa và tính chất đường phân giác trong tam giác.',
        hints: [
          'Đường phân giác của một góc chia cạnh đối diện thành hai đoạn thẳng tỉ lệ với hai cạnh kề hai đoạn ấy.',
          'Hai đoạn trên cạnh đối diện là DB và DC; hai cạnh kề tương ứng là AB và AC.',
          'Hệ thức đúng theo SGK: $\\frac{DB}{DC} = \\frac{AB}{AC}$.'
        ],
        knowledgeTopic: 'Tính chất đường phân giác của tam giác',
        lessonSectionRef: '1. Tính chất đường phân giác của tam giác'
      },
      {
        id: 'toan_b17_q2',
        question: 'Trong tam giác ABC, AD là đường phân giác, AB = 6 cm, AC = 9 cm, DB = 4 cm. Độ dài DC bằng:',
        options: [
          '4 cm',
          '5 cm',
          '6 cm',
          '8 cm'
        ],
        correctIndex: 2,
        explanation: '4/DC = 6/9, suy ra DC = 6 cm.',
        hint: 'Áp dụng hệ thức tính chất đường phân giác để lập tỉ lệ thức tính DC.',
        hints: [
          'Áp dụng tính chất đường phân giác: $\\frac{DB}{DC} = \\frac{AB}{AC}$.',
          'Thay các số đã biết vào: $\\frac{4}{DC} = \\frac{6}{9}$.',
          'Rút gọn và tính: $DC = \\frac{4 \\times 9}{6} = 6\\text{ cm}$.'
        ],
        knowledgeTopic: 'Tính độ dài đoạn thẳng nhờ đường phân giác',
        lessonSectionRef: '1. Tính chất đường phân giác của tam giác'
      },
      {
        id: 'toan_b17_q3',
        question: 'Trong tam giác ABC, AD là đường phân giác, AB = 8 cm, AC = 12 cm và BC = 10 cm. Độ dài DB bằng:',
        options: [
          '2 cm',
          '4 cm',
          '5 cm',
          '6 cm'
        ],
        correctIndex: 1,
        explanation: 'DB/DC = 8/12 = 2/3 và DB + DC = 10. Suy ra DB = 4 cm.',
        hint: 'Lập tỉ số giữa DB và DC rồi kết hợp với $DB + DC = BC = 10\\text{ cm}$.',
        hints: [
          'Theo tính chất đường phân giác: $\\frac{DB}{DC} = \\frac{AB}{AC} = \\frac{8}{12} = \\frac{2}{3}$.',
          'Vì D thuộc đoạn thẳng BC nên $DB + DC = 10$, suy ra $DC = 10 - DB$.',
          'Thay vào tỉ lệ thức: $\\frac{DB}{10 - DB} = \\frac{2}{3} \\Rightarrow 3DB = 2(10 - DB) \\Rightarrow 5DB = 20 \\Rightarrow DB = 4\\text{ cm}$.'
        ],
        knowledgeTopic: 'Tính độ dài hai đoạn trên cạnh đáy',
        lessonSectionRef: '1. Tính chất đường phân giác của tam giác'
      },
      {
        id: 'toan_b17_q4',
        question: 'Trong tam giác ABC, D thuộc BC, AB = 6 cm, AC = 9 cm, DB = 4 cm, DC = 6 cm. Kết luận nào đúng?',
        options: [
          'AD vuông góc BC.',
          'AD là đường trung tuyến.',
          'AD là đường phân giác của góc A.',
          'AD song song BC.'
        ],
        correctIndex: 2,
        explanation: 'DB/DC = 4/6 = 6/9 = AB/AC, nên AD là đường phân giác của góc A.',
        hint: 'Hãy tính và so sánh hai tỉ số $\\frac{DB}{DC}$ và $\\frac{AB}{AC}$.',
        hints: [
          'Tính tỉ số $\\frac{DB}{DC} = \\frac{4}{6} = \\frac{2}{3}$ và $\\frac{AB}{AC} = \\frac{6}{9} = \\frac{2}{3}$.',
          'Nhận thấy $\\frac{DB}{DC} = \\frac{AB}{AC}$ (cùng bằng $\\frac{2}{3}$).',
          'Theo dấu hiệu nhận biết: nếu $\\frac{DB}{DC} = \\frac{AB}{AC}$ thì AD là đường phân giác của góc A.'
        ],
        knowledgeTopic: 'Dấu hiệu nhận biết đường phân giác',
        lessonSectionRef: '2. Dấu hiệu nhận biết đường phân giác'
      },
      {
        id: 'toan_b17_q5',
        question: 'Trong tam giác MNP, MI là đường phân giác của góc M, MN = 24 cm, MP = 32 cm, IN = 15 cm. Độ dài IP bằng:',
        options: [
          '15 cm',
          '18 cm',
          '20 cm',
          '24 cm'
        ],
        correctIndex: 2,
        explanation: 'IP/15 = 32/24, suy ra IP = 20 cm.',
        hint: 'Áp dụng tính chất đường phân giác trong tam giác MNP với đường phân giác MI.',
        hints: [
          'Theo tính chất đường phân giác: $\\frac{IN}{IP} = \\frac{MN}{MP}$, hay $\\frac{IP}{IN} = \\frac{MP}{MN}$.',
          'Thay số vào: $\\frac{IP}{15} = \\frac{32}{24} = \\frac{4}{3}$.',
          'Tính toán: $IP = \\frac{15 \\times 32}{24} = 20\\text{ cm}$.'
        ],
        knowledgeTopic: 'Vận dụng tính chất đường phân giác',
        lessonSectionRef: '1. Tính chất đường phân giác của tam giác'
      }
    ]
  },
  toan_ch5_b18: {
    id: 'quiz_toan_ch5_b18',
    lessonId: 'toan_ch5_b18',
    subjectId: 'toan',
    title: '5 Câu hỏi trắc nghiệm: Bài 18 - Thu thập và phân loại dữ liệu',
    timeLimitSeconds: 180,
    questions: [
      {
        id: 'toan_b18_q1',
        question: 'Muốn biết chiều cao của các bạn trong lớp, cách thu thập dữ liệu trực tiếp phù hợp là gì?',
        options: [
          'Đọc số liệu trong một cuốn sách.',
          'Tra cứu trên Internet.',
          'Đo chiều cao từng bạn.',
          'Xem một bài báo.'
        ],
        correctIndex: 2,
        explanation: 'Đo chiều cao từng bạn là cách thu thập thông tin trực tiếp thông qua việc đo lường thực tế.',
        hint: 'Thu thập trực tiếp là thông qua quan sát, đo đạc, phỏng vấn thực tế thay vì tìm từ nguồn có sẵn.',
        hints: [
          'Thu thập trực tiếp là cách thu thập thông tin thông qua các hoạt động trực tiếp như đo đạc, quan sát, làm thí nghiệm, lập bảng hỏi, phỏng vấn,...',
          'Muốn biết chiều cao thực tế của các bạn trong chính lớp mình, không thể tìm thấy trong sách hay tra cứu trên mạng Internet chung.',
          'Do đó, cách thu thập dữ liệu trực tiếp phù hợp nhất là dùng thước đo chiều cao từng bạn.'
        ],
        knowledgeTopic: 'Thu thập dữ liệu trực tiếp',
        lessonSectionRef: 'a) Thu thập dữ liệu'
      },
      {
        id: 'toan_b18_q2',
        question: 'Số liệu về xếp hạng FIFA của các đội bóng được lấy từ một website. Đây là cách thu thập dữ liệu nào?',
        options: [
          'Thu thập trực tiếp.',
          'Thu thập gián tiếp.',
          'Quan sát trực tiếp.',
          'Làm thí nghiệm.'
        ],
        correctIndex: 1,
        explanation: 'Lấy số liệu từ website (nguồn có sẵn trên mạng Internet) là thu thập gián tiếp.',
        hint: 'Website là nguồn thông tin có sẵn trên mạng Internet.',
        hints: [
          'Thu thập trực tiếp là thông qua quan sát, làm thí nghiệm, phỏng vấn; thu thập gián tiếp là lấy từ những nguồn có sẵn.',
          'Các nguồn có sẵn bao gồm sách, báo cáo, bài báo hoặc các trang mạng Internet,...',
          'Website là một nguồn có sẵn trên Internet, vì vậy đây là cách thu thập dữ liệu gián tiếp.'
        ],
        knowledgeTopic: 'Thu thập dữ liệu gián tiếp',
        lessonSectionRef: 'a) Thu thập dữ liệu'
      },
      {
        id: 'toan_b18_q3',
        question: 'Số lượng học sinh trong một lớp là loại dữ liệu nào?',
        options: [
          'Số liệu liên tục.',
          'Dữ liệu không là số.',
          'Số liệu rời rạc.',
          'Dữ liệu không thể sắp thứ tự.'
        ],
        correctIndex: 2,
        explanation: 'Số lượng học sinh là số liệu thu được từ việc đếm, nên là số liệu rời rạc.',
        hint: 'Số lượng học sinh được xác định bằng cách đếm hay bằng cách đo?',
        hints: [
          'Dữ liệu là số gồm số liệu rời rạc (thường thu được từ việc đếm) và số liệu liên tục (thường thu được từ việc đo).',
          'Số lượng học sinh trong lớp được xác định bằng cách đếm (1, 2, 3,...) và chỉ nhận các giá trị số tự nhiên rời rạc.',
          'Vì thu được từ việc đếm nên số lượng học sinh trong lớp là số liệu rời rạc.'
        ],
        knowledgeTopic: 'Phân loại dữ liệu là số',
        lessonSectionRef: 'b) Phân loại dữ liệu'
      },
      {
        id: 'toan_b18_q4',
        question: 'Chiều cao của học sinh là loại dữ liệu nào?',
        options: [
          'Số liệu rời rạc.',
          'Số liệu liên tục.',
          'Dữ liệu không là số.',
          'Dữ liệu không thể sắp thứ tự.'
        ],
        correctIndex: 1,
        explanation: 'Chiều cao là số liệu thu được từ việc đo, nên là số liệu liên tục.',
        hint: 'Chiều cao được xác định bằng dụng cụ đo lường và có thể nhận giá trị thập phân trong một khoảng liên tục.',
        hints: [
          'Hãy nhớ lại: số liệu rời rạc thường thu được từ việc đếm, còn số liệu liên tục thường thu được từ việc đo.',
          'Chiều cao học sinh được xác định bằng thước đo, có thể nhận bất kì giá trị nào trong một khoảng (ví dụ: 152,5 cm; 160,2 cm,...).',
          'Dữ liệu thu được từ việc đo lường là số liệu liên tục.'
        ],
        knowledgeTopic: 'Phân loại dữ liệu là số',
        lessonSectionRef: 'b) Phân loại dữ liệu'
      },
      {
        id: 'toan_b18_q5',
        question: 'Màu sắc yêu thích của học sinh thuộc loại dữ liệu nào?',
        options: [
          'Số liệu rời rạc.',
          'Số liệu liên tục.',
          'Dữ liệu là số.',
          'Dữ liệu không là số, không thể sắp thứ tự.'
        ],
        correctIndex: 3,
        explanation: 'Màu sắc không phải là số và các màu không có thứ bậc hơn kém nên không thể sắp thứ tự.',
        hint: 'Màu sắc có phải là con số không, và có thứ tự hơn kém tự nhiên không?',
        hints: [
          'Màu sắc (xanh, đỏ, vàng, tím,...) không phải là số, nên thuộc nhóm dữ liệu không là số.',
          'Dữ liệu không là số gồm loại có thể sắp thứ tự (như xếp loại học lực: giỏi, khá,...) và loại không thể sắp thứ tự.',
          'Các màu sắc yêu thích không có thứ bậc hơn kém tự nhiên, nên đây là dữ liệu không là số, không thể sắp thứ tự.'
        ],
        knowledgeTopic: 'Phân loại dữ liệu không là số',
        lessonSectionRef: 'b) Phân loại dữ liệu'
      }
    ]
  },
  toan_ch5_b19: {
    id: 'quiz_toan_ch5_b19',
    lessonId: 'toan_ch5_b19',
    subjectId: 'toan',
    title: '5 Câu hỏi trắc nghiệm: Bài 19 - Biểu diễn dữ liệu bằng bảng, biểu đồ',
    timeLimitSeconds: 180,
    questions: [
      {
        id: 'toan_b19_q1',
        question: 'Muốn so sánh số lượng các loài động vật trong một sở thú, biểu đồ nào sau đây phù hợp?',
        options: [
          'Biểu đồ cột.',
          'Biểu đồ đoạn thẳng.',
          'Biểu đồ hình quạt tròn.',
          'Biểu đồ cột kép.'
        ],
        correctIndex: 0,
        explanation: 'Biểu đồ cột thích hợp để biểu diễn và so sánh số liệu giữa các đối tượng (các loài động vật).',
        hint: 'Cần so sánh số liệu giữa các đối tượng độc lập với nhau.',
        hints: [
          'Xem lại đặc điểm: Biểu đồ cột thích hợp để biểu diễn, so sánh số liệu giữa các đối tượng.',
          'Các loài động vật trong sở thú là các đối tượng khác nhau cần so sánh số lượng.',
          'Do đó, biểu đồ cột là loại biểu đồ phù hợp nhất.'
        ],
        knowledgeTopic: 'Lựa chọn biểu đồ phù hợp',
        lessonSectionRef: 'b) Lựa chọn biểu đồ cột hay biểu đồ đoạn thẳng'
      },
      {
        id: 'toan_b19_q2',
        question: 'Muốn biểu diễn sự thay đổi cân nặng thai nhi theo tuần tuổi, nên chọn biểu đồ nào?',
        options: [
          'Biểu đồ tranh.',
          'Biểu đồ hình quạt tròn.',
          'Biểu đồ đoạn thẳng.',
          'Biểu đồ cột kép.'
        ],
        correctIndex: 2,
        explanation: 'Biểu đồ đoạn thẳng thích hợp nhất để biểu diễn sự thay đổi của một đại lượng theo thời gian (tuần tuổi).',
        hint: 'Cân nặng biến đổi liên tục theo thời gian (tuần tuổi).',
        hints: [
          'Biểu đồ đoạn thẳng thích hợp để biểu diễn sự thay đổi của một đại lượng theo thời gian.',
          'Tuần tuổi chính là các mốc thời gian liên tiếp trong quá trình phát triển của thai nhi.',
          'Để thấy rõ xu hướng tăng giảm theo thời gian, biểu đồ đoạn thẳng là lựa chọn phù hợp nhất.'
        ],
        knowledgeTopic: 'Biểu diễn sự thay đổi theo thời gian',
        lessonSectionRef: 'b) Lựa chọn biểu đồ cột hay biểu đồ đoạn thẳng'
      },
      {
        id: 'toan_b19_q3',
        question: 'Muốn so sánh số lượng áo của từng loại giữa học sinh nam và nữ, nên dùng biểu đồ nào?',
        options: [
          'Biểu đồ đoạn thẳng.',
          'Biểu đồ cột kép.',
          'Biểu đồ hình quạt tròn.',
          'Biểu đồ tranh.'
        ],
        correctIndex: 1,
        explanation: 'Biểu đồ cột kép dùng để so sánh hai nhóm số liệu tương ứng (nam và nữ) cho từng đối tượng (loại áo).',
        hint: 'Cần so sánh song song hai nhóm số liệu (nam và nữ).',
        hints: [
          'Xem lại đặc điểm: Biểu đồ cột kép dùng để so sánh hai nhóm số liệu tương ứng.',
          'Ở đây có hai nhóm số liệu cần so sánh song song là số lượng áo của học sinh nam và học sinh nữ cho mỗi loại áo.',
          'Vì vậy, biểu đồ cột kép là biểu đồ thích hợp nhất.'
        ],
        knowledgeTopic: 'So sánh hai nhóm số liệu',
        lessonSectionRef: 'c) Lựa chọn biểu đồ cột kép hay biểu đồ hình quạt tròn'
      },
      {
        id: 'toan_b19_q4',
        question: 'Muốn biểu diễn tỉ lệ người đọc 0 cuốn, 1–2 cuốn và trên 2 cuốn sách trong tổng số người được khảo sát, nên dùng biểu đồ nào?',
        options: [
          'Biểu đồ cột kép.',
          'Biểu đồ đoạn thẳng.',
          'Biểu đồ cột.',
          'Biểu đồ hình quạt tròn.'
        ],
        correctIndex: 3,
        explanation: 'Biểu đồ hình quạt tròn dùng để biểu diễn tỉ lệ các phần trong tổng thể (100% người được khảo sát).',
        hint: 'Từ khóa "tỉ lệ các phần trong tổng số (tổng thể)".',
        hints: [
          'Biểu đồ hình quạt tròn dùng để biểu diễn tỉ lệ các phần trong tổng thể.',
          'Toàn bộ số người được khảo sát là một tổng thể (100%), các nhóm đọc sách là các phần cấu thành.',
          'Để biểu diễn tỉ lệ từng phần so với toàn thể, biểu đồ hình quạt tròn là thích hợp nhất.'
        ],
        knowledgeTopic: 'Biểu diễn tỉ lệ các phần trong tổng thể',
        lessonSectionRef: 'c) Lựa chọn biểu đồ cột kép hay biểu đồ hình quạt tròn'
      },
      {
        id: 'toan_b19_q5',
        question: 'Muốn biểu diễn sự thay đổi dân số của một địa phương qua nhiều năm, biểu đồ nào phù hợp?',
        options: [
          'Biểu đồ đoạn thẳng.',
          'Biểu đồ hình quạt tròn.',
          'Biểu đồ tranh.',
          'Biểu đồ cột kép.'
        ],
        correctIndex: 0,
        explanation: 'Biểu đồ đoạn thẳng thích hợp để biểu diễn sự thay đổi của dân số theo thời gian (qua nhiều năm).',
        hint: 'Dân số thay đổi theo thời gian qua các năm.',
        hints: [
          'Hãy nhớ lại: Biểu đồ đoạn thẳng thích hợp để biểu diễn sự thay đổi của một đại lượng theo thời gian.',
          '"Qua nhiều năm" là các mốc thời gian liên tiếp cần theo dõi xu hướng phát triển.',
          'Do đó, biểu đồ đoạn thẳng là lựa chọn chuẩn xác nhất.'
        ],
        knowledgeTopic: 'Biểu diễn sự thay đổi theo thời gian',
        lessonSectionRef: 'b) Lựa chọn biểu đồ cột hay biểu đồ đoạn thẳng'
      }
    ]
  },
  toan_ch5_b20: {
    id: 'quiz_toan_ch5_b20',
    lessonId: 'toan_ch5_b20',
    subjectId: 'toan',
    title: '5 Câu hỏi trắc nghiệm: Bài 20 - Phân tích số liệu thống kê dựa vào biểu đồ',
    timeLimitSeconds: 180,
    questions: [
      {
        id: 'toan_b20_q1',
        imageUrl: '/assets/aistudio/image_9a83987e.png',
        imageAlt: 'Hình 5.9: Tỉ lệ học sinh khá, giỏi với trục đứng bắt đầu từ 80% và từ 0%',
        question: 'Hai biểu đồ biểu diễn tỉ lệ học sinh khá, giỏi:\n- Năm học 2019–2020: 81%.\n- Năm học 2020–2021: 82%.\n\nVì sao biểu đồ có trục đứng bắt đầu từ 80% làm sự chênh lệch trông lớn hơn?',
        options: [
          'Vì số liệu của hai năm khác nhau rất nhiều.',
          'Vì trục đứng không bắt đầu từ 0 nên làm sự chênh lệch nhìn có vẻ lớn hơn.',
          'Vì biểu đồ có hai cột.',
          'Vì tỉ lệ học sinh năm sau giảm.'
        ],
        correctIndex: 1,
        explanation: 'Trục đứng bắt đầu từ 80% thay vì 0% đã phóng đại khoảng chênh lệch 1% giữa hai năm, làm người xem cảm giác sự chênh lệch rất lớn.',
        hint: 'Quan sát giá trị bắt đầu của trục đứng ở hai biểu đồ a và b.',
        hints: [
          'Hãy quan sát trục đứng của biểu đồ a (bắt đầu từ 80%) và biểu đồ b (bắt đầu từ 0%).',
          'Khi trục đứng không bắt đầu từ gốc 0, chiều cao phần cột được phóng đại so với khoảng chênh lệch thực tế.',
          'Vì trục đứng không bắt đầu từ 0 nên làm sự chênh lệch nhìn có vẻ lớn hơn.'
        ],
        knowledgeTopic: 'Các lưu ý khi đọc và diễn giải biểu đồ',
        lessonSectionRef: '4. Các lưu ý khi đọc và diễn giải biểu đồ'
      },
      {
        id: 'toan_b20_q2',
        imageUrl: '/assets/aistudio/image_774b881b.png',
        imageAlt: 'Hình 5.10: Số lượt bình chọn các món ăn Việt Nam được ưa thích',
        question: 'Theo biểu đồ số liệu món ăn Việt Nam được ưa thích, số lượt bình chọn của Phở là 972, Nem là 987 và Bánh mì là 955. Món ăn nào có số lượt bình chọn cao nhất?',
        options: [
          'Phở.',
          'Bánh mì.',
          'Nem.',
          'Ba món bằng nhau.'
        ],
        correctIndex: 2,
        explanation: 'Nem có số lượt bình chọn cao nhất: 987 lượt (so với Phở 972 lượt và Bánh mì 955 lượt).',
        hint: 'So sánh 3 số liệu: 972, 987 và 955.',
        hints: [
          'Quan sát số liệu được ghi trên đỉnh mỗi cột: Phở: 972, Nem: 987, Bánh mì: 955.',
          'So sánh ba số: 987 lớn nhất trong 3 số.',
          'Vậy món Nem có số lượt bình chọn cao nhất (987 lượt).'
        ],
        knowledgeTopic: 'Đọc và so sánh số liệu giữa các đối tượng',
        lessonSectionRef: '1. Đọc và so sánh số liệu giữa các đối tượng'
      },
      {
        id: 'toan_b20_q3',
        imageUrl: '/assets/aistudio/image_f9123d4e.png',
        imageAlt: 'Hình 5.13: Cấu trúc dân số Việt Nam năm 2010 và năm 2020',
        question: 'Theo biểu đồ cơ cấu dân số Việt Nam năm 2020, nhóm người trên 64 tuổi chiếm 7,87%. Nếu dân số là 97,41 triệu người thì số người trên 64 tuổi khoảng bao nhiêu?',
        options: [
          '2,26 triệu người.',
          '7,67 triệu người.',
          '68,94 triệu người.',
          '23,19 triệu người.'
        ],
        correctIndex: 1,
        explanation: '97,41 × 7,87 : 100 ≈ 7,67 (triệu người).',
        hint: 'Lấy tổng dân số nhân với tỉ lệ phần trăm của nhóm trên 64 tuổi rồi chia cho 100.',
        hints: [
          'Từ biểu đồ năm 2020, nhóm người trên 64 tuổi chiếm 7,87% tổng dân số.',
          'Áp dụng công thức tính số lượng: 97,41 × 7,87 : 100.',
          'Kết quả tính toán: 97,41 × 0,0787 ≈ 7,67 (triệu người).'
        ],
        knowledgeTopic: 'Đọc tỉ lệ phần trăm và phân tích cơ cấu',
        lessonSectionRef: '2. Đọc tỉ lệ phần trăm và phân tích cơ cấu trong tổng thể'
      },
      {
        id: 'toan_b20_q4',
        imageUrl: '/assets/aistudio/image_c265666b.png',
        imageAlt: 'Hình 5.15: Số giờ ban ngày theo tháng tại Canberra và Moscow',
        question: 'Dựa vào biểu đồ số giờ ban ngày tại Canberra và Moscow, vào hai tháng nào số giờ ban ngày ở hai thành phố gần bằng nhau?',
        options: [
          'Tháng 1 và tháng 12.',
          'Tháng 5 và tháng 6.',
          'Tháng 3 và tháng 9.',
          'Tháng 6 và tháng 7.'
        ],
        correctIndex: 2,
        explanation: 'Tại tháng 3 (12,3 và 11,9) và tháng 9 (11,9 và 12,7), hai đường biểu diễn cắt nhau và có số giờ ban ngày xấp xỉ nhau.',
        hint: 'Tìm hai điểm mà hai đường biểu diễn của Canberra và Moscow giao nhau trên biểu đồ.',
        hints: [
          'Số giờ ban ngày ở hai thành phố gần bằng nhau tại các tháng mà hai đường biểu diễn cắt nhau hoặc nằm rất gần nhau.',
          'Quan sát trục hoành (tháng), hai đường biểu diễn cắt nhau vào tháng 3 và tháng 9.',
          'Tại tháng 3 (12,3 và 11,9) và tháng 9 (11,9 và 12,7), số giờ ban ngày gần bằng nhau nhất.'
        ],
        knowledgeTopic: 'So sánh sự thay đổi của đại lượng theo thời gian',
        lessonSectionRef: '3. Nhận xét xu hướng và so sánh sự thay đổi của đại lượng theo thời gian'
      },
      {
        id: 'toan_b20_q5',
        question: 'Khi phân tích hai biểu đồ đoạn thẳng biểu diễn cùng một đại lượng theo thời gian, cần chú ý điều gì để tránh nhận xét sai?',
        options: [
          'Chỉ quan sát màu sắc của đường biểu diễn.',
          'Chỉ nhìn vào độ dốc của đường biểu diễn.',
          'Bỏ qua các số liệu trên trục đứng.',
          'Kiểm tra thang đo và cách chia trục trước khi so sánh.'
        ],
        correctIndex: 3,
        explanation: 'Cần kiểm tra kĩ thang đo và cách chia các trục của hai biểu đồ để tránh bị đánh lừa bởi độ dốc của đường biểu diễn.',
        hint: 'Độ dốc của đường biểu diễn phụ thuộc rất nhiều vào tỉ lệ và khoảng cách chia trên các trục.',
        hints: [
          'Nếu hai biểu đồ có thang đo trục đứng khác nhau, độ dốc của đường biểu diễn có thể gây ra nhận xét sai lệch về mức độ tăng giảm.',
          'Không thể chỉ nhìn vào hình dạng đường biểu diễn mà bỏ qua các thông số đo lường thực tế.',
          'Do đó, quy tắc quan trọng là phải kiểm tra thang đo và cách chia trục trước khi so sánh hai biểu đồ.'
        ],
        knowledgeTopic: 'Các lưu ý khi đọc và diễn giải biểu đồ',
        lessonSectionRef: '4. Các lưu ý khi đọc và diễn giải biểu đồ'
      }
    ]
  },
  toan_ch6_b21: {
    id: 'quiz_toan_ch6_b21',
    lessonId: 'toan_ch6_b21',
    subjectId: 'toan',
    title: '5 Câu hỏi trắc nghiệm: Bài 21 - Phân thức đại số',
    timeLimitSeconds: 180,
    questions: [
      {
        id: 'toan_b21_q1',
        question: 'Một phân thức đại số có dạng nào sau đây?',
        options: [
          '$A + B$',
          '$\\frac{A}{B}$, trong đó $A, B$ là hai đa thức và $B$ khác đa thức 0',
          '$A - B$',
          '$A \\cdot B$'
        ],
        correctIndex: 1,
        explanation: 'Theo định nghĩa trong SGK, một phân thức đại số (hay phân thức) là một biểu thức có dạng $\\frac{A}{B}$, trong đó $A, B$ là hai đa thức và $B$ khác đa thức 0.',
        hint: 'Nhớ lại định nghĩa phân thức đại số trong ô vàng lý thuyết SGK.',
        hints: [
          'Nhớ lại định nghĩa phân thức đại số trong ô vàng lý thuyết SGK.',
          'Phân thức có tử thức ở trên và mẫu thức ở dưới vạch phân số.',
          'Biểu thức có dạng $\\frac{A}{B}$ với mẫu thức $B$ phải là đa thức khác 0.'
        ],
        knowledgeTopic: 'Định nghĩa phân thức đại số',
        lessonSectionRef: '1. Định nghĩa phân thức đại số'
      },
      {
        id: 'toan_b21_q2',
        question: 'Trong phân thức $\\frac{x+2}{x-3}$, mẫu thức là biểu thức nào?',
        options: [
          '$x + 2$',
          '$x$',
          '$x - 3$',
          '$x + 3$'
        ],
        correctIndex: 2,
        explanation: 'Trong phân thức $\\frac{A}{B}$, $A$ là tử thức (nằm trên) và $B$ là mẫu thức (nằm dưới). Do đó trong phân thức $\\frac{x+2}{x-3}$, mẫu thức là $x - 3$.',
        hint: 'Mẫu thức là biểu thức nằm ở phía dưới gạch phân số.',
        hints: [
          'Trong phân thức dạng $\\frac{A}{B}$, biểu thức nằm phía dưới dấu gạch phân số là mẫu thức.',
          'Quan sát biểu thức nằm ở phía dưới gạch phân số của $\\frac{x+2}{x-3}$.',
          'Tử thức là $x + 2$ (ở trên), còn mẫu thức ở phía dưới là $x - 3$.'
        ],
        knowledgeTopic: 'Nhận biết tử thức và mẫu thức',
        lessonSectionRef: '1. Định nghĩa phân thức đại số'
      },
      {
        id: 'toan_b21_q3',
        question: 'Biểu thức nào sau đây không phải là phân thức đại số?',
        options: [
          '$\\frac{x+1}{x-2}$',
          '$\\frac{x^2+1}{3}$',
          '$\\frac{x+1}{0}$',
          '$\\frac{2x}{x^2+1}$'
        ],
        correctIndex: 2,
        explanation: 'Theo định nghĩa, trong phân thức $\\frac{A}{B}$, mẫu thức $B$ phải khác đa thức 0. Biểu thức $\\frac{x+1}{0}$ có mẫu thức bằng 0 nên không phải là phân thức đại số.',
        hint: 'Kiểm tra điều kiện của mẫu thức trong định nghĩa phân thức đại số.',
        hints: [
          'Nhớ lại điều kiện đối với mẫu thức $B$ trong định nghĩa phân thức $\\frac{A}{B}$.',
          'Mẫu thức bắt buộc phải là một đa thức khác đa thức 0.',
          'Biểu thức $\\frac{x+1}{0}$ có mẫu thức là 0 nên vi phạm định nghĩa phân thức đại số.'
        ],
        knowledgeTopic: 'Điều kiện của mẫu thức trong phân thức đại số',
        lessonSectionRef: '1. Định nghĩa phân thức đại số'
      },
      {
        id: 'toan_b21_q4',
        question: 'Cho phân thức $P = \\frac{x^2-x-1}{x^2+3x}$. Tại $x = 2$, giá trị của $P$ bằng bao nhiêu?',
        options: [
          '$\\frac{1}{10}$',
          '$-\\frac{1}{10}$',
          '$\\frac{1}{5}$',
          '$-\\frac{1}{5}$'
        ],
        correctIndex: 0,
        explanation: 'Điều kiện xác định là $x \\ne 0$ và $x \\ne -3$. Tại $x = 2$ (thỏa mãn ĐKXĐ), thay $x = 2$ vào phân thức ta có: $P = \\frac{2^2 - 2 - 1}{2^2 + 3 \\cdot 2} = \\frac{4 - 2 - 1}{4 + 6} = \\frac{1}{10}$.',
        hint: 'Thay $x = 2$ vào tử thức và mẫu thức rồi tính toán cẩn thận.',
        hints: [
          'Kiểm tra xem $x = 2$ có thỏa mãn điều kiện xác định mẫu thức khác 0 hay không, rồi thay số vào tử và mẫu.',
          'Tính giá trị tử thức: $2^2 - 2 - 1 = 4 - 3 = 1$; tính giá trị mẫu thức: $2^2 + 3 \\cdot 2 = 4 + 6 = 10$.',
          'Lập tỉ số tử trên mẫu ta được kết quả $P = \\frac{1}{10}$.'
        ],
        knowledgeTopic: 'Tính giá trị của phân thức đại số',
        lessonSectionRef: 'Ví dụ'
      },
      {
        id: 'toan_b21_q5',
        question: 'Điều kiện xác định của phân thức $\\frac{x-3}{x+2}$ là gì?',
        options: [
          '$x \\ne 3$',
          '$x \\ne -2$',
          '$x \\ne 0$',
          '$x \\ne 2$'
        ],
        correctIndex: 1,
        explanation: 'Điều kiện xác định của phân thức là mẫu thức phải khác 0: $x + 2 \\ne 0 \\iff x \\ne -2$.',
        hint: 'Điều kiện xác định của phân thức là mẫu thức phải khác 0.',
        hints: [
          'Điều kiện xác định của phân thức là giá trị của biến làm cho mẫu thức khác 0.',
          'Cho mẫu thức $x + 2 \\ne 0$ rồi giải tìm điều kiện của $x$.',
          'Từ $x + 2 \\ne 0$, chuyển vế số 2 sang vế phải ta được $x \\ne -2$.'
        ],
        knowledgeTopic: 'Điều kiện xác định của phân thức',
        lessonSectionRef: '1. Định nghĩa phân thức đại số'
      }
    ]
  },
  toan_ch6_b22: {
    id: 'quiz_toan_ch6_b22',
    lessonId: 'toan_ch6_b22',
    subjectId: 'toan',
    title: '5 Câu hỏi trắc nghiệm: Bài 22 - Tính chất cơ bản của phân thức đại số',
    timeLimitSeconds: 180,
    questions: [
      {
        id: 'toan_b22_q1',
        question: 'Nếu nhân cả tử và mẫu của một phân thức với cùng một đa thức khác đa thức 0 thì ta được điều gì?',
        options: [
          'Một phân thức bằng phân thức đã cho.',
          'Một phân thức luôn bằng 0.',
          'Một phân thức không xác định.',
          'Một phân thức luôn lớn hơn phân thức đã cho.'
        ],
        correctIndex: 0,
        explanation: 'Theo tính chất cơ bản của phân thức: $\\frac{A}{B} = \\frac{A \\cdot M}{B \\cdot M}$ (với $M$ khác đa thức 0), ta luôn được một phân thức bằng phân thức đã cho.',
        hint: 'Xem lại tính chất cơ bản của phân thức trong ô vàng 1 SGK.',
        hints: [
          'Xem lại nội dung ô vàng 1 về tính chất cơ bản của phân thức đại số.',
          'Tương tự như tính chất của phân số, khi nhân cả tử và mẫu với cùng một đa thức khác 0 thì giá trị không đổi.',
          'Công thức $\\frac{A}{B} = \\frac{A \\cdot M}{B \\cdot M}$ khẳng định kết quả là một phân thức bằng phân thức đã cho.'
        ],
        knowledgeTopic: 'Tính chất cơ bản của phân thức đại số',
        lessonSectionRef: 'Tính chất cơ bản của phân thức'
      },
      {
        id: 'toan_b22_q2',
        question: 'Rút gọn phân thức $\\frac{2x+2}{x^2-1}$ với điều kiện xác định của phân thức ban đầu.',
        options: [
          '$\\frac{2}{x+1}$',
          '$\\frac{2}{x-1}$',
          '$\\frac{1}{x-1}$',
          '$\\frac{2}{x^2-1}$'
        ],
        correctIndex: 1,
        explanation: 'Phân tích tử và mẫu thành nhân tử: $2x + 2 = 2(x + 1)$ và $x^2 - 1 = (x - 1)(x + 1)$. Chia cả tử và mẫu cho nhân tử chung là $(x + 1)$, ta được: $\\frac{2(x+1)}{(x-1)(x+1)} = \\frac{2}{x-1}$.',
        hint: 'Phân tích tử và mẫu thành nhân tử để tìm nhân tử chung.',
        hints: [
          'Áp dụng quy tắc rút gọn phân thức: phân tích tử và mẫu thành nhân tử để tìm nhân tử chung.',
          'Đặt nhân tử chung ở tử là 2, dùng hằng đẳng thức hiệu hai bình phương cho mẫu: $x^2 - 1 = (x - 1)(x + 1)$.',
          'Rút gọn nhân tử chung $(x + 1)$ ở cả tử và mẫu, còn lại số 2 trên tử và $(x - 1)$ dưới mẫu.'
        ],
        knowledgeTopic: 'Rút gọn phân thức đại số',
        lessonSectionRef: 'Cách rút gọn phân thức'
      },
      {
        id: 'toan_b22_q3',
        question: 'Khi rút gọn phân thức đại số, bước đầu tiên cần làm là gì?',
        options: [
          'Cộng tử và mẫu.',
          'Trừ tử và mẫu.',
          'Phân tích tử và mẫu thành nhân tử để tìm nhân tử chung.',
          'Đổi dấu cả tử và mẫu.'
        ],
        correctIndex: 2,
        explanation: 'Theo quy tắc rút gọn phân thức trong SGK (ô vàng 2), bước 1 là phân tích tử và mẫu thành nhân tử để tìm nhân tử chung; bước 2 là chia cả tử và mẫu cho nhân tử chung đó.',
        hint: 'Xem lại các bước rút gọn phân thức trong ô vàng 2 SGK.',
        hints: [
          'Xem lại các bước rút gọn phân thức đại số trong ô vàng 2 SGK.',
          'Muốn biết có thể chia cả tử và mẫu cho biểu thức nào, trước hết phải đưa tử và mẫu về dạng tích.',
          'Bước đầu tiên bắt buộc phải phân tích tử và mẫu thành nhân tử để tìm nhân tử chung.'
        ],
        knowledgeTopic: 'Quy trình rút gọn phân thức',
        lessonSectionRef: 'Cách rút gọn phân thức'
      },
      {
        id: 'toan_b22_q4',
        question: 'Cho hai phân thức trong Ví dụ 3 SGK: $\\frac{3}{5x^3+5x^2}$ và $\\frac{-7}{2x^3+4x^2+2x}$. Mẫu thức chung là biểu thức nào?',
        options: [
          '$5x^2(x+1)$',
          '$2x(x+1)^2$',
          '$10x^2(x+1)$',
          '$10x^2(x+1)^2$'
        ],
        correctIndex: 3,
        explanation: 'Phân tích: $5x^3 + 5x^2 = 5x^2(x + 1)$ và $2x^3 + 4x^2 + 2x = 2x(x^2 + 2x + 1) = 2x(x + 1)^2$. BCNN của hệ số là $\\text{BCNN}(5, 2) = 10$. Số mũ cao nhất của $x$ là $x^2$, của $(x + 1)$ là $(x + 1)^2$. Do đó mẫu thức chung là $10x^2(x + 1)^2$.',
        hint: 'Phân tích hai mẫu thức thành nhân tử rồi tìm BCNN hệ số và nhân tử với số mũ lớn nhất.',
        hints: [
          'Phân tích từng mẫu thức thành nhân tử, sau đó lấy BCNN của hệ số và các nhân tử với số mũ lớn nhất.',
          'Mẫu 1 là $5x^2(x+1)$, mẫu 2 là $2x(x+1)^2$. Tìm BCNN của hệ số 5 và 2, cùng lũy thừa cao nhất của $x$ và $(x+1)$.',
          'Hệ số chung là 10, phần biến chứa $x^2$ và $(x+1)^2$, ghép lại ta được $10x^2(x+1)^2$.'
        ],
        knowledgeTopic: 'Tìm mẫu thức chung khi quy đồng',
        lessonSectionRef: 'Cách quy đồng mẫu thức nhiều phân thức'
      },
      {
        id: 'toan_b22_q5',
        question: 'Theo Ví dụ 2 SGK, rút gọn phân thức $P = \\frac{x^2-xy}{3(xy^2-y^3)}$. Kết quả là:',
        options: [
          '$\\frac{x}{3y^2}$',
          '$\\frac{x}{3y}$',
          '$\\frac{x-y}{3y^2}$',
          '$\\frac{1}{3y^2}$'
        ],
        correctIndex: 0,
        explanation: 'Điều kiện xác định: $3y^2(x - y) \\ne 0 \\iff y \\ne 0,\\ x \\ne y$. Phân tích: $x^2 - xy = x(x - y)$ và $3(xy^2 - y^3) = 3y^2(x - y)$. Do đó: $P = \\frac{x(x - y)}{3y^2(x - y)} = \\frac{x}{3y^2}$.',
        hint: 'Đặt nhân tử chung ở tử và mẫu rồi chia cho nhân tử chung.',
        hints: [
          'Phân tích tử và mẫu thành nhân tử bằng cách đặt nhân tử chung ra ngoài.',
          'Tử thức đặt $x$ ra ngoài được $x(x-y)$; mẫu thức đặt $y^2$ ra ngoài được $3y^2(x-y)$.',
          'Rút gọn nhân tử chung $(x-y)$ ở cả tử và mẫu ta nhận được kết quả $\\frac{x}{3y^2}$.'
        ],
        knowledgeTopic: 'Rút gọn phân thức đại số',
        lessonSectionRef: 'Cách rút gọn phân thức'
      }
    ]
  },
  toan_ch6_b23: {
    id: 'quiz_toan_ch6_b23',
    lessonId: 'toan_ch6_b23',
    subjectId: 'toan',
    title: '5 Câu hỏi trắc nghiệm: Bài 23 - Phép cộng và phép trừ phân thức đại số',
    timeLimitSeconds: 180,
    questions: [
      {
        id: 'toan_b23_q1',
        question: 'Muốn cộng hai phân thức có cùng mẫu thức, ta làm thế nào?',
        options: [
          'Cộng các tử thức và giữ nguyên mẫu thức.',
          'Cộng các mẫu thức và giữ nguyên tử thức.',
          'Nhân hai tử thức với nhau.',
          'Nhân hai mẫu thức với nhau.'
        ],
        correctIndex: 0,
        explanation: 'Theo quy tắc SGK, muốn cộng hai phân thức có cùng mẫu thức, ta cộng các tử thức với nhau và giữ nguyên mẫu thức: $\\frac{A}{M} + \\frac{B}{M} = \\frac{A + B}{M}$.',
        hint: 'Xem lại quy tắc cộng hai phân thức cùng mẫu trong ô vàng lý thuyết SGK.',
        hints: [
          'Xem lại quy tắc cộng hai phân thức cùng mẫu trong ô vàng lý thuyết SGK.',
          'Tương tự như cộng hai phân số cùng mẫu, mẫu thức được giữ nguyên và ta chỉ cộng các tử thức.',
          'Quy tắc chuẩn: cộng các tử thức với nhau và giữ nguyên mẫu thức.'
        ],
        knowledgeTopic: 'Cộng hai phân thức cùng mẫu',
        lessonSectionRef: 'Cộng hai phân thức cùng mẫu'
      },
      {
        id: 'toan_b23_q2',
        question: 'Kết quả của phép cộng sau là gì?\n\\[\\frac{5x^2}{x-1} + \\frac{5-10x}{x-1}\\]',
        options: [
          '$5(x+1)$',
          '$5(x-1)$',
          '$5(x^2-1)$',
          '$5(x-2)$'
        ],
        correctIndex: 1,
        explanation: 'Hai phân thức có cùng mẫu thức $(x - 1)$ (ĐKXĐ: $x \\ne 1$). Ta cộng tử thức: $\\frac{5x^2 + 5 - 10x}{x - 1} = \\frac{5(x^2 - 2x + 1)}{x - 1} = \\frac{5(x - 1)^2}{x - 1} = 5(x - 1)$.',
        hint: 'Vì hai phân thức có cùng mẫu thức $(x - 1)$, hãy cộng các tử thức với nhau rồi giữ nguyên mẫu.',
        hints: [
          'Vì hai phân thức có cùng mẫu thức $(x - 1)$, hãy cộng các tử thức với nhau rồi giữ nguyên mẫu.',
          'Tử thức thu được là $5x^2 - 10x + 5 = 5(x^2 - 2x + 1) = 5(x - 1)^2$.',
          'Rút gọn nhân tử chung $(x - 1)$ ở cả tử và mẫu, kết quả cuối cùng là $5(x - 1)$.'
        ],
        knowledgeTopic: 'Cộng hai phân thức cùng mẫu',
        lessonSectionRef: 'Ví dụ'
      },
      {
        id: 'toan_b23_q3',
        question: 'Kết quả của phép tính sau là gì?\n\\[\\frac{5}{x} + \\frac{3}{1-x}\\]',
        options: [
          '$\\frac{5+2x}{x(1-x)}$',
          '$\\frac{5-2x}{x(1-x)}$',
          '$\\frac{5-3x}{x(1-x)}$',
          '$\\frac{8-2x}{x(1-x)}$'
        ],
        correctIndex: 1,
        explanation: 'Điều kiện xác định: $x \\ne 0,\\ x \\ne 1$. Quy đồng mẫu thức chung là $x(1 - x)$. Nhân tử phụ của mẫu thứ nhất là $(1 - x)$, của mẫu thứ hai là $x$. Ta có: $\\frac{5(1-x)}{x(1-x)} + \\frac{3x}{x(1-x)} = \\frac{5 - 5x + 3x}{x(1-x)} = \\frac{5 - 2x}{x(1-x)}$.',
        hint: 'Hai phân thức khác mẫu, trước hết cần quy đồng mẫu thức chung là $x(1 - x)$.',
        hints: [
          'Hai phân thức khác mẫu, trước hết cần quy đồng mẫu thức chung là $x(1 - x)$.',
          'Nhân cả tử và mẫu phân thức thứ nhất với $(1 - x)$, phân thức thứ hai với $x$: $\\frac{5(1 - x) + 3x}{x(1 - x)}$.',
          'Khai triển tử: $5 - 5x + 3x = 5 - 2x$. Phân thức kết quả là $\\frac{5 - 2x}{x(1 - x)}$.'
        ],
        knowledgeTopic: 'Cộng hai phân thức khác mẫu',
        lessonSectionRef: 'Cộng hai phân thức khác mẫu'
      },
      {
        id: 'toan_b23_q4',
        question: 'Kết quả của phép tính sau là gì?\n\\[\\frac{2x+1}{x} - \\frac{y-1}{y}\\]',
        options: [
          '$\\frac{xy+x+y}{xy}$',
          '$\\frac{xy-x-y}{xy}$',
          '$\\frac{2xy+y-x}{xy}$',
          '$\\frac{xy+x-y}{xy}$'
        ],
        correctIndex: 0,
        explanation: 'Điều kiện xác định: $x \\ne 0,\\ y \\ne 0$. Quy đồng mẫu thức chung $xy$: $\\frac{(2x + 1)y}{xy} - \\frac{(y - 1)x}{xy} = \\frac{2xy + y - (xy - x)}{xy} = \\frac{2xy + y - xy + x}{xy} = \\frac{xy + x + y}{xy}$.',
        hint: 'Quy đồng mẫu thức chung là $xy$, chú ý dấu trừ trước tử thức thứ hai khi trừ phân thức.',
        hints: [
          'Quy đồng mẫu thức chung là $xy$, chú ý dấu trừ trước tử thức thứ hai khi trừ phân thức.',
          'Tử số sau khi quy đồng là $(2x + 1)y - (y - 1)x = 2xy + y - xy + x$.',
          'Thu gọn các hạng tử đồng dạng: $2xy - xy + x + y = xy + x + y$. Kết quả là $\\frac{xy + x + y}{xy}$.'
        ],
        knowledgeTopic: 'Trừ hai phân thức khác mẫu',
        lessonSectionRef: 'Trừ hai phân thức'
      },
      {
        id: 'toan_b23_q5',
        question: 'Kết quả của phép trừ sau là gì?\n\\[\\frac{7x-3}{x+1} - \\frac{2x+1}{x+1}\\]',
        options: [
          '$\\frac{9x-2}{x+1}$',
          '$\\frac{5x-4}{x+1}$',
          '$\\frac{5x-2}{x+1}$',
          '$\\frac{5x+4}{x+1}$'
        ],
        correctIndex: 1,
        explanation: 'Điều kiện xác định: $x \\ne -1$. Hai phân thức có cùng mẫu thức $(x + 1)$. Trừ các tử thức và giữ nguyên mẫu: $\\frac{(7x - 3) - (2x + 1)}{x + 1} = \\frac{7x - 3 - 2x - 1}{x + 1} = \\frac{5x - 4}{x + 1}$.',
        hint: 'Hai phân thức cùng mẫu $(x + 1)$, lấy tử thức thứ nhất trừ cho tử thức thứ hai.',
        hints: [
          'Hai phân thức cùng mẫu $(x + 1)$, lấy tử thức thứ nhất trừ cho tử thức thứ hai.',
          'Chú ý đặt dấu ngoặc khi trừ: $(7x - 3) - (2x + 1) = 7x - 3 - 2x - 1$.',
          'Thu gọn tử: $(7x - 2x) + (-3 - 1) = 5x - 4$. Kết quả là $\\frac{5x - 4}{x + 1}$.'
        ],
        knowledgeTopic: 'Trừ hai phân thức cùng mẫu',
        lessonSectionRef: 'Trừ hai phân thức'
      }
    ]
  },
  toan_ch6_b24: {
    id: 'quiz_toan_ch6_b24',
    lessonId: 'toan_ch6_b24',
    subjectId: 'toan',
    title: '5 Câu hỏi trắc nghiệm: Bài 24 - Phép nhân và phép chia phân thức đại số',
    timeLimitSeconds: 180,
    questions: [
      {
        id: 'toan_b24_q1',
        question: 'Muốn nhân hai phân thức, ta làm thế nào?',
        options: [
          'Nhân các tử thức với nhau, nhân các mẫu thức với nhau.',
          'Cộng các tử thức và cộng các mẫu thức.',
          'Nhân tử thức thứ nhất với mẫu thức thứ hai.',
          'Chia hai tử thức cho nhau.'
        ],
        correctIndex: 0,
        explanation: 'Theo quy tắc SGK, muốn nhân hai phân thức, ta nhân các tử thức với nhau, nhân các mẫu thức với nhau: $\\frac{A}{B} \\cdot \\frac{C}{D} = \\frac{A \\cdot C}{B \\cdot D}$.',
        hint: 'Xem lại quy tắc nhân hai phân thức trong ô vàng thứ nhất của SGK.',
        hints: [
          'Nhớ lại quy tắc nhân hai phân số đã học ở lớp 6 để suy luận sang quy tắc nhân hai phân thức đại số.',
          'Xem lại ô vàng thứ nhất trong phần Lý thuyết: $\\frac{A}{B} \\cdot \\frac{C}{D} = \\frac{A \\cdot C}{B \\cdot D}$.',
          'Quy tắc chuẩn: muốn nhân hai phân thức, ta nhân các tử thức với nhau và nhân các mẫu thức với nhau.'
        ],
        knowledgeTopic: 'Quy tắc nhân hai phân thức',
        lessonSectionRef: 'Quy tắc nhân hai phân thức'
      },
      {
        id: 'toan_b24_q2',
        question: 'Kết quả của phép nhân sau là gì?\n\\[\\frac{2x-1}{5x+1}\\cdot\\frac{5x+1}{4x^2-1}\\]',
        options: [
          '$\\frac{1}{2x-1}$',
          '$\\frac{1}{2x+1}$',
          '$\\frac{2x+1}{1}$',
          '$\\frac{1}{4x^2-1}$'
        ],
        correctIndex: 1,
        explanation: 'Điều kiện xác định: $x \\ne -\\frac{1}{5},\\ x \\ne \\frac{1}{2},\\ x \\ne -\\frac{1}{2}$.\nTa có:\n\\[\\frac{2x-1}{5x+1}\\cdot\\frac{5x+1}{4x^2-1} = \\frac{(2x-1)(5x+1)}{(5x+1)(4x^2-1)} = \\frac{(2x-1)(5x+1)}{(5x+1)(2x-1)(2x+1)} = \\frac{1}{2x+1}.\\]',
        hint: 'Nhân các tử thức với nhau, nhân các mẫu thức với nhau rồi phân tích $4x^2-1$ thành $(2x-1)(2x+1)$ để rút gọn.',
        hints: [
          'Nhân các tử thức với nhau và nhân các mẫu thức với nhau theo công thức $\\frac{A}{B}\\cdot\\frac{C}{D} = \\frac{A\\cdot C}{B\\cdot D}$.',
          'Nhận xét mẫu thứ hai có dạng hằng đẳng thức hiệu hai bình phương: $4x^2 - 1 = (2x - 1)(2x + 1)$.',
          'Nhân tử chung giữa tử và mẫu là $(2x - 1)(5x + 1)$. Chia cả tử và mẫu cho nhân tử chung đó ta được kết quả $\\frac{1}{2x+1}$.'
        ],
        knowledgeTopic: 'Nhân hai phân thức và rút gọn',
        lessonSectionRef: 'Ví dụ'
      },
      {
        id: 'toan_b24_q3',
        question: 'Muốn chia phân thức $\\frac{A}{B}$ cho phân thức $\\frac{C}{D}$ khác 0, ta làm thế nào?',
        options: [
          'Nhân hai phân thức với nhau.',
          'Chia tử thức cho tử thức, mẫu thức cho mẫu thức.',
          'Nhân phân thức thứ nhất với phân thức nghịch đảo của phân thức thứ hai.',
          'Đảo ngược phân thức thứ nhất rồi nhân với phân thức thứ hai.'
        ],
        correctIndex: 2,
        explanation: 'Theo quy tắc SGK, muốn chia phân thức $\\frac{A}{B}$ cho phân thức $\\frac{C}{D}$ khác 0, ta nhân $\\frac{A}{B}$ với phân thức nghịch đảo $\\frac{D}{C}$: $\\frac{A}{B} : \\frac{C}{D} = \\frac{A}{B} \\cdot \\frac{D}{C}$.',
        hint: 'Xem lại ô vàng thứ hai trong SGK: phép chia phân thức được chuyển thành phép nhân với phân thức nghịch đảo.',
        hints: [
          'Phép chia phân thức được chuyển thành phép nhân với phân thức nghịch đảo của phân thức chia.',
          'Xem lại công thức chia ở ô vàng thứ hai: $\\frac{A}{B} : \\frac{C}{D} = \\frac{A}{B}\\cdot\\frac{D}{C}$ (với $\\frac{C}{D} \\ne 0$).',
          'Phân thức $\\frac{D}{C}$ chính là phân thức nghịch đảo của $\\frac{C}{D}$, do đó ta nhân phân thức thứ nhất với phân thức nghịch đảo của phân thức thứ hai.'
        ],
        knowledgeTopic: 'Quy tắc chia hai phân thức',
        lessonSectionRef: 'Quy tắc chia hai phân thức'
      },
      {
        id: 'toan_b24_q4',
        question: 'Kết quả của phép chia sau là gì?\n\\[\\frac{5}{x^2-1}:\\frac{3}{x^2-x}\\]',
        options: [
          '$\\frac{5x}{3(x+1)}$',
          '$\\frac{5}{3(x+1)}$',
          '$\\frac{5x}{3(x-1)}$',
          '$\\frac{3x}{5(x+1)}$'
        ],
        correctIndex: 0,
        explanation: 'Điều kiện xác định: $x \\ne -1,\\ x \\ne 0,\\ x \\ne 1$.\nTa có:\n\\[\\frac{5}{x^2-1}:\\frac{3}{x^2-x} = \\frac{5}{(x-1)(x+1)} \\cdot \\frac{x(x-1)}{3} = \\frac{5 \\cdot x(x-1)}{3(x-1)(x+1)} = \\frac{5x}{3(x+1)}.\\]',
        hint: 'Chuyển phép chia thành phép nhân với phân thức nghịch đảo $\\frac{x^2 - x}{3}$, rồi phân tích thành nhân tử để rút gọn.',
        hints: [
          'Chuyển phép chia thành phép nhân với phân thức nghịch đảo: $\\frac{5}{x^2 - 1}\\cdot\\frac{x^2 - x}{3}$.',
          'Phân tích các mẫu thức và tử thức thành nhân tử: $x^2 - 1 = (x - 1)(x + 1)$ và $x^2 - x = x(x - 1)$.',
          'Rút gọn nhân tử chung $(x - 1)$: biểu thức trở thành $\\frac{5 \\cdot x(x - 1)}{3(x - 1)(x + 1)} = \\frac{5x}{3(x + 1)}$.'
        ],
        knowledgeTopic: 'Chia hai phân thức và rút gọn',
        lessonSectionRef: 'Quy tắc chia hai phân thức'
      },
      {
        id: 'toan_b24_q5',
        question: 'Phân thức nghịch đảo của $\\frac{x-1}{x+1}$ là phân thức nào?',
        options: [
          '$\\frac{x-1}{x+1}$',
          '$\\frac{x+1}{x-1}$',
          '$\\frac{x+1}{1-x}$',
          '$\\frac{1-x}{x+1}$'
        ],
        correctIndex: 1,
        explanation: 'Điều kiện xác định: $x \\ne -1,\\ x \\ne 1$. Phân thức nghịch đảo của $\\frac{A}{B}$ (với $A, B \\ne 0$) là $\\frac{B}{A}$. Do đó phân thức nghịch đảo của $\\frac{x-1}{x+1}$ là $\\frac{x+1}{x-1}$.',
        hint: 'Muốn tìm phân thức nghịch đảo của $\\frac{A}{B}$, ta hoán đổi vị trí tử thức và mẫu thức cho nhau.',
        hints: [
          'Phân thức nghịch đảo của phân thức $\\frac{A}{B}$ (với $A, B$ khác đa thức 0) nhận được bằng cách hoán đổi vị trí của tử thức và mẫu thức.',
          'Tử thức của phân thức ban đầu là $(x - 1)$, mẫu thức là $(x + 1)$. Đảo tử thành mẫu và mẫu thành tử.',
          'Phân thức nghịch đảo tương ứng là $\\frac{x+1}{x-1}$.'
        ],
        knowledgeTopic: 'Phân thức nghịch đảo',
        lessonSectionRef: 'Quy tắc chia hai phân thức'
      }
    ]
  },
  ta_u1_b1: {
    id: 'quiz_ta_u1_b1',
    lessonId: 'ta_u1_b1',
    subjectId: 'tienganh',
    title: '5 Câu hỏi tự kiểm tra: Từ vựng Unit 1 - Leisure Time',
    timeLimitSeconds: 180,
    questions: [
      {
        id: 'ta_u1_b1_q1',
        question: 'Từ "leisure" trong tiếng Anh có nghĩa là gì?',
        options: [
          'Thời gian rảnh rỗi, thì giờ thư nhàn',
          'Bài tập về nhà cần làm gấp',
          'Công việc văn phòng bận rộn',
          'Trường học và lớp học'
        ],
        correctIndex: 0,
        explanation: 'Trong tiếng Anh, "leisure" /ˈleɪʒə(r)/ là danh từ có nghĩa là thời gian rảnh rỗi, thì giờ thư nhàn.',
        hint: 'Nhớ lại chủ đề bài học "Leisure Time": thời gian bạn được nghỉ ngơi làm điều mình thích.',
        hints: [
          'Hãy nhớ lại chủ đề của bài học: "Leisure Time" - thời gian chúng ta thư giãn và làm các hoạt động mình yêu thích.',
          'Trong cụm "leisure activities", từ "leisure" chỉ khoảng thời gian rảnh rỗi, không phải làm việc hay học tập.',
          '"Leisure" là danh từ chỉ "thời gian rảnh rỗi, thì giờ thư nhàn".'
        ],
        knowledgeTopic: 'Nghĩa từ vựng: leisure',
        lessonSectionRef: 'Từ vựng Unit 1'
      },
      {
        id: 'ta_u1_b1_q2',
        question: 'Từ tiếng Anh nào sau đây có nghĩa là "nghệ thuật gấp giấy của Nhật Bản"?',
        options: [
          'knitting',
          'origami',
          'cooking',
          'cycling'
        ],
        correctIndex: 1,
        explanation: '"origami" /ˌɒrɪˈɡɑːmi/ là danh từ chỉ môn nghệ thuật gấp giấy truyền thống của Nhật Bản.',
        hint: 'Đây là môn gấp giấy bằng các mảnh giấy vuông nhiều màu sắc thành hình con hạc, hoa, hộp...',
        hints: [
          'Đây là một từ bắt nguồn từ tiếng Nhật, dùng để chỉ môn nghệ thuật gấp các con vật hay đồ vật bằng giấy màu.',
          'Từ này bắt đầu bằng chữ cái "o" và kết thúc bằng chữ "i".',
          'Đáp án chính là "origami" (/ˌɒrɪˈɡɑːmi/).'
        ],
        knowledgeTopic: 'Nghĩa từ vựng: origami',
        lessonSectionRef: 'Từ vựng Unit 1'
      },
      {
        id: 'ta_u1_b1_q3',
        question: 'Điền từ thích hợp vào chỗ trống: "My grandmother taught me how to ______ a warm wool scarf."',
        options: [
          'knit',
          'drive',
          'swim',
          'fly'
        ],
        correctIndex: 0,
        explanation: '"knit" /nɪt/ là động từ có nghĩa là đan len. Cụm "knit a wool scarf" nghĩa là đan một chiếc khăn len.',
        hint: 'Hành động dùng que đan và sợi len để tạo thành khăn ấm.',
        hints: [
          'Đọc kỹ ngữ cảnh: "a warm wool scarf" nghĩa là một chiếc khăn len ấm. Hành động nào làm ra khăn len bằng que đan?',
          'Động từ có nghĩa là "đan len", có phát âm là /nɪt/.',
          'Động từ đó là "knit" (chữ "k" câm, phát âm là /nɪt/).'
        ],
        knowledgeTopic: 'Vận dụng từ vựng: knit',
        lessonSectionRef: 'Từ vựng Unit 1'
      },
      {
        id: 'ta_u1_b1_q4',
        question: 'Tính từ "hooked" trong cụm "be hooked on something" mang nghĩa là gì?',
        options: [
          'Say mê, bị cuốn hút vào một sở thích',
          'Cảm thấy mệt mỏi, chán ngấy',
          'Rất sợ hãi và lo lắng',
          'Bị đau hoặc bị thương'
        ],
        correctIndex: 0,
        explanation: '"hooked" /hʊkt/ trong cụm "be hooked on sth" mang nghĩa là rất say mê, bị cuốn hút vào một sở thích nào đó.',
        hint: 'Nghĩ về cảm giác khi bạn quá thích thú một hoạt động và không muốn rời mắt khỏi nó.',
        hints: [
          'Hãy tưởng tượng như bạn bị "móc" vào một điều thú vị đến mức không thể dừng lại được vì quá say mê.',
          'Cụm "be hooked on" tương đương với "be crazy about" hay "be into" một cách tích cực.',
          '"Hooked on" có nghĩa là rất say mê, thích thú một hoạt động hay sở thích nào đó.'
        ],
        knowledgeTopic: 'Cụm từ: be hooked on',
        lessonSectionRef: 'Từ vựng Unit 1'
      },
      {
        id: 'ta_u1_b1_q5',
        question: 'Động từ "adore" trong tiếng Anh có nghĩa là gì?',
        options: [
          'Rất yêu thích, say mê',
          'Ghét cay ghét đắng',
          'Không quan tâm, thờ ơ',
          'Cảm thấy sợ hãi'
        ],
        correctIndex: 0,
        explanation: '"adore" /əˈdɔː(r)/ là động từ chỉ mức độ yêu thích rất cao, nghĩa là rất yêu mến, mê mẩn, say mê.',
        hint: '"adore" diễn tả mức độ yêu thích cao hơn cả "like".',
        hints: [
          '"Adore" là một động từ chỉ mức độ yêu thích cao hơn cả "like" và "love".',
          'Ví dụ: "I adore hanging out with my friends" - Tôi cực kỳ thích đi chơi với bạn bè.',
          '"Adore" mang nghĩa là rất yêu mến, say mê, cực kỳ thích.'
        ],
        knowledgeTopic: 'Nghĩa từ vựng: adore',
        lessonSectionRef: 'Từ vựng Unit 1'
      }
    ]
  }
};

export const INITIAL_GARDEN_PLANTS: GardenPlant[] = [
  {
    id: 'plant_toan',
    subjectId: 'toan',
    name: 'Cây Tư duy Toán học',
    seedName: 'Hạt mầm Toán học 8',
    stage: 2, // Chồi non
    waterPoints: 40,
    requiredPoints: 100,
    totalHarvests: 1,
  },
  {
    id: 'plant_tienganh',
    subjectId: 'tienganh',
    name: 'Cây Giao tiếp Quốc tế',
    seedName: 'Hạt mầm Tiếng Anh 8',
    stage: 1, // Hạt giống
    waterPoints: 20,
    requiredPoints: 100,
    totalHarvests: 0,
  },
];

export const INITIAL_BADGES: AchievementBadge[] = [
  {
    id: 'badge_first_read',
    title: 'Khởi đầu tự học',
    description: 'Đọc trọn vẹn bài chuẩn bị lớp 8 đầu tiên',
    iconName: 'BookOpen',
    unlocked: true,
    unlockedAt: '2026-10-25'
  },
  {
    id: 'badge_quiz_master',
    title: 'Thực hành chăm chỉ',
    description: 'Hoàn thành các câu hỏi trắc nghiệm của bài học',
    iconName: 'Award',
    unlocked: true,
    unlockedAt: '2026-10-28'
  },
  {
    id: 'badge_green_thumb',
    title: 'Người làm vườn chăm chỉ',
    description: 'Tưới nước chăm sóc cây học tập lên giai đoạn mới',
    iconName: 'Sprout',
    unlocked: true,
    unlockedAt: '2026-10-29'
  },
  {
    id: 'badge_review_hero',
    title: 'Khắc phục điểm sai',
    description: 'Xem giải thích và làm đúng lại câu hỏi từng sai',
    iconName: 'CheckCircle2',
    unlocked: false,
  }
];
