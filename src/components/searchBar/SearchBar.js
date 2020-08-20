import React, {useRef, useState, useEffect} from "react";
import PropTypes from "prop-types";
import Key from "../../keys"
import searchStyles from "./searchBar.module.css";
import { node } from "prop-types";

const SearchBar = ({placeholder}) => {
  
  const stocksListUrl = 'https://financialmodelingprep.com/api/v3/company/stock/list';


  const searchRef = useRef("");
  const outerRef = useRef("outer");

  const [displaySearches, setDisplaySearches] = useState(false);
  const [dataList, setDataList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);


 

  useEffect(() => {
    fetch(`${stocksListUrl}${Key.fmpk}`)
    .then((response) => response.json())
    .then((data) => {

      setDataList(data.symbolsList);
   
      
    });
    document.addEventListener("mousedown", handleClick,false);
  }, []);

  const handleClick = (e) => {
    if(outerRef.current.contains(e.target)) {
      alert("in search")
    }
    return;
  }


  const getSearchInput = () => {
    
    searchRef.current.value.length >= 2 ? setDisplaySearches(true) : setDisplaySearches(false);

    
    setFilteredList(dataList.filter(company =>  {
     
     if(company.name !== undefined) {
       return company.name.toLowerCase().indexOf(searchRef.current.value.toLowerCase()) !== -1
       || company.symbol.toLowerCase().indexOf(searchRef.current.value.toLowerCase()) !== - 1
     } 
    })
    
    )

  }

  const testIfSearchResults = () => {
    if(displaySearches) {
      searchRef.current.focus();
    }
  }

  

  return (
<>
    <section ref={outerRef}>
  <input className={searchStyles.input}type="text" placeholder={placeholder} ref={searchRef} onChange={getSearchInput}  onBlur={testIfSearchResults}/>
  <div className={searchStyles.searchBar}></div>

  {displaySearches &&  <ul className={searchStyles.searchResultList} >
      {
       filteredList.map(companyObj => <li key={companyObj.symbol} className={searchStyles.searchBarListItem}>{companyObj.symbol} {companyObj.name}</li>)
      }
    </ul>
    }
</section>
</>
  )
}

/*SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired
  }
  
  SearchBar.defaultProps = {
    
  }*/

export default SearchBar;