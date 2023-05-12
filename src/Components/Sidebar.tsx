import { Link } from 'react-router-dom'
import chart from '../assets/icons/chart.svg'
import logout from '../assets/icons/logout.svg'
import report from '../assets/icons/report.svg'
import spreadsheet from '../assets/icons/spreadsheet.svg'
import student from '../assets/icons/student.svg'
import absense from '../assets/icons/Absense.svg'
import teacher from '../assets/icons/teacher.svg'
import subject from '../assets/icons/subject.svg'

const Sidebar = () => {
    const analyse = [
        {label: 'Attendance' , path: '/attendance' , icon: spreadsheet},
        {label: 'Absense', path: '/absense', icon: absense},
        {label: 'Report', path: '/report' , icon: report }
    ]

    const manage = [
        {label: 'Teacher' , path: '/teacher' , icon: teacher},
        {label: 'Student', path: '/student', icon: student},
        {label: 'Subject', path: '/subject' , icon: subject }
    ]
  return (
    <div className='sidebar'>
        <div className="dashboard">
            <Link to='/dashboard'>
                <div className="link">
                    <img src={chart} alt="" />
                    <button>Dashboard</button>
                </div>
            </Link>
        </div>
        <div className='track'>
            <h1>ANALYSE</h1>
            {analyse.map((item) => (
                <Link to={item.path}>
                    <div className='link'>
                        <img src={item.icon} alt="spreadsheet" />
                        <button>{item.label}</button>
                    </div>
                </Link>
            ))}
        </div>
        <div className='analyze'>
            <h1>MANAGE</h1>
            {manage.map((item) => (
                <Link to={item.path}>
                    <div className="link">
                        <img src={item.icon} alt="" />
                        <button>{item.label}</button>
                    </div>
                </Link>
            ))}
        </div>
        
        <div className='logout'>
            <img src={logout} alt="logout" />
            <h1>Logout</h1>
        </div>
    </div>
  )
}

export default Sidebar