// eslint-disable-next-line no-unused-vars
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */

import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./auth/Login/login";
import Register from "./auth/Register/register";
import Layout from "./layout/layout";
import Favorite2 from "./pages/favorite/favorite2";
import Home from "./pages/home";
import Order from "./pages/order/order";
import Shop from "./pages/shopping/shop";
import SingleProduct from "./pages/singleProduct/singleProduct";
import Term from "./pages/term/term";
import CartRes from "./pages/cart/cart";
import Crud from "./pages/cart/crudcard";
import Edit from "./pages/cart/editpanel";
import Admin from "./pages/cart/admin";
import Create from "./pages/cart/create";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/restarant" element={<CartRes />} />
            <Route path="admin" element={<Admin />} />
            <Route path="create/post" element={<Create />} />

            <Route path="/restarant/:id" element={<Home />} />
            <Route path="heart" element={<Favorite2 />} />
            <Route path="zakaz" element={<Order />} />
            <Route path="shop" element={<Shop />} />
            <Route path="term" element={<Term />} />
            <Route path="admin/panel" element={<Crud />} />
            <Route path="/:productId" element={<SingleProduct />} />
            <Route path="admin/panel/:id" element={<Edit />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
