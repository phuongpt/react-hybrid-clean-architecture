import { userSelector } from 'core';
import React, { Suspense } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import { useAppSelector } from '../hook';
import ProtectedRoute from './protected-route';

// Pages
const LoginScreen = React.lazy(() => import("../screens/auth/login_screen"));
const RegisterScreen = React.lazy(() => import("../screens/auth/register_screen"));
const HomeScreen = React.lazy(() => import("../screens/home/home_screen"));

function Routers() {
    const auth = !!useAppSelector(s => userSelector(s.user)).data;


    return (
        <Router>

            <Suspense fallback={<div></div>}>
                {!auth ?
                    <Routes>
                        <Route path="*" element={<LoginScreen />} />
                        <Route path="/register" element={<RegisterScreen />} />
                    </Routes>
                    :
                    <Routes>
                        <Route path="*" element={<HomeScreen />} />
                        <Route path='/' element={
                            <HomeScreen />
                        } />
                    </Routes>}



            </Suspense>

        </Router>
    );
}

export default Routers;
