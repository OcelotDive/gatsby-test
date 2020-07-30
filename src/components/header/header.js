import React from "react"
import PropTypes from "prop-types"
import SearchBar from "../searchBar/SearchBar";
import Logo from "../Logo";

import headerStyles from './header.module.css';


const Header = ({ siteTitle }) => (
  <header className={headerStyles.mainHeader}>
 <div className={headerStyles.mainHeaderLogoContainer}>
     
    </div>
    <div className={headerStyles.mainHeaderSearchContainer}>
      <SearchBar />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
