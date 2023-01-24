import axios from "axios"

const AuthAction = (payload) => (dispatch) =>{
    axios
    .post("https://bootcamp-rent-cars.herokuapp.com/admin/auth/login" ,payload)
    .then((res) =>{
        localStorage.setItem("token", res.data.access_token)
        dispatch({
            type: "LOGIN",
            payload: true,   
        })
        })
    .catch((err) => console.log(err))
}

export default AuthAction

