import Attendance from './Routes/Attendance'
import Login from './Routes/Login'
import Dashboard from './Routes/Dashboard'
import Report from './Routes/Report'
import Student from './Routes/Student'


import './styles/app.scss'
import { Route, Routes } from 'react-router'
import Header from './Components/Header'
import Absense from './Routes/Absense'
import Teacher from './Routes/Teacher'
import Subject from './Routes/Subject'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/attendance' element={<Attendance />} />
        <Route path='/' element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/report" element={<Report />} />
        <Route path="/student" element={<Student />} />
        <Route path='/absense' element={<Absense />} />
        <Route path='/subject' element={<Subject />} />
        <Route path='/teacher' element={<Teacher />} />
      </Routes>
    </div>
  )
}

export default App
