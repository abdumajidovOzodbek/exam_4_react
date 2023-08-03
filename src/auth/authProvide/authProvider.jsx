/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthProvider = ({children}) => {
    const navigate = useNavigate()

    // eslint-disable-next-line no-unused-vars
    const [token,setToken] = useState(localStorage.getItem('token'))

    useEffect(() =>{
        if( !token || token === null ){
             navigate('/login')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[token])

    return (
        <>
            {
             children
            }
        </>
    );
}

export default AuthProvider;

