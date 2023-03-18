import { rootReducer } from "./reducers";
import { Action, AnyAction, configureStore } from '@reduxjs/toolkit'
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import logger from 'redux-logger'
import { persistReducer, persistStore } from "reduxjs-toolkit-persist";
import { Persistor } from "reduxjs-toolkit-persist/lib/types";

const _dev = process.env.NODE_ENV !== 'production';

export const setupStore = (persistConfig: any): { persistor: Persistor, store: any } => {
    const store = configureStore({
        reducer: persistReducer(persistConfig, rootReducer),
        devTools: _dev,
        middleware: _dev ? [thunk, logger] : [thunk],
    });
    return {
        store: store,
        persistor: persistStore(store)
    }
};

export type AppState = ReturnType<typeof rootReducer>;
export type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;
export type AppDispatch = any;
export type RootState = ReturnType<any>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
