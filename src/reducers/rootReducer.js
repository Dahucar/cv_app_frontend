import { combineReducers } from "redux";

// reducers 
import { authReducer } from "./authReducer";

export const rootReducer = combineReducers({
    // reducers list
    auth: authReducer
});