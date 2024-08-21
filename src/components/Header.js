// @ts-nocheck
import logo from "./../../img/TaskyKitchn.png";
import { useState } from "react";

const Header = () => {
    let [btnName, setBtnName] = useState("Login")

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About </li>
                    <li>Contant Us</li>
                    <li>Cart </li>
                    <button className="login" onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
}

export default Header;