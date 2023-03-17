import React, { Suspense } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import ProtectedRoute from './protected-route';

// Pages
const LoginScreen = React.lazy(() => import("../screens/auth/login_screen"));
const RegisterScreen = React.lazy(() => import("../screens/auth/register_screen"));
const HomeScreen = React.lazy(() => import("../screens/home/home_screen"));

function Routers() {
    return (
        <Router>

            <Suspense fallback={<div></div>}>
                <Routes>
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="/register" element={<RegisterScreen />} />

                    <Route path='/' element={
                        <ProtectedRoute>
                            <HomeScreen />
                        </ProtectedRoute>
                    } />
                </Routes>


            </Suspense>

        </Router>
    );
}

export default Routers;
