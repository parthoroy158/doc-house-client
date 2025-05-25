import React, { useContext } from 'react';
import AuthContext from '../AuthContext/AuthContext';

const useAuth = () => {
    const useAuth = useContext(AuthContext)
    return useAuth;
};

export default useAuth;

