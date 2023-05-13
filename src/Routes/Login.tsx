// import Header from "../Components/Header"
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <>
      {/* <Header /> */}

      <div className="login">
        <div className="typography">
          <h1>Attendance <br /> <span>for your business</span> </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam 
            quibusdam tempora at cupiditate quis eum maiores libero veritatis? 
            Dicta facilis sint aliquid ipsum atque?
          </p>
        </div>

        <div className="form-main">
          <div className="form">
            <div className="user">
              <div className="teacher">
                <input type="checkbox" name="checkbox" id="" />
                <h1>Teacher</h1>
              </div>
              <div className="admin">
                <input type="checkbox" name="checkbox" id="" />
                <h1>Admin</h1>
              </div>
            </div>
            <div className="username">
              <h1>Username</h1>
              <input type="text" name="" id="" />
            </div>
            <div className="password">
              <h1>Password</h1>
              <input type="text" name="" id="" />
            </div>
            <div className="remember_me">
              <input type="checkbox" name="" id="" />
              <h1>Remember me</h1>
            </div>
            <Link to='/dashboard'>
              <button>Sign in</button>
            </Link>
            <div className="forgot_password">
              <h1>Forgot password?</h1>
              <h2>Don't have an account? <span>Register here</span> </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login