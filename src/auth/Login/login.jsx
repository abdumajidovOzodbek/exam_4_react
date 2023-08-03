/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./login.css";
import { gql, useMutation } from "@apollo/client";
const Login = () => {
  const [userEl, setUser] = useState('')
  const [passEl, setPass] = useState();
  const navigate = useNavigate();

  async function getToken(per) {
    const login_admin = gql`
mutation Mutation($admin: String!, $password: String!) {
  login(admin: $admin, password: $password) {
    token
    message
  }
}
`
    const [login,{data}]=useMutation(login_admin)
    return (
      <div className="login">
        <div className="login__card">
          <div>
            <h1>WELCOME</h1>
            <label htmlFor="football">LOGIN</label>
            <input onChange={(e) => setUser(e.target.value)} type="text" placeholder="username" id="user" />
            <label htmlFor="football">PASSWORD</label>
            <input
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="password"
              id="pass"
            />
            <button onClick={async() => {
await login({variables:{
  admin:userEl,
  password:passEl
}})
localStorage.setItem('token',data.token)
            }} id="btn">
              LOGIN
            </button>
          </div>

        </div>
      </div>
    );
  }
};

export default Login;
