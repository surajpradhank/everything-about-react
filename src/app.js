// @ts-nocheck
import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/Restaurant/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/cart";
const Grocery = lazy(() => import("./components/Grocery"));

const Applayout = () => {

    //Now after authentication we got the real user, lets say User is Suraj Pradhan

    const [username, setUserName] = useState("Suraj Pradhan")

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: username, setUserName }} >
                <div>
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider >
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: (<Suspense fallback={<h1>Loading..</h1>}><Grocery /></Suspense>)
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/cart",
                element: <Cart />
            }

        ],
        errorElement: <Error />
    }

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <RouterProvider router={appRouter} />
    </React.StrictMode>
);
