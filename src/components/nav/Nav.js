import React, { useRef } from "react";

import navStyles from "./nav.module.css";

const Nav = React.forwardRef((props, ref) => {

    return (
        <section className={navStyles.navContainer} ref={ref}>
        
           <ul className={navStyles.mainNavList}>
                <li className={navStyles.mainNavListItem}><a className={navStyles.navListLink} href="#">Submenu 1</a></li>
                <li className={navStyles.mainNavListItem}><a className={navStyles.navListLink} href="#">Submenu 2</a></li>
                <li className={navStyles.mainNavListItem}><a className={navStyles.navListLink} href="#">Submenu 3</a></li>
                <li className={navStyles.mainNavListItem}><a className={navStyles.navListLink} href="#">Submenu 4</a></li>
                <li className={navStyles.mainNavListItem}><a className={navStyles.navListLink} href="#">Submenu 5</a></li>
                <li className={navStyles.mainNavListItem}><a className={navStyles.navListLink} href="#">Submenu 5</a></li>
                <li className={navStyles.mainNavListItem}><a className={navStyles.navListLink} href="#">Submenu 5</a></li>
                <li className={navStyles.mainNavListItem}><a className={navStyles.navListLink} href="#">Submenu 5</a></li>
                <li className={navStyles.mainNavListItem}><a className={navStyles.navListLink} href="#">Submenu 5</a></li>
                <li className={navStyles.mainNavListItem}><a className={navStyles.navListLink} href="#">Submenu 5</a></li>
                <li className={navStyles.mainNavListItem}><a className={navStyles.navListLink} href="#">Submenu 5</a></li>
                <li className={navStyles.mainNavListItem}><a className={navStyles.navListLink} href="#">Submenu 5</a></li>
                <li className={navStyles.mainNavListItem}><a className={navStyles.navListLink} href="#">Submenu 5</a></li>
                <li className={navStyles.mainNavListItem}><a className={navStyles.navListLink} href="#">Submenu 5</a></li>
                <li className={navStyles.mainNavListItem}><a className={navStyles.navListLink} href="#">Submenu 5</a></li>
                <li className={navStyles.mainNavListItem}><a className={navStyles.navListLink} href="#">Submenu 5</a></li>
                <li className={navStyles.mainNavListItem}><a className={navStyles.navListLink} href="#">Submenu 5</a></li>
                <li className={navStyles.mainNavListItem}><a className={navStyles.navListLink} href="#">Submenu 5</a></li>
                
            </ul>
    
    </section>
    )
})


export default Nav;