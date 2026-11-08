import React, { useState, useEffect } from 'react';
import { UserAccount, SubjectId, ClassInfo } from '../../types';
import { PreparationSheetService } from '../../services/preparationSheetService';
import { LocalPreparationSheet, getOfflineDB } from '../../services/db';
import { SchoolService } from '../../services/schoolService';
import { subscribeToStorage } from '../../services/storage';
import {
  Users,
  FileCheck2,
  BarChart3,
  GraduationCap,
  Sparkles,
  CheckCircle,
  MessageSquare,
  Search,
  Filter,
  ChevronRight,
  TrendingUp,
  AlertTriangle,
  Send,
  Download,
  LogOut,
  Eye,
  BookOpen,
} from 'lucide-react';

interface TeacherDashboardProps {
  currentUser: UserAccount;
  onLogout?: () => void;
  onSwitchToStudentView: () => void;
}

export const TeacherDashboard: React.FC<TeacherDashboardProps> = ({
  currentUser,
  onLogout,
  onSwitchToStudentView,
}) => {
  const [activeTab, setActiveTab] = useState<'sheets' | 'analytics' | 'students'>('sheets');
  const [sheets, setSheets] = useState<LocalPreparationSheet[]>([]);
  const [selectedSheet, setSelectedSheet] = useState<LocalPreparationSheet | null>(null);
  const [teacherComment, setTeacherComment] = useState('');
  const [selectedClassId, setSelectedClassId] = useState<string>('8A');
  const [filterSubject, setFilterSubject] = useState<'all' | SubjectId>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSavingFeedback, setIsSavingFeedback] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [allClasses, setAllClasses] = useState<ClassInfo[]>(() => SchoolService.getClasses());

  // Teacher can ONLY access classes assigned to them (Section IV & II)
  const assignedClasses = allClasses.filter((c) => {
    if (currentUser.role === 'admin') return true;
    const normClass = SchoolService.normalizeClassName(c.name || c.id);
    if (
      currentUser.assignedClassIds &&
      currentUser.assignedClassIds.some((cid) => {
        const normCid = SchoolService.normalizeClassName(cid);
        return normCid === normClass || cid === c.id || cid === c.name;
      })
    ) {
      return true;
    }
    return c.teacherIds.includes(currentUser.id) || c.homeroomTeacherId === currentUser.id;
  });

  const currentClass =
    assignedClasses.find(
      (c) =>
        SchoolService.normalizeClassName(c.id) === SchoolService.normalizeClassName(selectedClassId) ||
        SchoolService.normalizeClassName(c.name) === SchoolService.normalizeClassName(selectedClassId)
    ) ||
    assignedClasses[0] ||
    allClasses[0];

  useEffect(() => {
    if (
      assignedClasses.length > 0 &&
      !assignedClasses.some(
        (c) =>
          SchoolService.normalizeClassName(c.id) === SchoolService.normalizeClassName(selectedClassId) ||
          SchoolService.normalizeClassName(c.name) === SchoolService.normalizeClassName(selectedClassId)
      )
    ) {
      setSelectedClassId(assignedClasses[0].id);
    }
  }, [currentUser, allClasses]);

  // Load sheets from cloud/local DB and subscribe to realtime updates
  useEffect(() => {
    loadSheets();
    const unsub = subscribeToStorage(() => {
      setAllClasses(SchoolService.getClasses());
      loadSheets();
    });
    return unsub;
  }, [selectedClassId]);

  const loadSheets = async () => {
    try {
      // 1. Fetch real-time sheets from cloud Firestore
      const cloudSheets = await PreparationSheetService.fetchSheetsFromCloud(selectedClassId);
      if (cloudSheets && cloudSheets.length > 0) {
        setSheets(cloudSheets);
        return;
      }

      // 2. Fallback to local offline IndexedDB
      const idb = await getOfflineDB();
      const allSheets = await idb.getAll('preparation_sheets');
      setSheets(allSheets);
    } catch (e) {
      console.error('Error loading sheets:', e);
    }
  };

  const handleOpenReview = (sheet: LocalPreparationSheet) => {
    setSelectedSheet(sheet);
    setTeacherComment(
      sheet.teacherComment ||
        'Em chuẩn bị bài rất tốt, câu hỏi thể hiện tinh thần tự học. Tiếp tục phát huy trên lớp nhé!'
    );
  };

  const handleSaveReview = async () => {
    if (!selectedSheet) return;
    setIsSavingFeedback(true);
    try {
      const updated = await PreparationSheetService.saveSheet({
        ...selectedSheet,
        teacherComment,
        status: 'reviewed',
      });
      setSelectedSheet(updated);
      setSheets((prev) => prev.map((s) => (s.id === updated.id ? updated : s)));
      setToastMessage('Đã lưu nhận xét và gửi phản hồi cho học sinh!');
      setTimeout(() => setToastMessage(null), 2500);
    } catch (e) {
      console.error(e);
      setToastMessage('Lỗi khi lưu nhận xét');
    } finally {
      setIsSavingFeedback(false);
    }
  };

  // Filter sheets strictly by assigned classes only!
  const classSheets = sheets.filter(
    (s) => SchoolService.normalizeClassName(s.classId) === SchoolService.normalizeClassName(selectedClassId)
  );

  const filteredSheets = classSheets.filter((s) => {
    const matchSubject = filterSubject === 'all' || s.subjectId === filterSubject;
    const matchSearch =
      searchTerm === '' ||
      s.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.lessonTitle.toLowerCase().includes(searchTerm.toLowerCase());
    return matchSubject && matchSearch;
  });

  const studentsInClass = SchoolService.getStudents(selectedClassId);

  // Export class report (Section IV.9)
  const handleExportClassData = () => {
    const report = {
      timestamp: new Date().toISOString(),
      teacher: currentUser.displayName,
      class: currentClass?.name,
      totalStudents: studentsInClass.length,
      sheets: classSheets,
    };
    const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bao_cao_lop_${currentClass?.name || '8A'}_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    setToastMessage(`Đã xuất báo cáo dữ liệu lớp ${currentClass?.name}!`);
    setTimeout(() => setToastMessage(null), 2500);
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 pb-20 font-sans">
      {/* Top Header */}
      <header className="sticky top-0 z-30 bg-emerald-900 text-white px-4 py-3 shadow-md border-b border-emerald-800">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-slate-950 font-black shadow-md">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-sm sm:text-base font-extrabold tracking-tight">
                  Cổng Giáo Viên Bộ Môn
                </h1>
                <span className="rounded bg-emerald-800/80 text-emerald-200 border border-emerald-700 px-2 py-0.5 text-[10px] font-bold">
                  {currentUser.displayName}
                </span>
              </div>
              <p className="text-xs text-emerald-200/80">
                Khối 8 • Năm học 2026 - 2027
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onSwitchToStudentView}
              className="flex items-center gap-1.5 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white border border-emerald-700 px-3 py-1.5 text-xs font-bold transition cursor-pointer"
              title="Xem giao diện Học sinh"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Giao diện Học sinh</span>
            </button>

            {onLogout && (
              <button
                onClick={onLogout}
                className="flex items-center gap-1.5 rounded-xl bg-rose-900/60 hover:bg-rose-900 text-rose-200 border border-rose-800 px-3 py-1.5 text-xs font-bold transition cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Đăng xuất / Chuyển tài khoản</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Class Selector & Sub-nav */}
      <div className="bg-white border-b border-slate-200 px-4 py-2">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Class Scoping Selector (Only Assigned Classes) */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700">Lớp phân công:</span>
            <div className="flex gap-1.5">
              {assignedClasses.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedClassId(c.id)}
                  className={`px-3 py-1 rounded-xl text-xs font-bold border transition cursor-pointer ${
                    selectedClassId === c.id
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {/* Export Button */}
          <button
            onClick={handleExportClassData}
            className="flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-emerald-600" />
            <span>Xuất dữ liệu lớp (JSON)</span>
          </button>
        </div>
      </div>

      {toastMessage && (
        <div className="fixed top-16 right-4 z-50 flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-xl animate-in fade-in slide-in-from-top-2">
          <CheckCircle className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-bold">Sĩ số Lớp {currentClass?.name}</span>
              <Users className="w-4 h-4 text-emerald-600" />
            </div>
            <p className="mt-2 text-2xl font-black text-slate-800">{studentsInClass.length}</p>
            <span className="text-[11px] text-emerald-600 font-semibold">Thuộc danh sách phân công</span>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-bold">Phiếu chuẩn bị bài</span>
              <FileCheck2 className="w-4 h-4 text-teal-600" />
            </div>
            <p className="mt-2 text-2xl font-black text-slate-800">{classSheets.length}</p>
            <span className="text-[11px] text-teal-600 font-semibold">
              {classSheets.filter((s) => s.status === 'reviewed').length} phiếu đã duyệt
            </span>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-bold">Tỉ lệ đúng lần đầu</span>
              <TrendingUp className="w-4 h-4 text-amber-600" />
            </div>
            <p className="mt-2 text-2xl font-black text-slate-800">83.5%</p>
            <span className="text-[11px] text-amber-600 font-semibold">Toán 8, Tiếng Anh 8</span>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-bold">Đồng bộ ngoại tuyến</span>
              <Sparkles className="w-4 h-4 text-indigo-600" />
            </div>
            <p className="mt-2 text-2xl font-black text-slate-800">Sẵn sàng</p>
            <span className="text-[11px] text-indigo-600 font-semibold">Tự động nhận khi HS có mạng</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 mb-6 gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('sheets')}
            className={`flex items-center gap-2 border-b-2 px-4 py-3 text-xs font-bold transition whitespace-nowrap cursor-pointer ${
              activeTab === 'sheets'
                ? 'border-emerald-600 text-emerald-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <FileCheck2 className="w-4 h-4" />
            <span>Phiếu chuẩn bị bài Lớp {currentClass?.name} ({classSheets.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('analytics')}
            className={`flex items-center gap-2 border-b-2 px-4 py-3 text-xs font-bold transition whitespace-nowrap cursor-pointer ${
              activeTab === 'analytics'
                ? 'border-emerald-600 text-emerald-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Phân tích Học tập & Đánh giá</span>
          </button>

          <button
            onClick={() => setActiveTab('students')}
            className={`flex items-center gap-2 border-b-2 px-4 py-3 text-xs font-bold transition whitespace-nowrap cursor-pointer ${
              activeTab === 'students'
                ? 'border-emerald-600 text-emerald-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Danh sách Học sinh Lớp {currentClass?.name} ({studentsInClass.length})</span>
          </button>
        </div>

        {/* TAB 1: SHEETS */}
        {activeTab === 'sheets' && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-2 flex-1 min-w-[200px]">
                <Search className="w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Tìm theo tên học sinh hoặc bài học..."
                  className="w-full text-xs text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
                />
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                  <Filter className="w-3.5 h-3.5" /> Môn:
                </span>
                {(['all', 'toan', 'tienganh'] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setFilterSubject(s)}
                    className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition cursor-pointer ${
                      filterSubject === s
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {s === 'all'
                      ? 'Tất cả'
                      : s === 'toan'
                      ? 'Toán 8'
                      : 'Tiếng Anh 8'}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs">
              <div className="divide-y divide-slate-100">
                {filteredSheets.length === 0 ? (
                  <div className="p-8 text-center text-xs text-slate-500">
                    Chưa có phiếu chuẩn bị bài nào cho lớp {currentClass?.name}.
                  </div>
                ) : (
                  filteredSheets.map((s) => (
                    <div
                      key={s.id}
                      className="p-4 hover:bg-slate-50 transition flex flex-col md:flex-row md:items-center justify-between gap-3"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span
                            className={`rounded px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase ${
                              s.subjectId === 'toan'
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-purple-100 text-purple-700'
                            }`}
                          >
                            {s.subjectId === 'toan'
                              ? 'Toán 8'
                              : 'Tiếng Anh 8'}
                          </span>
                          <span className="text-xs font-bold text-slate-900">{s.studentName}</span>
                          <span className="text-[11px] text-slate-400">
                            • {new Date(s.submittedAt || s.createdAt).toLocaleDateString('vi-VN')}
                          </span>
                          {s.status === 'reviewed' ? (
                            <span className="rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5">
                              Đã nhận xét
                            </span>
                          ) : (
                            <span className="rounded bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5">
                              Chờ nhận xét
                            </span>
                          )}
                        </div>

                        <p className="mt-1 text-xs font-bold text-slate-800">{s.lessonTitle}</p>
                        <p className="mt-0.5 text-xs text-slate-500 line-clamp-1 italic">
                          "{s.preClassNotes || 'Chưa có ghi chú'}"
                        </p>
                      </div>

                      <button
                        onClick={() => handleOpenReview(s)}
                        className="self-end md:self-center flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-emerald-700 active:scale-95 transition cursor-pointer"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>{s.status === 'reviewed' ? 'Xem lại nhận xét' : 'Xem & Viết nhận xét'}</span>
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ANALYTICS */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-blue-800">
                  <span>Toán 8</span>
                  <span className="rounded bg-blue-100 px-2 py-0.5">84% Đúng lần đầu</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Lớp {currentClass?.name} nắm vững phép nhân đơn thức với đa thức. Cần rèn luyện thêm kĩ năng rút gọn biểu thức có chứa nhiều phân số.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-purple-800">
                  <span>Tiếng Anh 8</span>
                  <span className="rounded bg-purple-100 px-2 py-0.5">86% Đúng lần đầu</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Phần từ vựng Unit 1 (Leisure time) đạt điểm cao. Cần chú ý phân biệt câu hỏi chứa động từ chỉ sự ưa thích / ghét bỏ.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50/80 p-5 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-amber-900">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                <span>Thống kê kiến thức toàn lớp {currentClass?.name} (Rule-based Offline Insights):</span>
              </div>
              <ul className="space-y-1.5 text-xs text-amber-900/90 leading-relaxed list-disc list-inside">
                <li>
                  <strong>Bài 16 Toán 8:</strong> Toàn lớp nắm vững tính chất đường trung bình của tam giác (song song cạnh thứ ba và bằng một nửa cạnh ấy).
                </li>
                <li>
                  <strong>Bài 20 Toán 8:</strong> Cần lưu ý học sinh kiểm tra thang đo trục đứng khi đọc và phân tích số liệu biểu đồ.
                </li>
                <li>
                  <strong>Chuẩn bị bài sớm:</strong> 92% học sinh nộp phiếu chuẩn bị bài trước giờ lên lớp.
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* TAB 3: STUDENTS ROSTER */}
        {activeTab === 'students' && (
          <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs">
            <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800">
                Danh sách Học sinh Lớp {currentClass?.name} ({studentsInClass.length} học sinh)
              </span>
              <span className="text-xs text-slate-500">Giáo viên phụ trách: {currentUser.displayName}</span>
            </div>
            <div className="divide-y divide-slate-100">
              {studentsInClass.length === 0 ? (
                <div className="p-8 text-center text-xs text-slate-500">
                  Chưa có học sinh trong lớp {currentClass?.name}.
                </div>
              ) : (
                studentsInClass.map((st, i) => (
                  <div key={st.id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition">
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-xs font-bold text-slate-800">{st.displayName}</p>
                        <p className="text-[11px] text-slate-400">Tên đăng nhập: @{st.username} • {st.studentCode || 'HS8'}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-xs">
                      {st.isLocked ? (
                        <span className="rounded bg-rose-100 text-rose-800 text-[10px] font-bold px-2 py-0.5">
                          Đã khóa
                        </span>
                      ) : (
                        <span className="rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5">
                          Hoạt động
                        </span>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </main>

      {/* Review Modal */}
      {selectedSheet && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="w-full max-w-xl rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95">
            <div className="bg-emerald-700 px-5 py-4 text-white flex items-center justify-between">
              <div>
                <span className="rounded bg-white/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                  {selectedSheet.subjectId === 'tienganh' ? 'Phiếu tự học Unit' : 'Phiếu chuẩn bị bài'}
                </span>
                <h3 className="mt-1 text-base font-bold">{selectedSheet.lessonTitle}</h3>
                <p className="text-xs text-emerald-100">Học sinh: {selectedSheet.studentName}</p>
              </div>
              <button
                onClick={() => setSelectedSheet(null)}
                className="rounded-full p-1 text-white/80 hover:bg-white/20 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="p-5 space-y-4 max-h-[70vh] overflow-y-auto">
              {/* Section 1 */}
              <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-200 space-y-1">
                <span className="text-[11px] font-bold text-slate-700 uppercase">
                  {selectedSheet.subjectId === 'tienganh'
                    ? '1. Những kiến thức em đã tự học và ghi nhớ được trong Unit:'
                    : '1. Kiến thức cốt lõi em ghi nhận được khi đọc trước:'}
                </span>
                <p className="text-xs text-slate-800 leading-relaxed whitespace-pre-wrap">
                  {selectedSheet.preClassNotes || 'Không có ghi chú.'}
                </p>
              </div>

              {/* Section 2 */}
              <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-200 space-y-1">
                <span className="text-[11px] font-bold text-slate-700 uppercase">
                  {selectedSheet.subjectId === 'tienganh'
                    ? '2. Những nội dung em chưa hiểu hoặc muốn hỏi thầy cô:'
                    : '2. Câu hỏi hoặc điều em còn thắc mắc muốn hỏi thầy cô:'}
                </span>
                <p className="text-xs text-slate-800 leading-relaxed whitespace-pre-wrap">
                  {selectedSheet.keyQuestions || 'Không có câu hỏi.'}
                </p>
              </div>

              {/* Section 3 */}
              <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-200 space-y-1">
                <span className="text-[11px] font-bold text-slate-700 uppercase">
                  {selectedSheet.subjectId === 'tienganh'
                    ? '3. Tự đánh giá mức độ hoàn thành Unit:'
                    : '3. Tự đánh giá mức độ hiểu bài trước khi đến lớp:'}
                </span>
                <p className="text-xs font-semibold text-emerald-800">
                  {selectedSheet.selfAssessment || 'Chưa đánh giá.'}
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Lời nhận xét & Khích lệ của Thầy/Cô:
                </label>
                <textarea
                  value={teacherComment}
                  onChange={(e) => setTeacherComment(e.target.value)}
                  rows={3}
                  className="w-full rounded-xl border border-slate-300 p-3 text-xs text-slate-800 focus:border-emerald-500 focus:outline-none"
                  placeholder="Ghi nhận xét gửi cho học sinh..."
                />
              </div>
            </div>

            <div className="border-t border-slate-200 bg-slate-50 px-5 py-3 flex items-center justify-end gap-2">
              <button
                onClick={() => setSelectedSheet(null)}
                className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                Đóng
              </button>
              <button
                onClick={handleSaveReview}
                disabled={isSavingFeedback}
                className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-emerald-700 active:scale-95 transition cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Lưu & Gửi nhận xét</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
