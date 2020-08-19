import React from "react"
import PropTypes from "prop-types"
import SearchBar from "../searchBar/SearchBar";
import AccessButton from "../accessButton/AccessButton";
import headerStyles from './header.module.css';


const Header = ({ siteTitle }) => (
  <section className={headerStyles.headerContainer}>
  <header className={headerStyles.mainHeader}>
    <div className={headerStyles.mainHeaderLogoContainer}>
    
    </div>
  <div className={headerStyles.accessButtonContainer}>
    <AccessButton innerText="Join" accessClass="joinButton"/>
    <AccessButton innerText="Login" accessClass="loginButton"/>
  </div>
    <SearchBar placeholder="Search by company name or symbol"/>
    
  </header>
  </section>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
