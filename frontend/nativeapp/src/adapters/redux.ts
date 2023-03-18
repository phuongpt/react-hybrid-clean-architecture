/**
 * Redux persist requires the explicit "storage" when setting up the "store"
 * So we have to handle it in each platform
 * We use async-storage for native and local-storage for web
 */

import { rootReducer, setupStore } from 'core';
import storage from '@react-native-async-storage/async-storage';
const persistConfig = {
    reducers: rootReducer,
    key: 'root',
    storage: storage,
    blacklist: [],
};

export const { store, persistor } = setupStore(persistConfig);