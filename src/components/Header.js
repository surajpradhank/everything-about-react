// @ts-nocheck
import { Link } from "react-router-dom";
import logo from "./../../img/TaskyKitchn.png";
import { useState, useEffect } from "react";

const Header = () => {
    let [btnName, setBtnName] = useState("Login")

    useEffect(() => { }, []);

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About </Link></li>
                    <li><Link to="/contact">Contant Us</Link></li>
                    <li>Cart </li>
                    <button className="login" onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                    }}>
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    );
}

export default Header;