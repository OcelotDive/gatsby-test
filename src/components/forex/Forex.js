import React, { useEffect, useState } from "react"
import ForexImage from "./ForexImage"
import Spinner from "../spinner/Spinner"
import Key from "../../keys"
import forexStyles from "./forexStyles.module.css"

const Forex = () => {
  const forexUrl = "https://financialmodelingprep.com/api/v3/fx"

  let fxArray = [
    "AUD/CAD",
    "AUD/CHF",
    "AUD/JPY",
    "AUD/NZD",
    "AUD/USD",
    "CAD/CHF",
    "CAD/JPY",
    "CHF/JPY",
    "EUR/AUD",
    "EUR/CAD",
    "EUR/CHF",
    "EUR/GBP",
    "EUR/JPY",
    "EUR/NOK",
    "EUR/NZD",
    "EUR/USD",
    "GBP/CAD",
    "GBP/CHF",
    "GBP/JPY",
    "GBP/NZD",
    "GBP/USD",
    "NZD/JPY",
    "NZD/USD",
    "USD/CAD",
    "USD/CHF",
    "USD/JPY",
    "USD/NOK",
    "USD/SEK"
  ]
  let [dataList, setDataList] = useState([])
  let [nameSorted, setNameSorted] = useState(false)
  let [priceSorted, setPriceSorted] = useState(false)
  let [changeSorted, setChangeSorted] = useState(false)
  const nameClass = !nameSorted ? "triDown" : "triUp"
  const priceClass = !priceSorted ? "triDown" : "triUp"
  const changeClass = !changeSorted ? "triDown" : "triUp"

  useEffect(() => {
    fetch(`${forexUrl}${Key.fmpk}`)
      .then(response => response.json())
      .then(data => {
        let temp = data.filter(fx => {
          return fxArray.includes(fx.ticker);
        })
      
        setDataList(temp)
      })
  }, [])

  const nameSort = () => {
    if (!nameSorted) {
      dataList.sort((a, b) => {
        if (a.ticker.toLowerCase() < b.ticker.toLowerCase()) {
          return -1
        }
        if (a.ticker.toLowerCase() > b.ticker.toLowerCase()) {
          return 1
        }
        return 0
      })
      setPriceSorted(false)
      setChangeSorted(false)
      setNameSorted(!nameSorted)
    } else {
      dataList.sort((a, b) => {
        if (a.ticker > b.ticker) {
          return -1
        }
        if (a.ticker < b.ticker) {
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
      dataList.sort((a, b) => Number(a.ask) - Number(b.ask))
    } else {
      dataList.sort((a, b) => Number(b.ask) - Number(a.ask))
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
      <h4 className="pageHeader">WORLD CURRENCIES - FOREIGN EXCHANGE RATES</h4>
      {dataList.length > 0 ? (
        <main className="mainContentContainer">
          <section className={forexStyles.tableContainer}>
            <table>
              <tbody>
                <tr>
                  <th className="tableHeader"></th>
                  <th className="tableHeader" onClick={nameSort}>
                    PAIR <span className={nameClass}></span>
                  </th>
                  <th className="tableHeader" onClick={priceSort}>
                    PRICE <span className={priceClass}></span>
                  </th>
                  <th className="tableHeader" onClick={changeSort}>
                    CHANGE <span className={changeClass}></span>
                  </th>
                  <th className="tableHeader">CHANGE(%)</th>
                </tr>

                {dataList.map(forex => {
                  const changeClass =
                    forex.changes > 0
                      ? "forexPricePositive"
                      : forex.changes < 0
                      ? "forexPriceNegative"
                      : "forexPriceNull"
                  return (
                    <tr key={forex.ticker}>
                      <td className={forexStyles.forexImage}>
                        {" "}
                        <ForexImage
                          src={forex.ticker.replace("/", "") + ".png"}
                        />
                      </td>
                      <td className={forexStyles.forexPriceNull}>
                        {forex.ticker}
                      </td>
                      <td className={forexStyles.forexPriceNull}>
                        {Number(forex.ask).toFixed(4)}
                      </td>
                      <td className={forexStyles[changeClass]}>
                        {forex.changes.toFixed(4)}
                      </td>
                      <td className={forexStyles[changeClass]}>
                        (
                        {((forex.changes.toFixed(4) / forex.ask) * 100).toFixed(
                          2
                        )}
                        )
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </section>
        </main>
      ) : (
        <Spinner />
      )}
    </>
  )
}

export default Forex
