import React from "react";
import ReactDOM from "react-dom/client";
import Txt from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.querySelector('#root'));

const obj = [
    { name: "Kiryl Shchasny", age: 23, key: "K"},
    { name: "Brett Pitt", age: 25, key: "B"},
    {name: "Johny Depp", age: 32, key: "J"}
]

function Res() {
    return (
        <div className="app">
            <h1>Hello World!</h1>
            <Txt data={obj}/>
        </div>
    );
}

root.render(
    <React.StrictMode>
        <Res/>
    </React.StrictMode>
);