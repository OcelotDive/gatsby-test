import React, {useRef, useState, useEffect} from "react";
import PropTypes from "prop-types";
import Key from "../../keys"

import searchStyles from "./searchBar.module.css";

const SearchBar = ({placeholder}) => {

  const stocksListUrl = 'https://financialmodelingprep.com/api/v3/company/stock/list';


  const searchRef = useRef("");
  const [displaySearches, setDisplaySearches] = useState(false);
  const [dataList, setDataList] = useState([]);



  useEffect(() => {
    fetch(`${stocksListUrl}${Key.fmpk}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setDataList(data.symbolList);
    });
  }, []);


  const getSearchInput = () => {
    searchRef.current.value.length >= 2 ? setDisplaySearches(true) : setDisplaySearches(false);
    
  }
  const resetSearchOnFocusLoss = () => {
    searchRef.current.value = "";
    setDisplaySearches(false);
  }


  return (
<>
   
  <input className={searchStyles.input}type="text" placeholder={placeholder} ref={searchRef} onChange={getSearchInput} onBlur={resetSearchOnFocusLoss}/>
  <div className={searchStyles.searchBar}></div>

  {displaySearches &&  <ul className={searchStyles.searchResultList}>
      <li>place holder</li>
    </ul>
    }
  
</>
  )
}

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired
  }
  
  SearchBar.defaultProps = {
    
  }

export default SearchBar;