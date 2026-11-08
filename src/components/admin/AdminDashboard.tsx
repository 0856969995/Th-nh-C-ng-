import React, { useState, useEffect, useRef } from 'react';
import * as XLSX from 'xlsx';
import { UserAccount, SubjectId, ClassInfo, School } from '../../types';
import { SchoolService } from '../../services/schoolService';
import { StorageService, subscribeToStorage } from '../../services/storage';
import {
  Building2,
  Users,
  GraduationCap,
  BookOpen,
  Database,
  BarChart3,
  Plus,
  Lock,
  Unlock,
  Download,
  Upload,
  CheckCircle2,
  AlertTriangle,
  X,
  Search,
  LogOut,
  KeyRound,
  Pencil,
  Trash2,
  UserX,
  FileText,
  FileSpreadsheet,
  RefreshCw,
  Check,
} from 'lucide-react';

interface AdminDashboardProps {
  currentUser: UserAccount;
  onLogout: () => void;
  onSwitchToStudentView?: () => void;
  onSwitchToTeacherView?: () => void;
}

interface ExcelParsedRow {
  rowNumber: number;
  fullName: string;
  className: string;
  pin: string;
  isValid: boolean;
  errorReason?: string;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  currentUser,
  onLogout,
  onSwitchToStudentView,
  onSwitchToTeacherView,
}) => {
  // Chỉ giữ đúng 4 tab theo thứ tự: Tổng quan & Thống kê, Giáo viên, Lớp học, Dữ liệu & Sao lưu
  const [activeTab, setActiveTab] = useState<'overview' | 'teachers' | 'classes' | 'data'>('overview');
  const [school, setSchool] = useState<School>(() => SchoolService.getSchoolInfo());
  const [classes, setClasses] = useState<ClassInfo[]>(() => SchoolService.getClasses());
  const [teachers, setTeachers] = useState<UserAccount[]>(() => SchoolService.getTeachers());
  const [students, setStudents] = useState<UserAccount[]>(() => SchoolService.getStudents());
  const [selectedClassFilter, setSelectedClassFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((cur) => (cur === msg ? null : cur));
    }, 3500);
  };
  const [showAddClassModal, setShowAddClassModal] = useState(false);
  const [showAddTeacherModal, setShowAddTeacherModal] = useState(false);
  const [showAddStudentModal, setShowAddStudentModal] = useState(false);
  const [confirmActionModal, setConfirmActionModal] = useState<{
    title: string;
    message: string;
    onConfirm: () => void;
  } | null>(null);

  // Add Class Form State
  const [newClassName, setNewClassName] = useState('');
  const [newClassHomeroomId, setNewClassHomeroomId] = useState('');
  const [newClassMathTeacherId, setNewClassMathTeacherId] = useState('');
  const [newClassEnglishTeacherId, setNewClassEnglishTeacherId] = useState('');

  // Edit Class Modal State
  const [editingClass, setEditingClass] = useState<ClassInfo | null>(null);
  const [editClassName, setEditClassName] = useState('');
  const [editClassHomeroomId, setEditClassHomeroomId] = useState('');
  const [editClassMathTeacherId, setEditClassMathTeacherId] = useState('');
  const [editClassEnglishTeacherId, setEditClassEnglishTeacherId] = useState('');

  // Edit Teacher Modal State
  const [editingTeacher, setEditingTeacher] = useState<UserAccount | null>(null);
  const [editTFullName, setEditTFullName] = useState('');
  const [editTEmail, setEditTEmail] = useState('');
  const [editTSubjects, setEditTSubjects] = useState<SubjectId[]>(['toan']);
  const [editTClasses, setEditTClasses] = useState<string[]>(['class_8a']);
  const [editTPinOption, setEditTPinOption] = useState<'keep' | 'default' | 'custom'>('keep');
  const [editTCustomPin, setEditTCustomPin] = useState('');
  const [editTIsLocked, setEditTIsLocked] = useState(false);

  // Edit Student Modal State
  const [editingStudent, setEditingStudent] = useState<UserAccount | null>(null);
  const [editSFullName, setEditSFullName] = useState('');
  const [editSClassId, setEditSClassId] = useState('8A');
  const [editSStudentCode, setEditSStudentCode] = useState('');
  const [editSEmail, setEditSEmail] = useState('');
  const [editSPinOption, setEditSPinOption] = useState<'keep' | 'default' | 'custom'>('keep');
  const [editSCustomPin, setEditSCustomPin] = useState('');
  const [editSIsLocked, setEditSIsLocked] = useState(false);

  // Excel Import States (Dùng cho tab Lớp học)
  const [excelPreviewData, setExcelPreviewData] = useState<{
    filename: string;
    totalRows: number;
    validRows: ExcelParsedRow[];
    invalidRows: ExcelParsedRow[];
  } | null>(null);
  const [isImportingExcel, setIsImportingExcel] = useState(false);
  const excelInputRef = useRef<HTMLInputElement>(null);

  // JSON Restore & Integrity States
  const [jsonRestorePreview, setJsonRestorePreview] = useState<{
    schoolName: string;
    classesCount: number;
    teachersCount: number;
    studentsCount: number;
    timestamp: string;
    rawJson: string;
  } | null>(null);
  const jsonInputRef = useRef<HTMLInputElement>(null);
  const [integrityReport, setIntegrityReport] = useState<{
    checkedAt: string;
    isValid: boolean;
    issues: string[];
    totalChecked: number;
  } | null>(null);

  // Form states for adding teacher
  const [tFullName, setTFullName] = useState('');
  const [tUsername, setTUsername] = useState('');
  const [tEmail, setTEmail] = useState('');
  const [tSubjects, setTSubjects] = useState<SubjectId[]>(['toan']);
  const [tClasses, setTClasses] = useState<string[]>(['class_8a']);

  // Form states for adding student
  const [sFullName, setSFullName] = useState('');
  const [sSecondaryId, setSSecondaryId] = useState('');
  const [sClassId, setSClassId] = useState('8A');
  const [sStudentCode, setSStudentCode] = useState('');
  const [sEmail, setSEmail] = useState('');

  // Stats state
  const [stats, setStats] = useState<any>(null);

  const refreshData = () => {
    setSchool(SchoolService.getSchoolInfo());
    setClasses(SchoolService.getClasses());
    setTeachers(SchoolService.getTeachers());
    setStudents(SchoolService.getStudents());
    SchoolService.getSchoolStatistics().then(setStats);
  };

  // Class Management Handlers
  const handleCreateClass = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = newClassName.trim().toUpperCase();
    if (!cleanName) {
      alert('Vui lòng nhập tên lớp học (ví dụ: 8D)');
      return;
    }
    const subjectAssignments: { subjectId: SubjectId; teacherId: string; teacherName: string }[] = [];
    if (newClassMathTeacherId) {
      const t = teachers.find((teach) => teach.id === newClassMathTeacherId);
      if (t) subjectAssignments.push({ subjectId: 'toan', teacherId: t.id, teacherName: t.displayName });
    }
    if (newClassEnglishTeacherId) {
      const t = teachers.find((teach) => teach.id === newClassEnglishTeacherId);
      if (t) subjectAssignments.push({ subjectId: 'tienganh', teacherId: t.id, teacherName: t.displayName });
    }
    const hr = teachers.find((teach) => teach.id === newClassHomeroomId);

    const created = SchoolService.createClass({
      name: cleanName,
      grade: 8,
      homeroomTeacherId: hr?.id,
      homeroomTeacherName: hr?.displayName,
      subjectAssignments,
    });

    showToast(`Đã thêm lớp mới: ${created.name}`);
    setShowAddClassModal(false);
    setNewClassName('');
    setNewClassHomeroomId('');
    setNewClassMathTeacherId('');
    setNewClassEnglishTeacherId('');
    refreshData();
  };

  const handleOpenEditClass = (cls: ClassInfo) => {
    setEditingClass(cls);
    setEditClassName(cls.name);
    setEditClassHomeroomId(cls.homeroomTeacherId || '');
    const math = cls.subjectAssignments?.find((s) => s.subjectId === 'toan');
    const eng = cls.subjectAssignments?.find((s) => s.subjectId === 'tienganh');
    setEditClassMathTeacherId(math?.teacherId || '');
    setEditClassEnglishTeacherId(eng?.teacherId || '');
  };

  const handleSaveClassEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingClass) return;
    const cleanName = editClassName.trim().toUpperCase();
    if (!cleanName) {
      alert('Vui lòng nhập tên lớp');
      return;
    }
    const hr = teachers.find((teach) => teach.id === editClassHomeroomId);
    const subjectAssignments: { subjectId: SubjectId; teacherId: string; teacherName: string }[] = [];
    if (editClassMathTeacherId) {
      const t = teachers.find((teach) => teach.id === editClassMathTeacherId);
      if (t) subjectAssignments.push({ subjectId: 'toan', teacherId: t.id, teacherName: t.displayName });
    }
    if (editClassEnglishTeacherId) {
      const t = teachers.find((teach) => teach.id === editClassEnglishTeacherId);
      if (t) subjectAssignments.push({ subjectId: 'tienganh', teacherId: t.id, teacherName: t.displayName });
    }

    const teacherIds: string[] = [];
    if (hr) teacherIds.push(hr.id);
    if (editClassMathTeacherId && !teacherIds.includes(editClassMathTeacherId)) teacherIds.push(editClassMathTeacherId);
    if (editClassEnglishTeacherId && !teacherIds.includes(editClassEnglishTeacherId)) teacherIds.push(editClassEnglishTeacherId);

    SchoolService.updateClass(editingClass.id, {
      name: cleanName,
      homeroomTeacherId: hr?.id || undefined,
      homeroomTeacherName: hr?.displayName || undefined,
      teacherIds,
      subjectAssignments,
    });

    showToast(`Đã lưu thay đổi lớp: ${cleanName}`);
    setEditingClass(null);
    refreshData();
  };

  const handleDeleteClass = (cls: ClassInfo) => {
    setConfirmActionModal({
      title: `Xác nhận xóa lớp ${cls.name}`,
      message: `Bạn có chắc chắn muốn xóa lớp "${cls.name}"? Toàn bộ lịch sử điểm số, kết quả bài làm và phiếu chuẩn bị bài của học sinh sẽ được BẢO LƯU 100% trên hệ thống.`,
      onConfirm: () => {
        SchoolService.deleteClass(cls.id);
        showToast(`Đã xóa lớp: ${cls.name}`);
        setEditingClass(null);
        refreshData();
        setConfirmActionModal(null);
      },
    });
  };

  // Handle Remove All Students From Class (Mục III: "XÓA TOÀN BỘ HỌC SINH CỦA LỚP")
  const handleRemoveAllStudentsFromClass = (className: string) => {
    // Chỉ thực hiện nếu tài khoản hiện tại có quyền quản trị viên hợp lệ
    if (currentUser.role !== 'admin') {
      alert('Chỉ tài khoản Quản trị viên mới có quyền thực hiện thao tác này.');
      return;
    }

    const norm = SchoolService.normalizeClassName(className);
    const count = students.filter(
      (s) => SchoolService.normalizeClassName(s.className || s.classId) === norm
    ).length;

    if (count === 0) {
      alert(`Lớp ${norm} hiện chưa có học sinh nào trong danh sách.`);
      return;
    }

    setConfirmActionModal({
      title: `Xác nhận xóa toàn bộ học sinh lớp ${norm}`,
      message: `Bạn đang chuẩn bị xóa toàn bộ học sinh của lớp "${norm}":\n\n• Tên lớp: Lớp ${norm}\n• Số lượng học sinh bị xóa khỏi danh sách lớp: ${count} học sinh\n\nCẢNH BÁO: Thao tác này sẽ gỡ bỏ toàn bộ học sinh khỏi danh sách lớp ${norm} trên hệ thống và Firestore. Thao tác không thể tự động hoàn tác.\n\nBẢO LƯU DỮ LIỆU: Toàn bộ tài khoản Firebase Authentication, hồ sơ học sinh, lịch sử làm bài, điểm số, phiếu chuẩn bị bài và số sao thưởng/giọt nước của các em ĐƯỢC BẢO LƯU 100% để có thể phân lớp lại khi cần.\n\nBạn có chắc chắn muốn thực hiện?`,
      onConfirm: () => {
        const res = SchoolService.removeAllStudentsFromClass(norm);
        if (res.success) {
          showToast(`Đã xóa toàn bộ ${res.count} học sinh khỏi lớp ${norm}. Dữ liệu học tập được bảo lưu an toàn.`);
          refreshData();
        } else {
          alert(res.error || 'Có lỗi xảy ra khi thực hiện.');
        }
        setConfirmActionModal(null);
      },
    });
  };

  // Handle Add Teacher (Mục IV & VI)
  const handleCreateTeacher = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await SchoolService.createTeacher({
      fullName: tFullName,
      username: tUsername,
      pin: '123456',
      subjects: tSubjects,
      assignedClassIds: tClasses,
      email: tEmail.trim() || undefined,
    });
    if (res.error) {
      alert(res.error);
    } else {
      showToast(`Đã tạo tài khoản giáo viên: ${tFullName}`);
      setShowAddTeacherModal(false);
      setTFullName('');
      setTUsername('');
      setTEmail('');
      refreshData();
    }
  };

  // Handle Add Student (Mục III & VI - Họ tên, Lớp học)
  const handleCreateStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await SchoolService.createStudent({
      fullName: sFullName,
      classId: sClassId,
      secondaryIdentifier: sSecondaryId.trim() || undefined,
      pin: '123456',
      studentCode: sStudentCode.trim() || undefined,
      email: sEmail.trim() || undefined,
    });
    if (res.error) {
      alert(res.error);
    } else {
      showToast(`Đã thêm học sinh: ${sFullName}`);
      setShowAddStudentModal(false);
      setSFullName('');
      setSSecondaryId('');
      setSStudentCode('');
      setSEmail('');
      refreshData();
    }
  };

  // ==================== EXCEL IMPORT & EXPORT HANDLERS ====================
  const handleDownloadStudentExcelTemplate = () => {
    const wsData = [
      ['Họ và tên', 'Lớp', 'Mã PIN'],
      ['Nguyễn Văn An', '8A', '123456'],
      ['Trần Thị Bình', '8B', '123456'],
      ['Lê Hoàng Cường', '8C', '123456'],
    ];
    const ws = XLSX.utils.aoa_to_sheet(wsData);
    ws['!cols'] = [{ wch: 25 }, { wch: 10 }, { wch: 15 }];
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Mau_Nhap_Hoc_Sinh');
    XLSX.writeFile(wb, 'mau_nhap_danh_sach_hoc_sinh.xlsx');
    showToast('Đã tải xuống tệp Excel mẫu!');
  };

  const handleExcelFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const data = new Uint8Array(evt.target?.result as ArrayBuffer);
        const wb = XLSX.read(data, { type: 'array' });
        const firstSheetName = wb.SheetNames[0];
        const worksheet = wb.Sheets[firstSheetName];
        const rows: any[][] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        if (!rows || rows.length < 2) {
          alert('Tệp Excel không có dữ liệu học sinh (cần ít nhất 1 dòng tiêu đề và 1 dòng dữ liệu).');
          return;
        }

        // Detect column indices from header row
        const headerRow = (rows[0] || []).map((h) => String(h || '').trim().toLowerCase());
        let nameIdx = headerRow.findIndex((h) => h.includes('tên') || h.includes('name') || h.includes('họ'));
        let classIdx = headerRow.findIndex((h) => h.includes('lớp') || h.includes('class'));
        let pinIdx = headerRow.findIndex((h) => h.includes('pin') || h.includes('mã'));

        if (nameIdx === -1) nameIdx = 0;
        if (classIdx === -1) classIdx = 1;
        if (pinIdx === -1) pinIdx = 2;

        const currentStudents = SchoolService.getStudents();
        const validRows: ExcelParsedRow[] = [];
        const invalidRows: ExcelParsedRow[] = [];
        const seenInFile = new Set<string>();

        for (let i = 1; i < rows.length; i++) {
          const row = rows[i];
          if (!row || row.length === 0 || row.every((c) => c === undefined || c === null || String(c).trim() === '')) {
            continue; // Bỏ qua dòng trống
          }

          const rawName = String(row[nameIdx] || '').trim();
          const rawClass = String(row[classIdx] || '').trim();
          let rawPin = String(row[pinIdx] !== undefined && row[pinIdx] !== null ? row[pinIdx] : '').trim();
          if (!rawPin) rawPin = '123456';

          // 1. Kiểm tra Họ và tên
          if (!rawName) {
            invalidRows.push({
              rowNumber: i + 1,
              fullName: '(Để trống)',
              className: rawClass,
              pin: rawPin,
              isValid: false,
              errorReason: 'Thiếu họ và tên học sinh',
            });
            continue;
          }

          // 2. Kiểm tra Lớp học (hỗ trợ động mọi lớp trong trường)
          const normClass = SchoolService.normalizeClassName(rawClass);
          const isRecognized = classes.some((c) => SchoolService.normalizeClassName(c.name || c.id) === normClass) || /^8[A-Z]$/.test(normClass);

          if (!rawClass || !isRecognized) {
            invalidRows.push({
              rowNumber: i + 1,
              fullName: rawName,
              className: rawClass || '(Trống)',
              pin: rawPin,
              isValid: false,
              errorReason: `Lớp '${rawClass}' không tồn tại trong danh sách lớp học của trường`,
            });
            continue;
          }

          // 3. Kiểm tra Mã PIN
          if (!/^\d{6}$/.test(rawPin)) {
            invalidRows.push({
              rowNumber: i + 1,
              fullName: rawName,
              className: normClass,
              pin: rawPin,
              isValid: false,
              errorReason: `Mã PIN '${rawPin}' không hợp lệ (phải gồm đúng 6 chữ số)`,
            });
            continue;
          }

          // 4. Kiểm tra trùng lặp trong chính tệp Excel
          const fileKey = `${rawName.toLowerCase()}_${normClass}`;
          if (seenInFile.has(fileKey)) {
            invalidRows.push({
              rowNumber: i + 1,
              fullName: rawName,
              className: normClass,
              pin: rawPin,
              isValid: false,
              errorReason: `Trùng lặp học sinh '${rawName}' cùng lớp ${normClass} trong tệp tải lên`,
            });
            continue;
          }
          seenInFile.add(fileKey);

          // 5. Kiểm tra trùng lặp với học sinh đã có trong hệ thống (Không tự động ghi đè)
          const alreadyExists = currentStudents.some(
            (s) =>
              s.displayName.trim().toLowerCase() === rawName.toLowerCase() &&
              SchoolService.normalizeClassName(s.className || s.classId) === normClass
          );

          if (alreadyExists) {
            invalidRows.push({
              rowNumber: i + 1,
              fullName: rawName,
              className: normClass,
              pin: rawPin,
              isValid: false,
              errorReason: `Học sinh '${rawName}' đã có trong lớp ${normClass} (không ghi đè)`,
            });
            continue;
          }

          validRows.push({
            rowNumber: i + 1,
            fullName: rawName,
            className: normClass,
            pin: rawPin,
            isValid: true,
          });
        }

        setExcelPreviewData({
          filename: file.name,
          totalRows: validRows.length + invalidRows.length,
          validRows,
          invalidRows,
        });
      } catch (err) {
        alert('Không thể đọc tệp Excel. Vui lòng kiểm tra định dạng tệp .xlsx hoặc .xls.');
      }
    };
    reader.readAsArrayBuffer(file);
    e.target.value = '';
  };

  const handleConfirmImportExcel = async () => {
    if (!excelPreviewData || excelPreviewData.validRows.length === 0) return;
    setIsImportingExcel(true);

    let successCount = 0;
    for (const item of excelPreviewData.validRows) {
      const res = await SchoolService.createStudent({
        fullName: item.fullName,
        classId: item.className,
        pin: item.pin,
      });
      if (!res.error) {
        successCount++;
      }
    }

    setIsImportingExcel(false);
    setExcelPreviewData(null);
    showToast(`Đã thêm mới thành công ${successCount} học sinh vào hệ thống!`);
    refreshData();
  };

  // ==================== JSON BACKUP & RESTORE HANDLERS ====================
  const handleExportJsonBackup = async () => {
    try {
      const backup = await SchoolService.exportFullSchoolBackup();
      const blob = new Blob([backup], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `hoc_vui_backup_${school.code}_${new Date().toISOString().split('T')[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
      showToast('Xuất bản sao lưu JSON hệ thống thành công!');
    } catch {
      alert('Xuất bản sao lưu thất bại. Vui lòng thử lại.');
    }
  };

  const handleSelectJsonForRestore = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const content = evt.target?.result as string;
        const data = JSON.parse(content);
        if (!data.school || !data.classes || !data.accounts || !Array.isArray(data.accounts)) {
          alert('Tệp sao lưu không hợp lệ. Bản sao lưu cần có cấu trúc: school, classes, accounts.');
          return;
        }

        const teachersInFile = data.accounts.filter((a: any) => a.role === 'teacher').length;
        const studentsInFile = data.accounts.filter(
          (a: any) => a.role === 'student' || (!a.role && !a.username?.includes('giaovien') && !a.username?.includes('quantri'))
        ).length;

        setJsonRestorePreview({
          schoolName: data.school.name || 'HỌC VUI MỖI NGÀY',
          classesCount: Array.isArray(data.classes) ? data.classes.length : 0,
          teachersCount: teachersInFile,
          studentsCount: studentsInFile,
          timestamp: data.timestamp || new Date().toISOString(),
          rawJson: content,
        });
      } catch {
        alert('Tệp đã chọn không đúng định dạng JSON hợp lệ.');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const handleConfirmJsonRestore = async () => {
    if (!jsonRestorePreview) return;
    const res = await SchoolService.importSchoolBackup(jsonRestorePreview.rawJson);
    if (res.success) {
      showToast('Khôi phục dữ liệu từ tệp sao lưu JSON thành công!');
      setJsonRestorePreview(null);
      refreshData();
    } else {
      alert(res.message);
    }
  };

  const handleRunIntegrityCheck = () => {
    const res = SchoolService.verifyDataIntegrity();
    const allAccounts = StorageService.getAccountsList();
    setIntegrityReport({
      checkedAt: new Date().toLocaleTimeString('vi-VN'),
      isValid: res.isValid,
      issues: res.issues,
      totalChecked: allAccounts.length,
    });
  };

  // Handle Lock / Unlock
  const handleToggleLock = (user: UserAccount) => {
    const actionLabel = user.isLocked ? 'mở khóa' : 'khóa';
    setConfirmActionModal({
      title: `Xác nhận ${actionLabel} tài khoản`,
      message: `Bạn có chắc chắn muốn ${actionLabel} tài khoản "${user.displayName}" (${user.username})?`,
      onConfirm: () => {
        if (user.role === 'teacher') {
          SchoolService.toggleTeacherLock(user.id);
        } else {
          SchoolService.toggleStudentLock(user.id);
        }
        showToast(`Đã ${actionLabel} tài khoản thành công`);
        refreshData();
        setConfirmActionModal(null);
      },
    });
  };

  // Helpers for formatting
  const stripTeacherHonorific = (name: string): string => {
    return (name || '').replace(/^(Thầy|Cô)\s+/i, '').trim();
  };

  const formatTeacherSubjects = (subjList?: SubjectId[]): string => {
    if (!subjList || subjList.length === 0) return 'Chưa phân công';
    return subjList
      .map((s) => (s === 'toan' ? 'Toán 8' : 'Tiếng Anh 8'))
      .join(', ');
  };

  const formatTeacherClasses = (assignedClassIds?: string[]): string => {
    if (!assignedClassIds || assignedClassIds.length === 0) return 'Chưa phân công';
    return assignedClassIds
      .map((cid) => {
        const cls = classes.find((c) => c.id === cid || c.name.toLowerCase() === cid.toLowerCase());
        return cls ? cls.name : SchoolService.normalizeClassName(cid);
      })
      .join(', ');
  };

  // Open Edit Teacher Modal
  const handleOpenEditTeacher = (teacher: UserAccount) => {
    setEditingTeacher(teacher);
    setEditTFullName(stripTeacherHonorific(teacher.displayName));
    setEditTEmail(teacher.email || '');
    setEditTSubjects(teacher.subjects && teacher.subjects.length > 0 ? [...teacher.subjects] : ['toan']);
    setEditTClasses(
      teacher.assignedClassIds && teacher.assignedClassIds.length > 0
        ? teacher.assignedClassIds.map((cid) => {
            const found = classes.find((c) => c.id === cid || c.name.toLowerCase() === cid.toLowerCase());
            return found ? found.id : cid;
          })
        : ['class_8a']
    );
    setEditTPinOption('keep');
    setEditTCustomPin('');
    setEditTIsLocked(!!teacher.isLocked);
  };

  // Save Teacher Changes
  const handleSaveTeacherEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingTeacher) return;
    const cleanName = editTFullName.trim();
    if (!cleanName) {
      alert('Vui lòng nhập họ và tên giáo viên');
      return;
    }
    if (editTPinOption === 'custom') {
      if (!/^\d{6}$/.test(editTCustomPin)) {
        alert('Mã PIN mới phải gồm đúng 6 chữ số');
        return;
      }
    }

    // 1. Update teacher info in SchoolService
    SchoolService.updateTeacher(editingTeacher.id, {
      displayName: cleanName,
      email: editTEmail.trim() || undefined,
      subjects: editTSubjects,
      assignedClassIds: editTClasses,
      isLocked: editTIsLocked,
    });

    // 2. Process PIN option if changed
    if (editTPinOption === 'default') {
      await SchoolService.resetUserPinToDefault(editingTeacher.id);
    } else if (editTPinOption === 'custom') {
      await SchoolService.updateCustomUserPin(editingTeacher.id, editTCustomPin);
    }

    showToast(`Đã lưu thay đổi giáo viên: ${cleanName}`);
    setEditingTeacher(null);
    refreshData();
  };

  // Delete Teacher
  const handleDeleteTeacher = (teacher: UserAccount) => {
    setConfirmActionModal({
      title: 'Xóa tài khoản giáo viên',
      message: `Bạn có chắc chắn muốn xóa tài khoản giáo viên "${stripTeacherHonorific(teacher.displayName)}"? Thao tác này sẽ gỡ bỏ giáo viên khỏi các lớp phụ trách. Toàn bộ dữ liệu điểm số, bài đọc và kết quả học tập của học sinh sẽ ĐƯỢC BẢO LƯU NGUYÊN VẸN 100%.`,
      onConfirm: () => {
        const res = SchoolService.deleteUser(teacher.id);
        if (res.success) {
          showToast(`Đã xóa giáo viên: ${stripTeacherHonorific(teacher.displayName)}`);
          setEditingTeacher(null);
          refreshData();
        } else {
          alert(res.error || 'Có lỗi xảy ra khi xóa.');
        }
        setConfirmActionModal(null);
      },
    });
  };

  // Open Edit Student Modal
  const handleOpenEditStudent = (student: UserAccount) => {
    setEditingStudent(student);
    setEditSFullName(student.displayName);
    const normClass = SchoolService.normalizeClassName(student.className || student.classId);
    setEditSClassId(normClass);
    setEditSStudentCode(student.studentCode || '');
    setEditSEmail(student.email || '');
    setEditSPinOption('keep');
    setEditSCustomPin('');
    setEditSIsLocked(!!student.isLocked);
  };

  // Save Student Changes
  const handleSaveStudentEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingStudent) return;
    const cleanName = editSFullName.trim();
    if (!cleanName) {
      alert('Vui lòng nhập họ và tên học sinh');
      return;
    }
    if (editSPinOption === 'custom') {
      if (!/^\d{6}$/.test(editSCustomPin)) {
        alert('Mã PIN mới phải gồm đúng 6 chữ số');
        return;
      }
    }

    const normClass = SchoolService.normalizeClassName(editSClassId);

    // 1. Update student info (name & class with full preservation)
    SchoolService.updateStudentInfo(editingStudent.id, {
      fullName: cleanName,
      classId: normClass,
      studentCode: editSStudentCode.trim() || undefined,
      email: editSEmail.trim() || undefined,
    });

    // 2. Lock state
    if (editingStudent.isLocked !== editSIsLocked) {
      SchoolService.toggleStudentLock(editingStudent.id);
    }

    // 3. Process PIN option
    if (editSPinOption === 'default') {
      await SchoolService.resetUserPinToDefault(editingStudent.id);
    } else if (editSPinOption === 'custom') {
      await SchoolService.updateCustomUserPin(editingStudent.id, editSCustomPin);
    }

    showToast(`Đã lưu thay đổi học sinh: ${cleanName}`);
    setEditingStudent(null);
    refreshData();
  };

  // Delete Student
  const handleDeleteStudent = (student: UserAccount) => {
    setConfirmActionModal({
      title: 'Xóa tài khoản học sinh',
      message: `Bạn có chắc chắn muốn xóa học sinh "${student.displayName}"? Dữ liệu tiến độ học tập và tài khoản sẽ bị xóa khỏi hệ thống. Thao tác này không thể hoàn tác.`,
      onConfirm: () => {
        const res = SchoolService.deleteUser(student.id);
        if (res.success) {
          // Immediately update local students list state so UI removes the row instantly
          setStudents((prev) => prev.filter((s) => s.id !== student.id));
          setEditingStudent(null);
          showToast(`Đã xóa học sinh: ${student.displayName}`);
          refreshData();
        } else {
          alert(res.error || 'Có lỗi xảy ra khi xóa.');
        }
        setConfirmActionModal(null);
      },
    });
  };

  // Filtered students for class view
  const filteredStudents = students.filter((s) => {
    const studentClass = SchoolService.normalizeClassName(s.className || s.classId);
    const matchClass = selectedClassFilter === 'all' || studentClass === selectedClassFilter;
    const matchSearch =
      searchTerm === '' ||
      s.displayName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchClass && matchSearch;
  });

  const count8A = students.filter((s) => SchoolService.normalizeClassName(s.className || s.classId) === '8A').length;
  const count8B = students.filter((s) => SchoolService.normalizeClassName(s.className || s.classId) === '8B').length;
  const count8C = students.filter((s) => SchoolService.normalizeClassName(s.className || s.classId) === '8C').length;

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 pb-20 font-sans">
      {/* Top Navbar */}
      <header className="sticky top-0 z-30 bg-slate-900 text-white px-4 py-3 shadow-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-slate-950 font-black shadow-md shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-sm sm:text-base font-extrabold tracking-tight">
                Quản Trị Viên Hệ Thống
              </h1>
              <p className="text-xs text-slate-400">
                HỌC VUI MỖI NGÀY
              </p>
            </div>
          </div>

          <div>
            <button
              onClick={onLogout}
              className="flex items-center gap-1.5 rounded-xl bg-rose-900/60 hover:bg-rose-900 text-rose-200 border border-rose-800 px-3.5 py-1.5 sm:py-2 text-xs font-bold transition cursor-pointer"
              title="Đăng xuất khỏi hệ thống"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Đăng xuất</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Navigation Tabs: Đúng 4 tab theo thứ tự yêu cầu */}
      <div className="bg-white border-b border-slate-200 px-4 sticky top-[61px] z-20 shadow-2xs">
        <div className="max-w-6xl mx-auto flex gap-1.5 sm:gap-2 overflow-x-auto py-2.5 no-scrollbar">
          {[
            { id: 'overview', label: 'Tổng quan & Thống kê', icon: BarChart3 },
            { id: 'teachers', label: `Giáo viên (${teachers.length})`, icon: GraduationCap },
            { id: 'classes', label: `Lớp học (${classes.length})`, icon: BookOpen },
            { id: 'data', label: 'Dữ liệu & Sao lưu', icon: Database },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-1.5 sm:gap-2 rounded-xl px-3 sm:px-4 py-2 text-xs font-bold transition whitespace-nowrap cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-xl animate-in fade-in slide-in-from-top-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        {/* ==================== 1. TAB: TỔNG QUAN & THỐNG KÊ ==================== */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs">
                <div className="flex items-center justify-between text-slate-500">
                  <span className="text-xs font-bold">Tổng số Học sinh</span>
                  <Users className="w-5 h-5 text-sky-600" />
                </div>
                <p className="mt-2 text-2xl sm:text-3xl font-black text-slate-900">{students.length}</p>
                <span className="text-[11px] text-slate-500 font-semibold">Tất cả các lớp (8A, 8B, 8C)</span>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs">
                <div className="flex items-center justify-between text-slate-500">
                  <span className="text-xs font-bold">Tổng số Giáo viên</span>
                  <GraduationCap className="w-5 h-5 text-emerald-600" />
                </div>
                <p className="mt-2 text-2xl sm:text-3xl font-black text-slate-900">{teachers.length}</p>
                <span className="text-[11px] text-slate-500">Toán 8, Tiếng Anh 8</span>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs">
                <div className="flex items-center justify-between text-slate-500">
                  <span className="text-xs font-bold">Tổng số Lớp học</span>
                  <BookOpen className="w-5 h-5 text-amber-600" />
                </div>
                <p className="mt-2 text-2xl sm:text-3xl font-black text-slate-900">{classes.length}</p>
                <span className="text-[11px] text-slate-500">8A, 8B, 8C</span>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs">
                <div className="flex items-center justify-between text-slate-500">
                  <span className="text-xs font-bold">Phiếu chuẩn bị bài</span>
                  <FileText className="w-5 h-5 text-indigo-600" />
                </div>
                <p className="mt-2 text-2xl sm:text-3xl font-black text-slate-900">{stats?.totalPreparationSheets || 0}</p>
                <span className="text-[11px] text-indigo-600 font-semibold">Đã nộp trên hệ thống</span>
              </div>
            </div>
          </div>
        )}

        {/* ==================== 2. TAB: QUẢN LÝ GIÁO VIÊN ==================== */}
        {activeTab === 'teachers' && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
              <div>
                <h2 className="text-sm font-bold text-slate-900">Danh sách Giáo viên</h2>
                <p className="text-xs text-slate-500">Quản lý tài khoản giáo viên, môn giảng dạy và lớp phụ trách</p>
              </div>

              <button
                onClick={() => setShowAddTeacherModal(true)}
                className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-emerald-700 active:scale-95 transition cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Thêm Giáo viên mới</span>
              </button>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs">
              <div className="divide-y divide-slate-100">
                {teachers.length === 0 ? (
                  <div className="p-8 text-center text-xs text-slate-500">
                    Chưa có giáo viên nào trong danh sách.
                  </div>
                ) : (
                  teachers.map((teacher) => (
                    <div key={teacher.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50 transition">
                      <div className="space-y-1">
                        <h3 className="text-sm font-bold text-slate-900">{stripTeacherHonorific(teacher.displayName)}</h3>
                        <div className="text-xs text-slate-600 flex flex-wrap gap-x-4 gap-y-1">
                          <p>
                            <span className="font-semibold text-slate-700">Môn giảng dạy:</span>{' '}
                            <span className="text-slate-900 font-medium">{formatTeacherSubjects(teacher.subjects)}</span>
                          </p>
                          <p>
                            <span className="font-semibold text-slate-700">Lớp phân công:</span>{' '}
                            <span className="text-slate-900 font-medium">{formatTeacherClasses(teacher.assignedClassIds)}</span>
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => handleOpenEditTeacher(teacher)}
                        className="flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 px-3.5 py-1.5 text-xs font-bold transition shadow-2xs self-start sm:self-center cursor-pointer"
                      >
                        <Pencil className="w-3.5 h-3.5 text-slate-600" />
                        <span>Chỉnh sửa</span>
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================== 3. TAB: QUẢN LÝ LỚP HỌC & HỌC SINH ==================== */}
        {activeTab === 'classes' && (
          <div className="space-y-6">
            {/* Hidden Excel File Input */}
            <input
              type="file"
              ref={excelInputRef}
              accept=".xlsx,.xls"
              onChange={handleExcelFileUpload}
              className="hidden"
            />

            {/* QUẢN LÝ DANH SÁCH HỌC SINH */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-base font-bold text-slate-900">Danh sách Học sinh toàn trường</h2>
                  <p className="text-xs text-slate-500">Xem, thêm mới, chuyển lớp, nhập Excel và quản lý tài khoản học sinh</p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowAddClassModal(true)}
                    className="flex items-center gap-1.5 rounded-xl border border-amber-300 bg-amber-50 hover:bg-amber-100 text-amber-900 px-3 py-1.5 text-xs font-bold transition shadow-xs cursor-pointer active:scale-95"
                    title="Thêm lớp học mới vào trường"
                  >
                    <Plus className="w-3.5 h-3.5 text-amber-600" />
                    <span>Thêm lớp mới</span>
                  </button>

                  <button
                    onClick={() => handleDownloadStudentExcelTemplate()}
                    className="flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 px-3 py-1.5 text-xs font-bold transition cursor-pointer"
                    title="Tải tệp Excel mẫu để điền danh sách học sinh"
                  >
                    <Download className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Tải tệp mẫu Excel</span>
                  </button>

                  <button
                    onClick={() => excelInputRef.current?.click()}
                    className="flex items-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-1.5 text-xs font-bold transition shadow-xs cursor-pointer active:scale-95"
                    title="Tải lên tệp Excel (.xlsx, .xls) để nhập danh sách học sinh"
                  >
                    <FileSpreadsheet className="w-4 h-4" />
                    <span>Tải tệp Excel</span>
                  </button>

                  <button
                    onClick={() => setShowAddStudentModal(true)}
                    className="flex items-center gap-1.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white px-3.5 py-1.5 text-xs font-bold transition shadow-xs cursor-pointer active:scale-95"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Thêm học sinh</span>
                  </button>
                </div>
              </div>

              {/* Dynamic Class Filter Tabs & Search */}
              <div className="pt-2 border-t border-slate-100 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
                <div className="flex gap-1.5 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
                  {[
                    { id: 'all', label: `Tất cả (${students.length})` },
                    ...classes.map((c) => ({
                      id: c.name,
                      label: `Lớp ${c.name} (${
                        students.filter(
                          (s) => SchoolService.normalizeClassName(s.className || s.classId) === c.name
                        ).length
                      })`,
                    })),
                  ].map((filterTab) => {
                    const isSelected = selectedClassFilter === filterTab.id;
                    return (
                      <button
                        key={filterTab.id}
                        onClick={() => setSelectedClassFilter(filterTab.id)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer whitespace-nowrap ${
                          isSelected
                            ? 'bg-slate-900 text-white shadow-2xs'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {filterTab.label}
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 max-w-sm">
                  <Search className="w-4 h-4 text-slate-400 shrink-0" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Tìm học sinh theo tên..."
                    className="w-full text-xs text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
                  />
                  {searchTerm && (
                    <button onClick={() => setSearchTerm('')} className="text-slate-400 hover:text-slate-600">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Selected Class Action Bar: XÓA TOÀN BỘ HỌC SINH CỦA LỚP (Mục III) */}
              {selectedClassFilter !== 'all' && (
                <div className="p-3.5 bg-amber-50/80 border border-amber-200/90 rounded-2xl flex flex-wrap items-center justify-between gap-3 animate-in fade-in">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800 shrink-0 shadow-2xs">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 flex items-center gap-2">
                        <span>Đang chọn lớp: <strong>Lớp {selectedClassFilter}</strong></span>
                        <span className="text-[10px] bg-white border border-amber-300 text-amber-900 px-2 py-0.5 rounded-full font-black">
                          {
                            students.filter(
                              (s) => SchoolService.normalizeClassName(s.className || s.classId) === selectedClassFilter
                            ).length
                          } học sinh
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500">
                        Chức năng xóa học sinh khỏi danh sách lớp (bảo lưu 100% hồ sơ, điểm và tài khoản Auth)
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleRemoveAllStudentsFromClass(selectedClassFilter)}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-300 text-rose-700 text-xs font-black transition shadow-2xs cursor-pointer active:scale-95"
                    title={`Gỡ bỏ toàn bộ học sinh khỏi lớp ${selectedClassFilter}`}
                  >
                    <UserX className="w-4 h-4 text-rose-600" />
                    <span>XÓA TOÀN BỘ HỌC SINH CỦA LỚP</span>
                  </button>
                </div>
              )}

              {/* Students List in Selected Class */}
              <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs">
                <div className="divide-y divide-slate-100">
                  {filteredStudents.length === 0 ? (
                    <div className="p-8 text-center text-xs text-slate-500">
                      Chưa tìm thấy học sinh nào trong lớp đã chọn.
                    </div>
                  ) : (
                    filteredStudents.map((st) => (
                      <div
                        key={st.id}
                        className="p-3.5 sm:p-4 flex items-center justify-between gap-3 hover:bg-slate-50 transition"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-slate-900">{st.displayName}</span>
                          <span className="text-[11px] font-semibold text-slate-500">
                            (Lớp {SchoolService.normalizeClassName(st.className || st.classId)}
                            {st.studentCode ? ` • ${st.studentCode}` : ''})
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => handleOpenEditStudent(st)}
                            className="flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 px-3 py-1.5 text-xs font-bold transition shadow-2xs cursor-pointer"
                          >
                            <Pencil className="w-3.5 h-3.5 text-slate-600" />
                            <span>Chỉnh sửa</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteStudent(st)}
                            className="flex items-center gap-1.5 rounded-xl border border-rose-200 bg-white hover:bg-rose-50 text-rose-600 px-3 py-1.5 text-xs font-bold transition shadow-2xs cursor-pointer"
                            title="Xóa học sinh này"
                          >
                            <Trash2 className="w-3.5 h-3.5 text-rose-500" />
                            <span className="hidden sm:inline">Xóa</span>
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== 4. TAB: DỮ LIỆU & SAO LƯU ==================== */}
        {activeTab === 'data' && (
          <div className="space-y-4 max-w-3xl">
            {/* Hidden JSON file input */}
            <input
              type="file"
              ref={jsonInputRef}
              accept=".json"
              onChange={handleSelectJsonForRestore}
              className="hidden"
            />

            {/* Sao lưu & Khôi phục Hệ thống (JSON) */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-3.5">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2.5">
                <Database className="w-5 h-5 text-indigo-600" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Sao lưu & Khôi phục Hệ thống (Định dạng JSON)</h3>
                  <p className="text-[11px] text-slate-500">Dùng để lưu trữ toàn bộ cấu hình hệ thống, các lớp và tài khoản người dùng</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                {/* Export JSON */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between gap-3">
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Xuất bản sao lưu JSON hệ thống</h4>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Bao gồm thông tin hệ thống, danh sách lớp, tài khoản giáo viên và học sinh.
                    </p>
                  </div>
                  <button
                    onClick={handleExportJsonBackup}
                    className="flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white px-3.5 py-2 text-xs font-bold transition cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Tải tệp sao lưu JSON</span>
                  </button>
                </div>

                {/* Import JSON */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between gap-3">
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Khôi phục từ tệp sao lưu JSON</h4>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Kiểm tra cấu trúc và xem trước dữ liệu trước khi thực hiện khôi phục an toàn.
                    </p>
                  </div>
                  <button
                    onClick={() => jsonInputRef.current?.click()}
                    className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 px-3.5 py-2 text-xs font-bold transition cursor-pointer"
                  >
                    <Upload className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Chọn tệp JSON để khôi phục</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Section C: Kiểm tra tính toàn vẹn dữ liệu */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-slate-800">Kiểm tra tính toàn vẹn dữ liệu</h3>
                  <p className="text-[11px] text-slate-500">
                    Quét tìm học sinh trùng lặp, tài khoản liên kết sai lớp hoặc giáo viên chưa gán môn
                  </p>
                </div>
                <button
                  onClick={handleRunIntegrityCheck}
                  className="flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-100 transition cursor-pointer shadow-2xs"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-sky-600" />
                  <span>Chạy kiểm tra</span>
                </button>
              </div>

              {integrityReport && (
                <div className={`p-3.5 rounded-xl border text-xs space-y-2 animate-in fade-in ${
                  integrityReport.isValid
                    ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                    : 'bg-amber-50/80 border-amber-200 text-amber-950'
                }`}>
                  <div className="flex items-center justify-between font-bold">
                    <span>
                      {integrityReport.isValid
                        ? '✅ Dữ liệu hoàn toàn hợp lệ!'
                        : `⚠️ Phát hiện ${integrityReport.issues.length} cảnh báo:`}
                    </span>
                    <span className="text-[10px] text-slate-500">Đã kiểm tra {integrityReport.totalChecked} tài khoản lúc {integrityReport.checkedAt}</span>
                  </div>
                  {integrityReport.issues.length > 0 && (
                    <ul className="list-disc list-inside space-y-1 text-[11px] text-amber-900 pt-1">
                      {integrityReport.issues.map((issue, idx) => (
                        <li key={idx}>{issue}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>

            {/* Section D: Sao lưu tự động */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <h3 className="text-xs font-bold text-slate-800">Cơ chế Sao lưu & Đồng bộ Tự động</h3>
                </div>
                <span className="rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5">
                  Đang hoạt động
                </span>
              </div>
              <p className="text-[11px] text-slate-600">
                Hệ thống tự động lưu trữ dữ liệu tại bộ nhớ cục bộ IndexedDB (hỗ trợ offline-first) và chuyển giao qua hàng đợi đồng bộ Cloud Firestore khi có kết nối mạng.
              </p>
              <p className="text-[10px] text-slate-400">
                Đồng bộ liên tục theo từng thay đổi dữ liệu người dùng.
              </p>
            </div>
          </div>
        )}
      </main>

      {/* ==================== MODAL: ADD CLASS ==================== */}
      {showAddClassModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 my-6">
            <div className="bg-amber-500 px-5 py-4 text-slate-950 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <h3 className="text-sm font-bold">Thêm Lớp học mới</h3>
              </div>
              <button onClick={() => setShowAddClassModal(false)} className="text-slate-950/70 hover:text-slate-950 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleCreateClass} className="p-5 space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Tên lớp học:</label>
                <input
                  type="text"
                  placeholder="Ví dụ: 8D hoặc 8E"
                  value={newClassName}
                  onChange={(e) => setNewClassName(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-xs font-bold uppercase"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Giáo viên chủ nhiệm:</label>
                <select
                  value={newClassHomeroomId}
                  onChange={(e) => setNewClassHomeroomId(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-xs font-medium bg-white"
                >
                  <option value="">-- Chưa phân công GVCN --</option>
                  {teachers.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.displayName} ({t.username})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Giáo viên bộ môn Toán 8:</label>
                <select
                  value={newClassMathTeacherId}
                  onChange={(e) => setNewClassMathTeacherId(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-xs font-medium bg-white"
                >
                  <option value="">-- Chưa phân công GV Toán --</option>
                  {teachers.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.displayName}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Giáo viên bộ môn Tiếng Anh 8:</label>
                <select
                  value={newClassEnglishTeacherId}
                  onChange={(e) => setNewClassEnglishTeacherId(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-xs font-medium bg-white"
                >
                  <option value="">-- Chưa phân công GV Tiếng Anh --</option>
                  {teachers.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.displayName}
                    </option>
                  ))}
                </select>
              </div>

              <div className="pt-2 flex justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowAddClassModal(false)}
                  className="rounded-xl border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-100"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-amber-500 hover:bg-amber-600 px-4 py-2 font-bold text-slate-950 transition cursor-pointer"
                >
                  Tạo lớp mới
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ==================== MODAL: EDIT CLASS ==================== */}
      {editingClass && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 my-6">
            <div className="bg-slate-900 px-5 py-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Pencil className="w-4 h-4 text-amber-400" />
                <h3 className="text-sm font-bold">Chỉnh sửa Lớp {editingClass.name}</h3>
              </div>
              <button onClick={() => setEditingClass(null)} className="text-white/70 hover:text-white cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSaveClassEdit} className="p-5 space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Tên lớp học:</label>
                <input
                  type="text"
                  value={editClassName}
                  onChange={(e) => setEditClassName(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-xs font-bold uppercase"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Giáo viên chủ nhiệm:</label>
                <select
                  value={editClassHomeroomId}
                  onChange={(e) => setEditClassHomeroomId(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-xs font-medium bg-white"
                >
                  <option value="">-- Chưa phân công GVCN --</option>
                  {teachers.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.displayName}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Giáo viên bộ môn Toán 8:</label>
                <select
                  value={editClassMathTeacherId}
                  onChange={(e) => setEditClassMathTeacherId(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-xs font-medium bg-white"
                >
                  <option value="">-- Chưa phân công GV Toán --</option>
                  {teachers.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.displayName}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Giáo viên bộ môn Tiếng Anh 8:</label>
                <select
                  value={editClassEnglishTeacherId}
                  onChange={(e) => setEditClassEnglishTeacherId(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-xs font-medium bg-white"
                >
                  <option value="">-- Chưa phân công GV Tiếng Anh --</option>
                  {teachers.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.displayName}
                    </option>
                  ))}
                </select>
              </div>

              <div className="pt-2 flex justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setEditingClass(null)}
                  className="rounded-xl border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-100"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-amber-500 hover:bg-amber-600 px-4 py-2 font-bold text-slate-950 transition cursor-pointer"
                >
                  Lưu thay đổi lớp
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ==================== MODAL: ADD TEACHER ==================== */}
      {showAddTeacherModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 my-6">
            <div className="bg-emerald-700 px-5 py-4 text-white flex items-center justify-between">
              <h3 className="text-sm font-bold">Thêm Giáo viên mới</h3>
              <button onClick={() => setShowAddTeacherModal(false)} className="text-white/80 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleCreateTeacher} className="p-5 space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Họ và tên Giáo viên:</label>
                <input
                  type="text"
                  placeholder="Ví dụ: Cô Nguyễn Mai Lan"
                  value={tFullName}
                  onChange={(e) => setTFullName(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-xs"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Tên đăng nhập (Mã GV):</label>
                <input
                  type="text"
                  placeholder="Ví dụ: giaovienlan"
                  value={tUsername}
                  onChange={(e) => setTUsername(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-xs"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Email đăng nhập (tùy chọn):</label>
                <input
                  type="email"
                  placeholder="Ví dụ: mailan@truong.edu.vn"
                  value={tEmail}
                  onChange={(e) => setTEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-xs"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Mã PIN khởi tạo mặc định:</label>
                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 font-medium flex items-center justify-between">
                  <span>Mã PIN mặc định: <strong>123456</strong></span>
                  <span className="text-[10px] bg-amber-200/80 px-2 py-0.5 rounded-md font-bold">Bắt buộc đổi PIN lần đầu</span>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Môn giảng dạy:</label>
                <div className="flex gap-2">
                  {(['toan', 'tienganh'] as SubjectId[]).map((subj) => (
                    <button
                      key={subj}
                      type="button"
                      onClick={() => {
                        setTSubjects((prev) =>
                          prev.includes(subj) ? prev.filter((s) => s !== subj) : [...prev, subj]
                        );
                      }}
                      className={`px-3 py-1.5 rounded-lg font-semibold border transition ${
                        tSubjects.includes(subj)
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : 'bg-slate-100 text-slate-600 border-slate-200'
                      }`}
                    >
                      {subj === 'toan' ? 'Toán 8' : 'Tiếng Anh 8'}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Lớp được phân công:</label>
                <div className="flex flex-wrap gap-2">
                  {classes.map((cls) => (
                    <button
                      key={cls.id}
                      type="button"
                      onClick={() => {
                        setTClasses((prev) =>
                          prev.includes(cls.id) ? prev.filter((c) => c !== cls.id) : [...prev, cls.id]
                        );
                      }}
                      className={`px-3 py-1 rounded-lg font-semibold border transition ${
                        tClasses.includes(cls.id)
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : 'bg-slate-100 text-slate-600 border-slate-200'
                      }`}
                    >
                      {cls.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowAddTeacherModal(false)}
                  className="rounded-xl border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-100"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-emerald-600 px-4 py-2 font-bold text-white hover:bg-emerald-700"
                >
                  Tạo tài khoản Giáo viên
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ==================== MODAL: EDIT TEACHER ==================== */}
      {editingTeacher && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 my-8">
            <div className="bg-slate-900 px-5 py-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Pencil className="w-4 h-4 text-emerald-400" />
                <h3 className="text-sm font-bold">Chỉnh sửa thông tin Giáo viên</h3>
              </div>
              <button
                onClick={() => setEditingTeacher(null)}
                className="text-white/70 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveTeacherEdit} className="p-5 space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Họ và tên Giáo viên:</label>
                <input
                  type="text"
                  value={editTFullName}
                  onChange={(e) => setEditTFullName(e.target.value)}
                  placeholder="Ví dụ: Nguyễn Mai Lan"
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                  required
                />
                <span className="text-[10px] text-slate-400 mt-1 block">Tự động chuẩn hóa, không cần tiền tố Thầy/Cô.</span>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Email đăng nhập (tùy chọn):</label>
                <input
                  type="email"
                  value={editTEmail}
                  onChange={(e) => setEditTEmail(e.target.value)}
                  placeholder="Ví dụ: mailan@truong.edu.vn"
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1.5">Môn giảng dạy:</label>
                <div className="flex flex-wrap gap-2">
                  {(['toan', 'tienganh'] as SubjectId[]).map((subj) => {
                    const isSelected = editTSubjects.includes(subj);
                    return (
                      <button
                        key={subj}
                        type="button"
                        onClick={() => {
                          setEditTSubjects((prev) =>
                            isSelected ? prev.filter((s) => s !== subj) : [...prev, subj]
                          );
                        }}
                        className={`px-3 py-1.5 rounded-xl font-bold border transition cursor-pointer text-xs ${
                          isSelected
                            ? 'bg-emerald-600 text-white border-emerald-600 shadow-2xs'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {subj === 'toan' ? 'Toán 8' : 'Tiếng Anh 8'}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1.5">Lớp phân công phụ trách:</label>
                <div className="flex flex-wrap gap-2">
                  {classes.map((cls) => {
                    const isSelected = editTClasses.includes(cls.id);
                    return (
                      <button
                        key={cls.id}
                        type="button"
                        onClick={() => {
                          setEditTClasses((prev) =>
                            isSelected ? prev.filter((c) => c !== cls.id) : [...prev, cls.id]
                          );
                        }}
                        className={`px-3.5 py-1.5 rounded-xl font-bold border transition cursor-pointer text-xs ${
                          isSelected
                            ? 'bg-emerald-600 text-white border-emerald-600 shadow-2xs'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        Lớp {cls.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Reset PIN Section */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
                <div className="flex items-center gap-1.5 font-bold text-slate-800">
                  <KeyRound className="w-4 h-4 text-amber-600" />
                  <span>Quản lý mã PIN đăng nhập:</span>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="tPinOption"
                      checked={editTPinOption === 'keep'}
                      onChange={() => setEditTPinOption('keep')}
                      className="text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-slate-700 font-medium">Giữ nguyên mã PIN hiện tại</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="tPinOption"
                      checked={editTPinOption === 'default'}
                      onChange={() => setEditTPinOption('default')}
                      className="text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-slate-700 font-medium">
                      Cấp lại mã PIN về mặc định (<strong>123456</strong> - bắt buộc đổi khi đăng nhập)
                    </span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="tPinOption"
                      checked={editTPinOption === 'custom'}
                      onChange={() => setEditTPinOption('custom')}
                      className="text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-slate-700 font-medium">Thiết lập mã PIN mới ngay</span>
                  </label>

                  {editTPinOption === 'custom' && (
                    <div className="pt-1 pl-6">
                      <input
                        type="password"
                        maxLength={6}
                        value={editTCustomPin}
                        onChange={(e) => setEditTCustomPin(e.target.value.replace(/\D/g, ''))}
                        placeholder="Nhập 6 chữ số (ví dụ: 654321)"
                        className="w-48 rounded-xl border border-slate-300 p-2 text-xs font-mono tracking-widest text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                        required
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Lock / Unlock Status */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-800 block">Trạng thái tài khoản:</span>
                  <span className={`text-[11px] font-semibold ${editTIsLocked ? 'text-rose-600' : 'text-emerald-600'}`}>
                    {editTIsLocked ? 'Tài khoản đang bị KHÓA' : 'Tài khoản đang HOẠT ĐỘNG'}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setEditTIsLocked(!editTIsLocked)}
                  className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 font-bold border transition cursor-pointer text-xs ${
                    editTIsLocked
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100'
                      : 'bg-rose-50 text-rose-700 border-rose-300 hover:bg-rose-100'
                  }`}
                >
                  {editTIsLocked ? <Unlock className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
                  <span>{editTIsLocked ? 'Mở khóa tài khoản' : 'Khóa tài khoản'}</span>
                </button>
              </div>

              {/* Bottom Actions */}
              <div className="pt-3 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => handleDeleteTeacher(editingTeacher)}
                  className="flex items-center gap-1.5 rounded-xl text-rose-600 hover:bg-rose-50 border border-rose-200 px-3.5 py-2 font-bold transition cursor-pointer text-xs"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Xóa giáo viên</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setEditingTeacher(null)}
                    className="rounded-xl border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-100 transition cursor-pointer text-xs"
                  >
                    Hủy
                  </button>
                  <button
                    type="submit"
                    className="rounded-xl bg-emerald-600 hover:bg-emerald-700 px-5 py-2 font-bold text-white transition shadow-sm cursor-pointer text-xs"
                  >
                    Lưu thay đổi
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ==================== MODAL: EDIT STUDENT ==================== */}
      {editingStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 my-8">
            <div className="bg-slate-900 px-5 py-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Pencil className="w-4 h-4 text-sky-400" />
                <h3 className="text-sm font-bold">Chỉnh sửa thông tin Học sinh</h3>
              </div>
              <button
                onClick={() => setEditingStudent(null)}
                className="text-white/70 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveStudentEdit} className="p-5 space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Họ và tên Học sinh:</label>
                <input
                  type="text"
                  value={editSFullName}
                  onChange={(e) => setEditSFullName(e.target.value)}
                  placeholder="Ví dụ: Bùi Ngọc Lâm"
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Mã học sinh (tùy chọn):</label>
                <input
                  type="text"
                  value={editSStudentCode}
                  onChange={(e) => setEditSStudentCode(e.target.value)}
                  placeholder="Ví dụ: HS-800123"
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Email đăng nhập (tùy chọn):</label>
                <input
                  type="email"
                  value={editSEmail}
                  onChange={(e) => setEditSEmail(e.target.value)}
                  placeholder="Ví dụ: hocsinh@truong.edu.vn"
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Lớp học:</label>
                <select
                  value={editSClassId}
                  onChange={(e) => setEditSClassId(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-xs font-bold text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  {classes.map((cls) => (
                    <option key={cls.id} value={cls.name}>
                      Lớp {cls.name}
                    </option>
                  ))}
                </select>
                <div className="mt-2 p-2.5 rounded-xl bg-amber-50/80 border border-amber-200/80 text-amber-900 text-[11px] leading-relaxed">
                  ⭐ <strong>Bảo lưu kết quả học tập:</strong> Khi chuyển lớp, toàn bộ số sao thưởng, giọt nước, bài đọc đã hoàn thành và phiếu chuẩn bị bài của học sinh được bảo lưu nguyên vẹn 100%.
                </div>
              </div>

              {/* Reset PIN Section */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
                <div className="flex items-center gap-1.5 font-bold text-slate-800">
                  <KeyRound className="w-4 h-4 text-amber-600" />
                  <span>Quản lý mã PIN đăng nhập:</span>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="sPinOption"
                      checked={editSPinOption === 'keep'}
                      onChange={() => setEditSPinOption('keep')}
                      className="text-sky-600 focus:ring-sky-500"
                    />
                    <span className="text-slate-700 font-medium">Giữ nguyên mã PIN hiện tại</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="sPinOption"
                      checked={editSPinOption === 'default'}
                      onChange={() => setEditSPinOption('default')}
                      className="text-sky-600 focus:ring-sky-500"
                    />
                    <span className="text-slate-700 font-medium">
                      Cấp lại mã PIN về mặc định (<strong>123456</strong> - bắt buộc đổi khi đăng nhập)
                    </span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="sPinOption"
                      checked={editSPinOption === 'custom'}
                      onChange={() => setEditSPinOption('custom')}
                      className="text-sky-600 focus:ring-sky-500"
                    />
                    <span className="text-slate-700 font-medium">Thiết lập mã PIN mới ngay</span>
                  </label>

                  {editSPinOption === 'custom' && (
                    <div className="pt-1 pl-6">
                      <input
                        type="password"
                        maxLength={6}
                        value={editSCustomPin}
                        onChange={(e) => setEditSCustomPin(e.target.value.replace(/\D/g, ''))}
                        placeholder="Nhập 6 chữ số (ví dụ: 123456)"
                        className="w-48 rounded-xl border border-slate-300 p-2 text-xs font-mono tracking-widest text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white"
                        required
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Lock / Unlock Status */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-800 block">Trạng thái tài khoản:</span>
                  <span className={`text-[11px] font-semibold ${editSIsLocked ? 'text-rose-600' : 'text-emerald-600'}`}>
                    {editSIsLocked ? 'Tài khoản đang bị KHÓA' : 'Tài khoản đang HOẠT ĐỘNG'}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setEditSIsLocked(!editSIsLocked)}
                  className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 font-bold border transition cursor-pointer text-xs ${
                    editSIsLocked
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100'
                      : 'bg-rose-50 text-rose-700 border-rose-300 hover:bg-rose-100'
                  }`}
                >
                  {editSIsLocked ? <Unlock className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
                  <span>{editSIsLocked ? 'Mở khóa tài khoản' : 'Khóa tài khoản'}</span>
                </button>
              </div>

              {/* Bottom Actions */}
              <div className="pt-3 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => handleDeleteStudent(editingStudent)}
                  className="flex items-center gap-1.5 rounded-xl text-rose-600 hover:bg-rose-50 border border-rose-200 px-3.5 py-2 font-bold transition cursor-pointer text-xs"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Xóa học sinh</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setEditingStudent(null)}
                    className="rounded-xl border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-100 transition cursor-pointer text-xs"
                  >
                    Hủy
                  </button>
                  <button
                    type="submit"
                    className="rounded-xl bg-sky-600 hover:bg-sky-700 px-5 py-2 font-bold text-white transition shadow-sm cursor-pointer text-xs"
                  >
                    Lưu thay đổi
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ==================== MODAL: ADD STUDENT ==================== */}
      {showAddStudentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95">
            <div className="bg-sky-700 px-5 py-4 text-white flex items-center justify-between">
              <h3 className="text-sm font-bold">Thêm Học sinh mới</h3>
              <button onClick={() => setShowAddStudentModal(false)} className="text-white/80 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleCreateStudent} className="p-5 space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Họ và tên Học sinh:</label>
                <input
                  type="text"
                  placeholder="Ví dụ: Trần Minh Quang"
                  value={sFullName}
                  onChange={(e) => setSFullName(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-xs"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Lớp phân vào:</label>
                <select
                  value={sClassId}
                  onChange={(e) => setSClassId(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-xs font-semibold"
                >
                  {classes.map((cls) => (
                    <option key={cls.id} value={cls.name}>
                      Lớp {cls.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Mã học sinh (tùy chọn):</label>
                <input
                  type="text"
                  placeholder="Ví dụ: HS-800123"
                  value={sStudentCode}
                  onChange={(e) => setSStudentCode(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-xs"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Email đăng nhập (tùy chọn):</label>
                <input
                  type="email"
                  placeholder="Ví dụ: hocsinh@truong.edu.vn"
                  value={sEmail}
                  onChange={(e) => setSEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-xs"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Thông tin phân biệt bổ sung (nếu có học sinh trùng họ tên trong lớp):
                </label>
                <input
                  type="text"
                  placeholder="Ví dụ: STT 03 hoặc Ngày sinh 15/04/2012"
                  value={sSecondaryId}
                  onChange={(e) => setSSecondaryId(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-xs"
                />
                <p className="text-[10px] text-slate-400 mt-0.5">Không bắt buộc học sinh phải nhớ mã số nội bộ</p>
              </div>

              <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-200 text-xs text-sky-900 font-medium space-y-1">
                <div className="flex items-center justify-between">
                  <span>Bắt buộc đổi mã PIN ở lần đầu đăng nhập</span>
                  <span className="text-[10px] bg-sky-200/80 px-2 py-0.5 rounded-md font-bold">Bảo mật</span>
                </div>
                <p className="text-[11px] text-sky-700">
                  Học sinh đăng nhập bằng Họ tên + Lớp học (8A, 8B hoặc 8C) + Mã PIN.
                </p>
              </div>

              <div className="pt-2 flex justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowAddStudentModal(false)}
                  className="rounded-xl border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-100"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-sky-600 px-4 py-2 font-bold text-white hover:bg-sky-700"
                >
                  Thêm Học sinh
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ==================== MODAL: EXCEL IMPORT PREVIEW ==================== */}
      {excelPreviewData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-3 sm:p-4 overflow-y-auto">
          <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 my-6 max-h-[90vh] flex flex-col">
            <div className="bg-emerald-700 px-5 py-4 text-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="w-5 h-5 text-emerald-300" />
                <h3 className="text-sm font-bold truncate">Bản xem trước nhập học sinh từ Excel: {excelPreviewData.filename}</h3>
              </div>
              <button
                onClick={() => setExcelPreviewData(null)}
                className="text-white/80 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 space-y-4 text-xs overflow-y-auto">
              {/* Summary Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <span className="text-[11px] text-slate-500 font-medium block">Tổng số dòng đọc</span>
                  <span className="text-lg font-black text-slate-800">{excelPreviewData.totalRows}</span>
                </div>
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
                  <span className="text-[11px] text-emerald-700 font-medium block">Hợp lệ (Thêm mới)</span>
                  <span className="text-lg font-black text-emerald-700">{excelPreviewData.validRows.length}</span>
                </div>
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-center">
                  <span className="text-[11px] text-rose-700 font-medium block">Lỗi / Bỏ qua</span>
                  <span className="text-lg font-black text-rose-700">{excelPreviewData.invalidRows.length}</span>
                </div>
              </div>

              {/* Error Rows Details */}
              {excelPreviewData.invalidRows.length > 0 && (
                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-950 space-y-2">
                  <div className="flex items-center gap-1.5 font-bold text-xs text-rose-800">
                    <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>Chi tiết các dòng bị lỗi hoặc bỏ qua ({excelPreviewData.invalidRows.length} dòng):</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-[11px] max-h-36 overflow-y-auto pr-1">
                    {excelPreviewData.invalidRows.map((err, idx) => (
                      <li key={idx} className="leading-snug">
                        <strong>Dòng {err.rowNumber}:</strong> {err.fullName} - <span className="text-rose-700">{err.errorReason}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[10px] text-rose-600 italic">
                    Hệ thống sẽ tự động bỏ qua các dòng trên và không ghi đè học sinh đã có.
                  </p>
                </div>
              )}

              {/* Valid Rows Preview Table */}
              {excelPreviewData.validRows.length > 0 ? (
                <div className="space-y-2">
                  <span className="font-bold text-slate-800 block">
                    Danh sách học sinh hợp lệ sẵn sàng thêm mới ({excelPreviewData.validRows.length} học sinh):
                  </span>
                  <div className="border border-slate-200 rounded-xl overflow-hidden max-h-56 overflow-y-auto">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead className="bg-slate-100 text-slate-700 sticky top-0">
                        <tr>
                          <th className="py-2 px-3 font-bold border-b border-slate-200 w-12">STT</th>
                          <th className="py-2 px-3 font-bold border-b border-slate-200">Họ và tên</th>
                          <th className="py-2 px-3 font-bold border-b border-slate-200 w-24">Lớp</th>
                          <th className="py-2 px-3 font-bold border-b border-slate-200 w-28">Mã PIN ban đầu</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {excelPreviewData.validRows.map((item, idx) => (
                          <tr key={idx} className="hover:bg-slate-50">
                            <td className="py-2 px-3 text-slate-500">{idx + 1}</td>
                            <td className="py-2 px-3 font-semibold text-slate-900">{item.fullName}</td>
                            <td className="py-2 px-3 font-bold text-emerald-700">Lớp {item.className}</td>
                            <td className="py-2 px-3 font-mono text-slate-600">{item.pin}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div className="p-6 text-center text-rose-600 font-semibold bg-rose-50/50 rounded-xl border border-rose-200">
                  Không có học sinh nào hợp lệ để nhập vào hệ thống. Vui lòng kiểm tra lại tệp Excel.
                </div>
              )}
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setExcelPreviewData(null)}
                className="rounded-xl border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-200 transition cursor-pointer text-xs"
              >
                Hủy bỏ
              </button>
              <button
                type="button"
                disabled={excelPreviewData.validRows.length === 0 || isImportingExcel}
                onClick={handleConfirmImportExcel}
                className="flex items-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white px-5 py-2 font-bold transition shadow-sm cursor-pointer text-xs"
              >
                {isImportingExcel ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Đang nhập dữ liệu...</span>
                  </>
                ) : (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Xác nhận nhập ({excelPreviewData.validRows.length} học sinh)</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==================== MODAL: JSON RESTORE PREVIEW ==================== */}
      {jsonRestorePreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-3 sm:p-4 overflow-y-auto">
          <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 my-6">
            <div className="bg-indigo-700 px-5 py-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Database className="w-5 h-5 text-indigo-300" />
                <h3 className="text-sm font-bold">Xác nhận Khôi phục từ tệp JSON</h3>
              </div>
              <button
                onClick={() => setJsonRestorePreview(null)}
                className="text-white/80 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 space-y-3.5 text-xs">
              <p className="text-slate-600">
                Tệp sao lưu hợp lệ. Dưới đây là thông tin chi tiết dữ liệu sẽ được khôi phục:
              </p>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Hệ thống:</span>
                  <span className="font-bold text-slate-800">{jsonRestorePreview.schoolName || 'HỌC VUI MỖI NGÀY'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Số lớp học:</span>
                  <span className="font-bold text-slate-800">{jsonRestorePreview.classesCount} lớp</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Số giáo viên:</span>
                  <span className="font-bold text-slate-800">{jsonRestorePreview.teachersCount} giáo viên</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Số học sinh:</span>
                  <span className="font-bold text-slate-800">{jsonRestorePreview.studentsCount} học sinh</span>
                </div>
                <div className="flex justify-between border-t border-slate-200 pt-1.5 text-[11px]">
                  <span className="text-slate-500">Thời điểm sao lưu:</span>
                  <span className="font-medium text-slate-600">{new Date(jsonRestorePreview.timestamp).toLocaleString('vi-VN')}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-[11px] leading-relaxed">
                ⚠️ <strong>Cảnh báo:</strong> Thao tác này sẽ cập nhật lại danh sách tài khoản và lớp học theo bản sao lưu JSON. Vui lòng xác nhận trước khi tiếp tục.
              </div>

              <div className="pt-2 flex justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setJsonRestorePreview(null)}
                  className="rounded-xl border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-100 transition cursor-pointer"
                >
                  Hủy
                </button>
                <button
                  type="button"
                  onClick={handleConfirmJsonRestore}
                  className="rounded-xl bg-indigo-600 hover:bg-indigo-700 px-5 py-2 font-bold text-white transition shadow-sm cursor-pointer"
                >
                  Xác nhận khôi phục
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================== CONFIRM ACTION MODAL ==================== */}
      {confirmActionModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in">
          <div className="w-full max-w-sm rounded-2xl bg-white shadow-2xl p-5 border border-slate-200 animate-in zoom-in-95 space-y-3 text-xs">
            <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
              <AlertTriangle className="w-5 h-5 shrink-0" />
              <span>{confirmActionModal.title}</span>
            </div>
            <p className="text-slate-600 leading-relaxed whitespace-pre-line">{confirmActionModal.message}</p>
            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setConfirmActionModal(null)}
                className="rounded-xl border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-100 cursor-pointer transition"
              >
                Hủy
              </button>
              <button
                type="button"
                onClick={confirmActionModal.onConfirm}
                className="rounded-xl bg-rose-600 px-4 py-2 font-bold text-white hover:bg-rose-700 cursor-pointer shadow-sm transition"
              >
                Xác nhận xóa
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-[70] bg-slate-900 text-white text-xs font-semibold px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2 border border-slate-700 animate-in fade-in slide-in-from-bottom-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};
