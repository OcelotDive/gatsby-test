import React from "react";

import spinnerStyles from "./spinnerStyles.css";
const Spinner = () => {

    return (
      
        <div className="spinnerContainer">
            <div className="dash-spinner">
                <div className="dash-spinner__bottom">
                    <div className="dash-bar dash-bar__one"></div>
                    <div className='dash-bar dash-bar__two'></div>
                    <div className='dash-bar dash-bar__three'></div>
                </div>
            <div className='dash-spinner__background'>
                <div className='dash-dot dash-dot__one'></div>
                <div className='dash-dot dash-dot__two'></div>
                <div className='dash-dot dash-dot__three'></div>
                <div className='dash-dot dash-dot__four'></div>
            <div className='dash-spinner__bottom'>
                <div className='dash-vert dash-vert__one'></div>
                <div className='dash-vert dash-vert__two'></div>
                <div className='dash-vert dash-vert__three'></div>
                <div className='dash-vert dash-vert__four'></div>
            </div>
            </div>
            </div>
            <div className='dash-spinner__bottom'>
            <div className='dash-spinner-title'><p>Loading...</p></div>
            </div>
        </div>
    )
}

export  default Spinner 