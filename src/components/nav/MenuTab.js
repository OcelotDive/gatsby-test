import React, {useRef, useState} from "react";

import Nav from "../nav/Nav";
import navStyles from "./nav.module.css";
import burgerStyles from "./burgerStyles.css";


const MenuTab = () => {
    const menuRef = useRef();
    const burgerRef = useRef();
    const navRef = useRef();
    let [menuOpenClose, setMenuOpenClosed] = useState(false);
 

       const handleBurgerClick = (e) => {
         
         setMenuOpenClosed(!menuOpenClose);
         burgerRef.current.className = !menuOpenClose ?  "burgerContainer change" : "burgerContainer";     
       }

      

       const hideUnhideMenu = () => {
           let preScrollPosY = window.pageYOffset;
            
           window.onscroll = () => {
               let currentScrollPosY = window.pageYOffset;
                  
               if(preScrollPosY > currentScrollPosY) {
                menuRef.current.style.top = "200px";
                navRef.current.style.left = "0";
                
               }
               else {
                   menuRef.current.style.top  = "-1000px";
                   navRef.current.style.left = "-1000px";
                   setTimeout(() => {
                    setMenuOpenClosed(false);
                    burgerRef.current.className = "burgerContainer";
                    navRef.current.style.left = "-1000px";

                   }, 400)
            
               }
              
               preScrollPosY = currentScrollPosY; 
           }
       }

       hideUnhideMenu();


    return (
        <>
        <section className="menuNavContainer" ref={menuRef}>
        <div className="burgerContainer" onClick={handleBurgerClick} ref={burgerRef}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
        </div>
        <span>Menu</span>
        <Nav ref={navRef}/>
    </section>
        
    </>
    )
}


export default MenuTab;