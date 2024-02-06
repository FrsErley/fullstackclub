import './Login.scss'
import logo2 from '../assets/images/logo-2.png'
import CustomButton from '../components/CustomButton'

const Login = () => {
    return (
        <div className="login-container">
            <img src={logo2} alt="" />
            <div className="button-container">
                <CustomButton>Entrar</CustomButton>
            </div>
        </div>
    )
}

export default Login