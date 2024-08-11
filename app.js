import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 className="head" id="heading">
    Hello from JSX</h1>;


const headingComponent = () => {
    return <h1>heading functional component</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

