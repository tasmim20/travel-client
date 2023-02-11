import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import UseAdmin from '../../Hooks/UseAdmin';

const AdminRoute = ({children}) => {
    const { user, loading} = useContext(AuthContext)
     const [isAdmin, adminLoading] = UseAdmin(user?.email);
    if(adminLoading){
        return <p>loading.....</p>
    }
    if(isAdmin){
        return children;
    }
    return <Navigate to='/dashBoard' ></Navigate>
};

export default AdminRoute;