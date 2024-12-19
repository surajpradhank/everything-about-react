// @ts-nocheck
import { Link } from "react-router-dom";
import logo from "./../../img/TaskyKitchn.png";
import { useState, useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    let [btnName, setBtnName] = useState("Login")

    const { loggedInUser } = useContext(UserContext)
    const cartItemsSelector = useSelector((store) => store.cart.items)

    return (
        <div className="flex justify-between shadow-md">
            <div className="logo-container">
                <Link to="/"><img className="w-28" src={logo} /></Link>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="nav-li"><Link to="/">Home</Link></li>
                    <li className="nav-li"><Link to="/about">About </Link></li>
                    <li className="nav-li"><Link to="/contact">Contant Us</Link></li>
                    <li className="nav-li"><Link to="/grocery">Grocery</Link></li>
                    <li className="nav-li">Cart - {cartItemsSelector.length} </li>
                    <button className="nav-li login" onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                    }}>
                        {btnName}
                    </button>
                    <li className="nav-li font-bold  hover:text-red-700">{loggedInUser}</li>

                </ul>
            </div>
        </div>
    );
}

export default Header;