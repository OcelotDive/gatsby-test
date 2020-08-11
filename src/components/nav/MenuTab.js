import React, {useRef} from "react";

import navStyles from "./nav.module.css";


const MenuTab = () => {
    const navRef = useRef();
 /*   handleBurgerClick(node: HTMLElement) {
        node.classList.toggle("change");
        this.displayMenu = !this.displayMenu;
        if(this.displayMenu){
          this.elRef.nativeElement.style.opacity = 1;
          this.elRef.nativeElement.style.zIndex = 9999;
        }
        else {
          this.elRef.nativeElement.style.opacity = 0;
          this.elRef.nativeElement.style.zIndex = -3;
        }
       }
*/
       const hideUnhideMenu = () => {
           let preScrollPosY = window.pageYOffset,
               preScrollPosX = window.pageXOffset;
           window.onscroll = () => {
               let currentScrollPosY = window.pageYOffset,
                   currentScrollPosX = window.pageXOffset;
               if(preScrollPosY > currentScrollPosY) {
                navRef.current.style.top = "200px";
                navRef.current.style.left = "20px";
               }
               else {
                   navRef.current.style.top  = "-100px";
                   navRef.current.style.left  = "-50px";
               }
               preScrollPosY = currentScrollPosY;
               preScrollPosX = currentScrollPosX;
           }
       }
       hideUnhideMenu();
    return (
        <section className={navStyles.menuNavContainer} ref={navRef}>
        <div className={navStyles.BurgerContainer}>
        <div className={navStyles.bar1}></div>
        <div className={navStyles.bar2}></div>
        <div className={navStyles.bar3}></div>
    </div>
    Menu
    </section>
    )
}


export default MenuTab;