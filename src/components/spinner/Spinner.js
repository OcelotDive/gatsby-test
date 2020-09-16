import React, { useState, useEffect } from "react"

import spinnerStyles from "./spinnerStyles.css"
const Spinner = () => {
  const [textChange, setTextChange] = useState("Loading...")

  useEffect(() => {
    const displayTime = setTimeout(() => {
      setTextChange("Full data not available at this time.")
    }, 30000)
    if (textChange != "Loading...") {
      clearTimeout(displayTime)
    }
  }, [textChange])

  const spinnerTitleClass =
    textChange === "Loading..."
      ? "dash-spinner-title"
      : "dash-spinner-title-red"
  return (
    <>
      {textChange === "Loading..." ? (
        <div className="spinnerContainer">
          <div className="dash-spinner">
            <div className="dash-spinner__bottom">
              <div className="dash-bar dash-bar__one"></div>
              <div className="dash-bar dash-bar__two"></div>
              <div className="dash-bar dash-bar__three"></div>
            </div>
            <div className="dash-spinner__background">
              <div className="dash-dot dash-dot__one"></div>
              <div className="dash-dot dash-dot__two"></div>
              <div className="dash-dot dash-dot__three"></div>
              <div className="dash-dot dash-dot__four"></div>
              <div className="dash-spinner__bottom">
                <div className="dash-vert dash-vert__one"></div>
                <div className="dash-vert dash-vert__two"></div>
                <div className="dash-vert dash-vert__three"></div>
                <div className="dash-vert dash-vert__four"></div>
              </div>
            </div>
          </div>
          <div className="dash-spinner__bottom">
            <div className={spinnerTitleClass}>
              <p>{textChange}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="dash-spinner__bottom">
          <div className={spinnerTitleClass}>
            <p>{textChange}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Spinner
