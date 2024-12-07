import React from "react";
import cartLogo from "../../images/icons/shoppingcarticon.jpg";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
    return (
        <>
        <div className="loginBar">
        <Link to="/Login">Login</Link>
        <img src={cartLogo} className="cartIcon" alt="shopping cart icon"></img>
      </div>
      </>
    )
}

export default Login;