/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import './register.css'
const Register = () => {
  return (
    <div className="login">
      <div className="login__card">
        <div>
          <h1>WELCOME</h1>
          <label htmlFor="football">LOGIN</label>
          <input  type="text" placeholder="username" id="user" />
          <label htmlFor="football">PASSWORD</label>
          <input
            
            type="password"
            placeholder="password"
            id="pass"
          />
          <select id="select">
            <option value="male">MALE</option>
            <option value="famale">FAMALE</option>
          </select>
          <button  id="btn">
           SIGN UP
          </button>
        </div>
        <h2 className='title'>Now <NavLink to='/login'>login</NavLink></h2>
      </div>
    </div>
  );
};

export default Register;
