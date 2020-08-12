import React, { useRef } from "react";

import navStyles from "./nav.module.css";

const Nav = React.forwardRef((props, ref) => {

    return (
        <section className={navStyles.navContainer} ref={ref}>
        
           <ul className={navStyles.mainNavList}>
                <li className={navStyles.mainNavListItem}><a className={navStyles.navListLink} href="#">Home</a></li>
                <li className={navStyles.mainNavListItem}><a className={navStyles.navListLink} href="#">Forex</a></li>
                <li className={navStyles.mainNavListItem}><a className={navStyles.navListLink} href="#">Commodities</a></li>
                <li className={navStyles.mainNavListItem}><a className={navStyles.navListLink} href="#">Cryptocurrency</a></li>
                <li className={navStyles.mainNavListItem}><a className={navStyles.navListLink} href="#">Sectors</a></li>
                <li className={navStyles.mainNavListItem}><a className={navStyles.navListLink} href="#">Actives</a></li>
           
                
            </ul>
    
    </section>
    )
})


export default Nav;