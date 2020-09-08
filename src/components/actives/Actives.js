import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import Spinner from "../spinner/Spinner"
import Key from "../../keys"

import activeStyles from "./activeStyles.module.css"

const Actives = () => {
  const activesUrl = "https://financialmodelingprep.com/api/v3/actives"
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
    fetch(`${activesUrl}${Key.fmpk}`)
      .then(response => response.json())
      .then(data => {
        console.warn(data)
        setDataList(data)
      })
  }, [])

  useEffect(() => {
    dataList.map((item, index) => {
      fetch(`${companyUrl}${item.ticker}${Key.fmpk}`)
        .then(response => response.json())
        .then(data => {
          companyImages.push(data.profile.image)
          setCompanyImages([...companyImages])
        })
    })
  }, [dataList])

  const nameSort = () => {
    if (!nameSorted) {
      dataList.sort((a, b) => {
        if (a.companyName.toLowerCase() < b.companyName.toLowerCase()) {
          return -1
        }
        if (a.companyName.toLowerCase() > b.companyName.toLowerCase()) {
          return 1
        }
        return 0
      })
      setPriceSorted(false)
      setChangeSorted(false)
      setNameSorted(!nameSorted)
    } else {
      dataList.sort((a, b) => {
        if (a.companyName.toLowerCase() > b.companyName.toLowerCase()) {
          return -1
        }
        if (a.companyName.toLowerCase() < b.companyName.toLowerCase()) {
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
      dataList.sort((a, b) => Number(a.changes) - Number(b.changes))
    } else {
      dataList.sort((a, b) => Number(b.changes) - Number(a.changes))
    }
    setNameSorted(false)
    setPriceSorted(false)
    setChangeSorted(!changeSorted)
    setDataList([...dataList])
  }

  return (
    <>
      <h4 className="pageHeader">ACTIVES</h4>
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

              {dataList.map(active => {
                const changeClass =
                  active.changes > 0
                    ? "pricePositive"
                    : active.changes < 0
                    ? "priceNegative"
                    : "priceNull"
                const companyImg = companyImages.find(image =>
                  image.endsWith(`${active.ticker}.jpg`)
                )
                return (
                  <tr key={active.ticker}>
                    <td>
                      <img
                        className={activeStyles.companyImage}
                        src={companyImg}
                        alt="company logo"
                      />
                    </td>
                    <td className="priceNull">
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`/company-page/#${active.ticker}`}
                      >
                        {active.ticker}
                      </Link>
                    </td>

                    <td className="priceNull">
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`/company-page/#${active.ticker}`}
                      >
                        {active.companyName}
                      </Link>
                    </td>

                    <td className="priceNull">
                      ${Number(active.price).toFixed(2)}
                    </td>
                    <td className={changeClass}>{active.changes}</td>
                    <td className={changeClass}>{active.changesPercentage}</td>
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

export default Actives
