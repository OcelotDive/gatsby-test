import React, { useRef, useState, useEffect } from "react"
import Key from "../../keys"
import { Link } from "gatsby"
import searchStyles from "./searchBar.module.css"

const SearchBar = ({ placeholder }) => {
  const stocksListUrl =
    "https://financialmodelingprep.com/api/v3/company/stock/list"

  const searchRef = useRef("")
  const resetButton = useRef()

  const [displaySearches, setDisplaySearches] = useState(false)
  const [dataList, setDataList] = useState([])
  const [filteredList, setFilteredList] = useState([])

  useEffect(() => {
    fetch(`${stocksListUrl}${Key.fmpk}`)
      .then(response => response.json())
      .then(data => {
        setDataList(data.symbolsList)
      })
  }, [])

  const getSearchInput = () => {
    searchRef.current.value.length >= 3
      ? setDisplaySearches(true)
      : setDisplaySearches(false)

    setFilteredList(
      dataList.filter(company => {
        if (company.name !== undefined) {
          return (
            company.name
              .toLowerCase()
              .indexOf(searchRef.current.value.toLowerCase()) !== -1 ||
            company.symbol
              .toLowerCase()
              .indexOf(searchRef.current.value.toLowerCase()) !== -1
          )
        }
      })
    )
  }

  const testIfSearchResults = e => {
    if (displaySearches) {
      searchRef.current.focus()
    }
  }

  const reset = e => {
    setDisplaySearches(false)
    searchRef.current.value = ""
  }

  return (
    <>
      
        <input
          className={searchStyles.input}
          type="text"
          placeholder={placeholder}
          ref={searchRef}
          onChange={getSearchInput}
          onBlur={testIfSearchResults}
        />
        <button
          className={searchStyles.closeIcon}
          type="reset"
          onClick={reset}
          ref={resetButton}
        ></button>
        <div className={searchStyles.searchBar}></div>

        {displaySearches && (
          <ul className={searchStyles.searchResultList}>
            {filteredList.map(companyObj => (
              <Link
                style={{ textDecoration: "none", display: "flex" }}
                to={`/company-page/#${companyObj.symbol}`}
              >
                <li
                  key={companyObj.symbol}
                  className={searchStyles.searchBarListItem}
                  onClick={reset}
                >
                  {companyObj.symbol} {companyObj.name}
                </li>
              </Link>
            ))}
          </ul>
        )}
    
    </>
  )
}

export default SearchBar
