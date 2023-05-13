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