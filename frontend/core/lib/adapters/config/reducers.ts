import { combineReducers } from "redux";
import { userReducer } from "../features/user/reducer";

export const rootReducer = combineReducers({
    user: userReducer,
});
