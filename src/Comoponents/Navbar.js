import {Link} from "react-router-dom"

const Navbar = () => {
    return (
    <div className="nav-container">
    <Link to="/">
        <a>Homepage</a>
    </Link>
    <Link to="/Login">
        <a>Login</a>
    </Link>
    <Link to="/Register">
        <a>Register</a>
    </Link>
    </div>
    )
}

export default Navbar