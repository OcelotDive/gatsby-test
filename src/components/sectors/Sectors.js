import React, { useEffect, useState } from "react"

import Key from "../../keys"

const Sectors = () => {
  const sectorsUrl =
    "https://financialmodelingprep.com/api/v3/stock/sectors-performance"

  let [dataList, setDataList] = useState([])
  let [nameSorted, setNameSorted] = useState(false)
  let [changeSorted, setChangeSorted] = useState(false)
  const nameClass = !nameSorted ? "triDown" : "triUp"

  const changeClassTri = !changeSorted ? "triDown" : "triUp"

  useEffect(() => {
    fetch(`${sectorsUrl}${Key.fmpk}`)
      .then(response => response.json())
      .then(data => {
        setDataList(data.sectorPerformance)
      })
  }, [])

  const nameSort = () => {
    if (!nameSorted) {
      dataList.sort((a, b) => {
        if (a.sector.toLowerCase() < b.sector.toLowerCase()) {
          return -1
        }
        if (a.sector.toLowerCase() > b.sector.toLowerCase()) {
          return 1
        }
        return 0
      })
      setChangeSorted(false)
      setNameSorted(!nameSorted)
    } else {
      dataList.sort((a, b) => {
        if (a.sector.toLowerCase() > b.sector.toLowerCase()) {
          return -1
        }
        if (a.sector.toLowerCase() < b.sector.toLowerCase()) {
          return 1
        }
        return 0
      })
      setChangeSorted(false)
      setNameSorted(!nameSorted)
    }
    setDataList([...dataList])
  }

  const changeSort = () => {
    if (!changeSorted) {
      dataList.sort(
        (a, b) =>
          Number(
            a.changesPercentage.substring(0, a.changesPercentage.length - 1)
          ) -
          Number(
            b.changesPercentage.substring(0, b.changesPercentage.length - 1)
          )
      )
    } else {
      dataList.sort(
        (a, b) =>
          Number(
            b.changesPercentage.substring(0, b.changesPercentage.length - 1)
          ) -
          Number(
            a.changesPercentage.substring(0, a.changesPercentage.length - 1)
          )
      )
    }
    setNameSorted(false)

    setChangeSorted(!changeSorted)
    setDataList([...dataList])
  }

  return (
    <>
      <h4 className="pageHeader">SECTORS</h4>
      <main className="mainContentContainer">
        <table>
          <tbody>
            <tr>
              <th className="tableHeader" onClick={nameSort}>
                NAME<span className={nameClass}></span>
              </th>
              <th className="tableHeader" onClick={changeSort}>
                CHANGE(%)<span className={changeClassTri}></span>
              </th>
            </tr>

            {dataList.map(sector => {
              const percentStr = sector.changesPercentage.substring(
                0,
                sector.changesPercentage.length - 1
              )

              const changeClass =
                Number(percentStr) > 0
                  ? "pricePositive"
                  : Number(percentStr) < 0
                  ? "priceNegative"
                  : "priceNull"

              return (
                <tr key={sector.sector}>
                  <td className="priceNull">{sector.sector}</td>
                  <td className={changeClass}>{sector.changesPercentage}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </main>
    </>
  )
}

export default Sectors
