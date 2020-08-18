import React, { useRef } from "react";
import { Link } from "gatsby";
import navStyles from "./nav.module.css";

const Nav = React.forwardRef((props, ref) => {

    return (
        <section className={navStyles.navContainer} ref={ref}>
        
           <ul className={navStyles.mainNavList}>
              <Link style={{textDecoration: "none"}} to="/"><li className={navStyles.mainNavListItem}><span className={navStyles.navListLink}>Home</span></li></Link>
              <Link style={{textDecoration: "none"}}  to="/forex-page/"><li className={navStyles.mainNavListItem}><span className={navStyles.navListLink} href="#">Forex</span></li></Link>
              <Link style={{textDecoration: "none"}}  to="/commodities-page/"><li className={navStyles.mainNavListItem}><span className={navStyles.navListLink} href="#">Commodities</span></li></Link>
              <Link style={{textDecoration: "none"}}  to="/crypto-page/"><li className={navStyles.mainNavListItem}><span className={navStyles.navListLink} href="#">Cryptocurrencies</span></li></Link>
              <Link style={{textDecoration: "none"}}  to="/sectors-page"><li className={navStyles.mainNavListItem}><span className={navStyles.navListLink} href="#">Sectors</span></li></Link>
              <Link style={{textDecoration: "none"}}  to="/actives-page"><li className={navStyles.mainNavListItem}><span className={navStyles.navListLink} href="#">Actives</span></li></Link>
           
                
            </ul>
    
    </section>
    )
})


export default Nav;