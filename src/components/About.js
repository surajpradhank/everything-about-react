import React from "react";
import User from "./User";
import Footer from "./Footer";

const About = () => {
    return (
        <>
            <div className="m-5 flex flex-col min-h-screen">
                <h1>About</h1>
                <h2>Everything about React</h2>
                <User />
            </div>
            <Footer />
        </>

    )
}

export default About;