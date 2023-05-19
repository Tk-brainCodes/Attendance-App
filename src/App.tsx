import Attendance from "./Routes/Attendance";
import Login from "./Routes/Login";
import DashboardLayout from "./Routes/DashboardLayout";
import Dashboard from "./Routes/Dashboard";
import Report from "./Routes/Report";
import Student from "./Routes/Student";
import Addteacher from "./Components/Addteacher";

import "./styles/app.scss";
import { Route, Routes } from "react-router";
import Header from "./Components/Header";
import Absense from "./Routes/Absense";
import Teacher from "./Routes/Teacher";
import Subject from "./Routes/Subject";
import "./App.css";
import Addsubject from "./Components/Addsubject";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<DashboardLayout />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='attendance' element={<Attendance />} />
          <Route path='report' element={<Report />} />
          <Route path='student' element={<Student />} />
          <Route path='absense' element={<Absense />} />
          <Route path='subject' element={<Subject />} />
          <Route path='teacher' element={<Teacher />} />
          <Route path='teacher/addteacher' element={<Addteacher />} />
          <Route path='subject/addsubject' element={<Addsubject />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
