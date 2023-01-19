import { useSelector } from "react-redux"
import Navbar from "../Comoponents/Navbar"
import { useState } from "react"
import regAction from "../Redux/Action/regisAction"
import { useDispatch } from "react-redux"

const Register = () => {

    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleRegis = () => {
        const payload = {
            email: email,
            password: password,
            role: "Admin",
        }
        dispatch(regAction(payload));
        
        console.log(payload)
    }
    const {regisReducer} = useSelector((state)=>state)
    console.log (regisReducer.message)

    return (
         <div>
            <Navbar />
            <div className="register-section">
                <div>
                    <h1>Register Admin</h1>
                </div>
                <div className='register-input-bg'>
                    <input onChange={handleEmail} placeholder='email'type='email' className='register-input'/>
                    <input onChange={handlePassword} placeholder='password' type='password' className='register-input'/>
                </div>
                <div className='register-button-bg'>
                    <button onClick={handleRegis} className='register-button'>register</button>
                {regisReducer.message.length ? <h1>{regisReducer.message}</h1> : null }
                </div>
            </div>
        </div>
        
    )
}

export default Register