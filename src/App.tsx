import Attendance from './Routes/Attendance'
import Login from './Routes/Login'
import Dashboard from './Routes/Dashboard'
import Report from './Routes/Report'
import Student from './Routes/Student'


import './styles/app.scss'
import { Route, Routes } from 'react-router'
import Header from './Components/Header'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Attendance />} />
        <Route path='/login' element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/report" element={<Report />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </div>
  )
}

export default App
