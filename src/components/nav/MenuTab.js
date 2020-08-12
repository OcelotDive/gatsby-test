import React, {useRef, useState} from "react";

import navStyles from "./nav.module.css";
import burgerStyles from "./burgerStyles.css";


const MenuTab = () => {
    const navRef = useRef();
    let [menuOpenClose, setMenuOpenClosed] = useState(false);


       const handleBurgerClick = (e) => {
         let burger = document.querySelector(".burgerContainer");
         setMenuOpenClosed(!menuOpenClose);
         burger.className = !menuOpenClose ?  "burgerContainer change" : "burgerContainer";
           
       }

       const hideUnhideMenu = () => {
           let preScrollPosY = window.pageYOffset;
            
           window.onscroll = () => {
               let currentScrollPosY = window.pageYOffset;
                  
               if(preScrollPosY > currentScrollPosY) {
                navRef.current.style.top = "200px";
               }
               else {
                   navRef.current.style.top  = "-100px";   
               }
               preScrollPosY = currentScrollPosY; 
           }
       }
       
       hideUnhideMenu();


    return (
        <section className="menuNavContainer" ref={navRef}>
        <div className="burgerContainer" onClick={handleBurgerClick}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
    </div>
    Menu
    </section>
    )
}


export default MenuTab;