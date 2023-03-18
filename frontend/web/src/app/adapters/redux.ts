/**
 * Redux persist requires the explicit "storage" when setting up the "store"
 * So we have to handle it in each platform
 * We use async-storage for native and local-storage for web
 */

import { setupStore, rootReducer } from "core";
import storage from 'reduxjs-toolkit-persist/lib/storage'
const persistConfig = {
    reducers: rootReducer,
    key: 'root',
    storage: storage,
    blacklist: [],
};

export const { store, persistor } = setupStore(persistConfig);