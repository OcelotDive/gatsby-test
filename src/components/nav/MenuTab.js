import React, { useRef, useState } from "react"
import Draggable from "react-draggable"

import Nav from "../nav/Nav"
import navStyles from "./nav.module.css"
import burgerStyles from "./burgerStyles.css"

const MenuTab = () => {
  const menuRef = useRef()
  const burgerRef = useRef()
  const navRef = useRef()
  let [menuOpenClose, setMenuOpenClosed] = useState(false)

  const handleBurgerClick = e => {
    setMenuOpenClosed(!menuOpenClose)
    burgerRef.current.className = !menuOpenClose
      ? "burgerContainer change"
      : "burgerContainer"
    navRef.current.style.left = !menuOpenClose ? "0" : "-200px"
    navRef.current.style.opacity = !menuOpenClose ? "1" : "0"
    navRef.current.style.visibility = !menuOpenClose ? "visible" : "hidden"
  }

  if (typeof window !== "undefined") {
    const hideUnhideMenu = () => {
      let preScrollPosY = (window.onscroll = () => {
        let currentScrollPosY = window.pageYOffset

        if (preScrollPosY > currentScrollPosY) {
          menuRef.current.style.top = "250px"
        } else {
          menuRef.current.style.top = -currentScrollPosY + 250 + "px"
          navRef.current.style.left = "-200px"
          navRef.current.style.opacity = "0"
          setTimeout(() => {
            setMenuOpenClosed(false)
            burgerRef.current.className = "burgerContainer"
          }, 400)
        }

        preScrollPosY = currentScrollPosY
      })
    }

    hideUnhideMenu()
  }

  return (
    <>
      <Draggable>
        <section className="menuNavContainer" ref={menuRef} onClick={handleBurgerClick}>
          <div
            className="burgerContainer"
            onClick={handleBurgerClick}
            ref={burgerRef}
          >
            <div className="bar1" onClick={handleBurgerClick}></div>
            <div className="bar2" onClick={handleBurgerClick}></div>
            <div className="bar3" onClick={handleBurgerClick}></div>
          </div>
          <span>Menu</span>
          <Nav ref={navRef} />
        </section>
      </Draggable>
    </>
  )
}

export default MenuTab
