import React from "react"
import PropTypes from "prop-types"

import searchStyles from "./searchBar.module.css";

const SearchBar = () => (
<>
  <input className={searchStyles.input}type="text" placeholder="Tipsters, Fixtures, Sport" />
  <div className={searchStyles.searchBar}></div>
</>

)

SearchBar.propTypes = {
   
  }
  
  SearchBar.defaultProps = {
    
  }

export default SearchBar;