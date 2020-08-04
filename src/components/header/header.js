import React from "react"
import PropTypes from "prop-types"
import SearchBar from "../searchBar/SearchBar";
import Logo from "../Logo";
import AccessButton from "../accessButton/AccessButton";

import headerStyles from './header.module.css';


const Header = ({ siteTitle }) => (
  <header className={headerStyles.mainHeader}>
 <div className={headerStyles.mainHeaderLogoContainer}>
    {/* <Logo /> */}
    </div>
  <div className={headerStyles.accessButtonContainer}>
    <AccessButton innerText="Join" accessClass="joinButton"/>
    <AccessButton innerText="Login" accessClass="loginButton"/>
  </div>


      <SearchBar />
 
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
