import { combineReducers } from "redux";
import regisReducer from "./RegisReducer";
import authReducer from "./AuthReducer";

const rootReducer = combineReducers ({
    regisReducer : regisReducer, authReducer : authReducer,
})

export default rootReducer