import React from "react";

import Abs from './accessButton.module.css';

const AccessButton = ({innerText}) => {
    const accessClass = innerText === "Join" ? "joinButton" : innerText === "Login" ? "loginButton" : "";

    return (
    <button className={Abs[accessClass]} type="button" aria-label="AccessButton" name={innerText}>{innerText}</button>
    )
}



export default AccessButton;