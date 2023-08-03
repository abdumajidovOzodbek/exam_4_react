/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import AuthProvider from '../auth/authProvide/authProvider';
import Footer from '../components/footer/footer';
// import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import './l.css'
const Layout = () => {
    return (
        <>
            <Navbar/>
            <div className="out">
            {
                <AuthProvider>
                    <Outlet/>
                </AuthProvider>
            }
            </div>
            <Footer/>
        </>
    );
}

export default Layout;
