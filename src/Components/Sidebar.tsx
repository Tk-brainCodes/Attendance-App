import { Link } from 'react-router-dom'
import chart from '../assets/icons/chart.svg'
import logout from '../assets/icons/logout.svg'
import report from '../assets/icons/report.svg'
import spreadsheet from '../assets/icons/spreadsheet.svg'
import student from '../assets/icons/student.svg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='track'>
            <h1>TRACK</h1>
            <Link to='/'>
                <div className='link'>
                    <img src={spreadsheet} alt="spreadsheet" />
                    <button>Attendance Sheet</button>
                </div>
            </Link>
        </div>
        <div className='analyze'>
            <h1>ANALYZE</h1>
            <div>
                <Link to='/dashboard'>
                    <div className='link'>
                        <img src={chart} alt="chart" />
                        <button>Dashboard</button>
                    </div>
                </Link>
                <Link to='/report'>
                    <div className='link'>
                        <img src={report} alt="student" />
                        <button>Report</button>
                    </div>
                </Link>
            </div>
        </div>
        <div className='manage'>
            <h1>MANAGE</h1>
            <Link to='/student'> 
                <div className='link'>
                    <img src={student} alt="student" />
                    <button>Student</button>
                </div>
            </Link>
        </div>
        <div className='logout'>
            <img src={logout} alt="logout" />
            <h1>Logout</h1>
        </div>
    </div>
  )
}

export default Sidebar