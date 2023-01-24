import { useState } from "react";
import Navbar from "../Comoponents/Navbar";
import logAction from "../Redux/Action/logAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const Login = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const Navigate = useNavigate()

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => { 
        setPassword(e.target.value)
    }

    const handleLogin = () => {
        const payload = {
            email: email,
            password: password
        }
        dispatch(logAction(payload))
    }

    const {authReducer} = useSelector((rootReducer) => rootReducer)
    console.log(authReducer.isLogin)
    
    useEffect(() => {("")
            handleRedirect()
    }, [authReducer.isLogin]);

    const handleRedirect = () => {
        setTimeout(() => {
        if (authReducer.isLogin == true) {
            Navigate("/")
        } 
    }, 2000)
    }
    return ( 
        <div>
            <Navbar />
            {(
                    <div className="register-section">
                        <div>
                            <h1>Login Admin</h1>
                        </div>
                        <div className='register-input-bg'>
                            <input onChange={handleEmail} placeholder='input email'type='email' className='register-input'/>
                            <input onChange={handlePassword} placeholder='input password' type='password' className='register-input'/>
                        </div>
                        <div className='register-button-bg'>
                            <button onClick={handleLogin} className='register-button'>login</button>
                            {authReducer.isLogin == false ? null : <h1>Anda telah Login</h1> }
                        </div>
                    </div>)
            }
            
        </div>
        
     );
}

export default Login