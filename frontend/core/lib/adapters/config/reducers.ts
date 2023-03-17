import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "reduxjs-toolkit-persist";
import { userReducer } from "../features/user/reducer";
import AsyncStorage from '@react-native-async-storage/async-storage';
export const reducers = combineReducers({
    user: userReducer,
})

const reduxPersistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: [],
};


export const rootReducer = persistReducer(reduxPersistConfig, reducers)