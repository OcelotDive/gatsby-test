import React from "react"
import PropTypes from "prop-types"

import searchStyles from "./searchBar.module.css";

const SearchBar = ({placeholder}) => (
<>
  <input className={searchStyles.input}type="text" placeholder={placeholder} />
  <div className={searchStyles.searchBar}></div>
</>

)

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired
  }
  
  SearchBar.defaultProps = {
    
  }

export default SearchBar;