import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "../features/user/reducer";
export const rootReducer = combineReducers({
    user: userReducer,
})
