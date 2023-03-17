import { rootReducer } from "./reducers";
import { Action, AnyAction, configureStore } from '@reduxjs/toolkit'
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import logger from 'redux-logger'
import { persistStore } from "reduxjs-toolkit-persist";

const _dev = process.env.NODE_ENV !== 'production';

export const store = configureStore({
    reducer: rootReducer,
    devTools: _dev,
    middleware: _dev ? [thunk, logger] : [thunk],
});

export type AppState = ReturnType<typeof rootReducer>;
export type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
export const persistor = persistStore(store);
