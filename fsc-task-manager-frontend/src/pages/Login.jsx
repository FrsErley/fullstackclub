import { useNavigate } from 'react-router-dom'

import './Login.scss'
import logo2 from '../assets/images/logo-2.png'
import CustomButton from '../components/CustomButton'

const Login = () => {
  const navigate = useNavigate()

  const handleSignInClick = () => {
    navigate('/')
  }

  return (
        <div className="login-container">
            <img src={logo2} alt="" />
            <div className="button-container">
                <CustomButton onClick={handleSignInClick}>Entrar</CustomButton>
            </div>
        </div>
  )
}

export default Login
