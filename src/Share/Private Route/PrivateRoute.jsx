import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    if (user) {
        return children;
    }
    if (loading) {
        return <span className="loading loading-ring loading-xl"></span>
    }

    return <Navigate to='/logIn'></Navigate>


};

export default PrivateRoute;