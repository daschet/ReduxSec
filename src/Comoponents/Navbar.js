import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

const Navbar = () => {

    const {authReducer} = useSelector((state)=>state)
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    
    const handleLogout = (() => {
        localStorage.removeItem("token")
        dispatch({
            type:"LOGOUT",
            payload: false,
        })
        Navigate("/")
    })
    console.log(authReducer.isLogin)

    return (
    <div className="nav-container">
    <Link to="/">
        <a>Homepage</a>
    </Link>

    {authReducer.isLogin == false ? (
    <Link to="/Login">
        <a>Login</a>
    </Link>
    ) : ( 
    <Link to="/">
    <a onClick={handleLogout}>Logout</a>
    </Link>
    )}

    <Link to="/Register">
        <a>Register</a>
    </Link>
    </div>
    )
}

export default Navbar