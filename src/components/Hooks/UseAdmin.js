import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const UseAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    const {url} = useContext(AuthContext);

    useEffect(()=>{
          if(email){
            axios.get(`${url}/admin/${email}`)
            .then(res => {
                setIsAdmin(res.data.admin);
                setAdminLoading(false);


            });
          }
    },[email, url])
    return [isAdmin,adminLoading]
};

export default UseAdmin;