import React from "react";
import ReactDOM from "react-dom/client";

/**
 * <div id="parent">
 *      <div id="child1"> 
 *          <h1> H1 tag</h1>
 *          <h2> H2 tag</h2>
 *      <div id="child2">
 *          <h3> H3 tag</h>
 *          <h4> H4 tag</h4>
 * <div>
 */

// @ts-nocheck
const heading = React.createElement("h1", { id: "heading" }, "Hello React");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);