import * as React from "react";
import { Provider } from "react-redux";
import { persistor, store } from "./adapters/redux";
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react';

import App from "./app/router";
function NativeApp(): JSX.Element {
    return <>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>

    </>
}

export default NativeApp;
