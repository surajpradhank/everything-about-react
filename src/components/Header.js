// @ts-nocheck
import { Link } from "react-router-dom";
import logo from "./../../img/TaskyKitchn.png";
import { useState, useEffect } from "react";

const Header = () => {
    let [btnName, setBtnName] = useState("Login")

    useEffect(() => { }, []);

    return (
        <div className="flex justify-between shadow-md">
            <div className="logo-container">
                <img className="w-28" src={logo} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="nav-li"><Link to="/">Home</Link></li>
                    <li className="nav-li"><Link to="/about">About </Link></li>
                    <li className="nav-li"><Link to="/contact">Contant Us</Link></li>
                    <li className="nav-li"><Link to="/grocery">Grocery</Link></li>
                    <li className="nav-li">Cart </li>
                    <button className="nav-li login" onClick={() => {
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