/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Admin = () => {
    return (
        <div className='holder'>
         <NavLink style={{height:'50px'}} className='holder_cart' to='panel'><h2>edit products</h2></NavLink>
            <NavLink style={{height:'50px'}} className='holder_cart' to='admin/panel'><h2>orders are waiting</h2></NavLink>
        </div>
    );
}

export default Admin;
