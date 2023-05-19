import report from "../assets/icons/report.svg";
import spreadsheet from "../assets/icons/spreadsheet.svg";
import student from "../assets/icons/student.svg";
import absense from "../assets/icons/Absense.svg";
import teacher from "../assets/icons/teacher.svg";
import subject from "../assets/icons/subject.svg";

export const analyse = [
  { label: "Attendance", path: "attendance", icon: spreadsheet },
  { label: "Absense", path: "absense", icon: absense },
  { label: "Report", path: "report", icon: report },
];

export const manage = [
  { label: "Teacher", path: "teacher", icon: teacher },
  { label: "Student", path: "student", icon: student },
  { label: "Subject", path: "subject", icon: subject },
];

export const absenseRecords = [
  {id: 1, name: 'Maria', course: 'CSC411', semester: 'First', reason: 'Sick', time: '1day'},
  {id: 2, name: 'Maria', course: 'CSC422', semester: 'Second', reason: 'Sick', time: '1day'},
  {id: 3, name: 'Maria', course: 'CSC413', semester: 'First', reason: 'Sick', time: '1day'}
]

export const approvedAbsense = [
  { id: 1, name: 'Sonia', course: 'CSC411', semester: 'First', reason: 'Sick', time: '1day' },
]

export const currentTeachers = [
  {id: 1, name: 'Manag Lama', address: 'Dolpa', email: 'maan@gmail.com', username: '@malama', password: '******'},
  {id: 2, name: 'Manag Lama', address: 'Dolpa', email: 'maan@gmail.com', username: '@malama', password: '******'},
  {id: 3, name: 'Manag Lama', address: 'Dolpa', email: 'maan@gmail.com', username: '@malama', password: '******'},
  {id: 4, name: 'Manag Lama', address: 'Dolpa', email: 'maan@gmail.com', username: '@malama', password: '******'},
  {id: 5, name: 'Manag Lama', address: 'Dolpa', email: 'maan@gmail.com', username: '@malama', password: '******'},
  {id: 6, name: 'Manag Lama', address: 'Dolpa', email: 'maan@gmail.com', username: '@malama', password: '******'},
  {id: 7, name: 'Manag Lama', address: 'Dolpa', email: 'maan@gmail.com', username: '@malama', password: '******'},
  {id: 8, name: 'Manag Lama', address: 'Dolpa', email: 'maan@gmail.com', username: '@malama', password: '******'}
]

export const currentStudents = [
  {id: 1, name: 'Manoj Baj', address: 'BIT', email: 'manoj2@gmail', username: '@manojBaj', password: '******'},
  {id: 2, name: 'mario DB', address: 'BIT', email: 'mario@gmail.com', username: '@parakas', password: '******'},
  {id: 3, name: 'Kiara Advani', address: 'BIT', email: 'kiara@gmail.com', username: '@kiara', password: '******'},
]

export const currentSubjects = [
  {id: 1, name: 'C Programming', course: 'BIT', semester: 'First', assignedTeacher: 'Manag lama'},
  {id: 2, name: 'Digital Logic', course: 'BIT', semester: 'First', assignedTeacher: 'Prakash Rai'},
  {id: 3, name: 'OOP', course: 'BIT', semester: 'First', assignedTeacher: 'Manag lama'},
  {id: 4, name: 'Data Structure', course: 'BIT', semester: 'Second', assignedTeacher: '_ _'},
]