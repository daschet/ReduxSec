const initialState = {
    isLogin : false
}
const authReducer  = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...initialState, //...biar yang lain ga ke timpa//
                isLogin: action.payload,
            }
        case "LOGOUT":
            return{
                ...initialState,
                isLogin: action.payload
            }
            default:
                return state
    }
}

export default authReducer