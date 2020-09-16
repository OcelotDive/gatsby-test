import React, { useEffect, useState } from "react"
import Spinner from "../spinner/Spinner"
import axios from "axios"
import { Link } from "gatsby"

import Key from "../../keys"

import mostSearchedStyles from "./mostSearched.module.css"

const MostSearched = () => {
  const mostSearchedUrl =
    "https://financialmodelingprep.com/api/v3/quote/AAPL,FB,GOOGL,AMZN,MSFT,NVDA,ZNGA,WBA,PIH,JPM,TSLA,XOM,UNH,MCK,AXP"
  const companyUrl = "https://financialmodelingprep.com/api/v3/company/profile/"

  let [dataList, setDataList] = useState([])
  let [nameSorted, setNameSorted] = useState(false)
  let [priceSorted, setPriceSorted] = useState(false)
  let [changeSorted, setChangeSorted] = useState(false)
  let [companyImages, setCompanyImages] = useState([])
  const nameClass = !nameSorted ? "triDown" : "triUp"
  const priceClass = !priceSorted ? "triDown" : "triUp"
  const changeClass = !changeSorted ? "triDown" : "triUp"

  useEffect(() => {
    fetch(`${mostSearchedUrl}${Key.fmpk}`)
      .then(response => response.json())
      .then(data => {
        setDataList(data.slice(0, 6))
      })
  }, [])

  useEffect(() => {
    dataList.map(item => {
      fetch(`${companyUrl}${item.symbol}${Key.fmpk}`)
        .then(response => response.json())
        .then(data => {
          companyImages.push(data.profile.image)
          setCompanyImages([...companyImages])
        })
    })
  }, [dataList])

  /*useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${mostSearchedUrl}${Key.fmpk}`)
      const data = result.data
      setDataList(data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchImages = () => {
      dataList.map(async item => {
        console.log("test")
        const imageResult = await axios(
          `${companyUrl}${item.symbol}${Key.fmpk}`
        )
        companyImages.push(imageResult.data.profile.image)
        console.warn(imageResult)
        setCompanyImages([...companyImages])
      })
    }
    fetchImages()
  }, [dataList])


  */
  const nameSort = () => {
    if (!nameSorted) {
      dataList.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1
        }
        return 0
      })
      setPriceSorted(false)
      setChangeSorted(false)
      setNameSorted(!nameSorted)
    } else {
      dataList.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return -1
        }
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return 1
        }
        return 0
      })
      setPriceSorted(false)
      setChangeSorted(false)
      setNameSorted(!nameSorted)
    }
    setDataList([...dataList])
  }

  const priceSort = () => {
    if (!priceSorted) {
      dataList.sort((a, b) => Number(a.price) - Number(b.price))
    } else {
      dataList.sort((a, b) => Number(b.price) - Number(a.price))
    }
    setNameSorted(false)
    setChangeSorted(false)
    setPriceSorted(!priceSorted)
    setDataList([...dataList])
  }

  const changeSort = () => {
    if (!changeSorted) {
      dataList.sort((a, b) => Number(a.change) - Number(b.change))
    } else {
      dataList.sort((a, b) => Number(b.change) - Number(a.change))
    }
    setNameSorted(false)
    setPriceSorted(false)
    setChangeSorted(!changeSorted)
    setDataList([...dataList])
  }

  return (
    <>
      <h4 className="pageHeader">Most Searched</h4>
      {dataList.length > 0 ? (
        <main className="mainContentContainer">
          <table>
            <tbody>
              <tr>
                <th className="tableHeader"></th>
                <th className="tableHeader">Symbol</th>
                <th className="tableHeader" onClick={nameSort}>
                  NAME<span className={nameClass}></span>
                </th>
                <th className="tableHeader" onClick={priceSort}>
                  PRICE <span className={priceClass}></span>
                </th>
                <th className="tableHeader" onClick={changeSort}>
                  CHANGE <span className={changeClass}></span>
                </th>
                <th className="tableHeader">CHANGE(%)</th>
              </tr>

              {dataList.map(company => {
                const changeClass =
                  company.change > 0
                    ? "pricePositive"
                    : company.change < 0
                    ? "priceNegative"
                    : "priceNull"
                const companyImg = companyImages.find(image =>
                  image.endsWith(`${company.symbol}.jpg`)
                )
                return (
                  <tr key={company.symbol + company.symbol}>
                    <td>
                      <img
                        className={mostSearchedStyles.companyImage}
                        src={companyImg}
                        alt="company logo"
                      />
                    </td>
                    <td className="priceNull">
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`/company-page/#${company.symbol}`}
                      >
                        {company.symbol}
                      </Link>
                    </td>

                    <td className="priceNull">
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`/company-page/#${company.symbol}`}
                      >
                        {company.name}
                      </Link>
                    </td>

                    <td className="priceNull">
                      ${Number(company.price).toFixed(2)}
                    </td>
                    <td className={changeClass}>{company.change}</td>
                    <td className={changeClass}>{company.changesPercentage}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </main>
      ) : (
        <Spinner />
      )}
    </>
  )
}

export default MostSearched
