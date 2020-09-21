import React, { useEffect, useState } from "react"
import axios from "axios"
import CompanySummary from "../components/companyDetails/CompanySummary"
import CompanyDataBrief from "../components/companyDetails/CompanyDataBrief"
import Key from "../keys"
import CompanyLayout from "../components/companyLayout"
import SEO from "../components/seo"
import { useLocation } from "@reach/router"
import Spinner from "../components/spinner/Spinner"
import companyStyles from "../components/companyDetails/company.module.css"
import CompanyLineChart from "../components/companyDetails/CompanyLineChart"
import CompanyScatterChart from "../components/companyDetails/CompanyScatterChart"
import CompanyBarChart from "../components/companyDetails/CompanyBarChart"
import CompanyAccounts from "../components/companyDetails/CompanyAccounts"

const CompanyPage = () => {
  const location = useLocation()

  const symbol = location.hash.substring(1)

  let [companyObject, setCompanyObject] = useState({})
  let [companyRating, setCompanyRating] = useState({})
  let [companyKeyMetrics, setCompanyKeyMetrics] = useState({})
  let [companyHistorical, setCompanyHistorical] = useState([])
  let [graphType, setGraphType] = useState("Line")
  let [graphTimeLine, setGraphTimeLine] = useState(30)
  let [activeClass, setActiveClass] = useState([1, 0, 0])
  let [tlActiveClass, setTlActiveClass] = useState([0, 1, 0, 0, 0])
  const companyUrl = "https://financialmodelingprep.com/api/v3/company/profile/"
  const companyRatingsUrl =
    "https://financialmodelingprep.com/api/v3/company/rating/"
  const keyMetricsUrl =
    "https://financialmodelingprep.com/api/v3/company-key-metrics/"
  const companyHistoricalUrl =
    "https://financialmodelingprep.com/api/v3/historical-price-full/"

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${companyUrl}${symbol}${Key.fmpk}`)
      setCompanyObject(result.data)
    }
    fetchData()
  }, [symbol])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${companyRatingsUrl}${symbol}${Key.fmpk}`)

      setCompanyRating(result.data)
    }
    fetchData()
  }, [symbol])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${keyMetricsUrl}${symbol}${Key.fmpk}`)

      setCompanyKeyMetrics(result.data)
    }
    fetchData()
  }, [symbol])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${companyHistoricalUrl}${symbol}${Key.fmpk}`)
      if (result.data.historical === undefined) {
        setCompanyHistorical([])
      } else {
        setCompanyHistorical(result.data.historical)
      }
    }
    fetchData()
  }, [symbol])

  //**************************************************//

  const handleGraphButtonClick = e => {
    switch (e.target.innerHTML) {
      case "Line":
        setGraphType("Line")
        setActiveClass([1, 0, 0])
        break
      case "Scatter":
        setGraphType("Scatter")
        setActiveClass([0, 1, 0])
        break
      case "Bar":
        setGraphType("Bar")
        setActiveClass([0, 0, 1])
        break
      default:
        setActiveClass([...activeClass])
        break
    }
  }

  const handleGraphTimeLineButtonClick = e => {
    switch (e.target.innerHTML) {
      case "5D":
        setGraphTimeLine(5)
        setTlActiveClass([1, 0, 0, 0, 0])
        break
      case "1M":
        setGraphTimeLine(30)
        setTlActiveClass([0, 1, 0, 0, 0])
        break
      case "6M":
        setGraphTimeLine(180)
        setTlActiveClass([0, 0, 1, 0, 0])
        break
      case "1Y":
        setGraphTimeLine(365)
        setTlActiveClass([0, 0, 0, 1, 0])
        break
      case "5Y":
        setGraphTimeLine(1825)
        setTlActiveClass([0, 0, 0, 0, 1])
        break
      default:
        setGraphTimeLine(30)
        setTlActiveClass([0, 1, 0, 0, 0])
        break
    }
  }

  return (
    <CompanyLayout>
      <SEO title="CompanyDetails" />
      <h4 className={companyStyles.pageHeader}>COMPANY SUMMARY</h4>
      <main className={companyStyles.mainContentCompanyContainer}>
        <section className={companyStyles.fiftyFiveMainContentContainer}>
          {companyObject.profile && (
            <CompanySummary
              company={companyObject}
              companyRating={companyRating}
            />
          )}
          {companyKeyMetrics.metrics && companyObject.profile ? (
            <CompanyDataBrief
              company={companyObject}
              companyKeyMetrics={companyKeyMetrics}
            />
          ) : (
            <div>
              <Spinner />
            </div>
          )}
        </section>
        <section className={companyStyles.fortyFiveMainContentContainer}>
          <div className={companyStyles.chartContainer}>
            {graphType === "Line" ? (
              <CompanyLineChart
                data={getLineGraphTimeLine(graphTimeLine, companyHistorical)}
              />
            ) : graphType === "Scatter" ? (
              <CompanyScatterChart
                data={getLineGraphTimeLine(graphTimeLine, companyHistorical)}
              />
            ) : (
              <CompanyBarChart
                data={getBarGraphTimeLine(graphTimeLine, companyHistorical)}
              />
            )}

            <div
              className={companyStyles.graphButtonContainer}
              onClick={handleGraphButtonClick}
            >
              <div className={companyStyles.graphTypeContainer}>
                <button
                  className={
                    activeClass[0] === 1
                      ? "globalGraphButton highlighted"
                      : "globalGraphButton"
                  }
                  type="button"
                  aria-label="graphButton"
                  name="graphButton"
                >
                  Line
                </button>
                <button
                  className={
                    activeClass[1] === 1
                      ? "globalGraphButton highlighted"
                      : "globalGraphButton"
                  }
                  type="button"
                  aria-label="graphButton"
                  name="graphButton"
                >
                  Scatter
                </button>
                <button
                  className={
                    activeClass[2] === 1
                      ? "globalGraphButton highlighted"
                      : "globalGraphButton"
                  }
                  type="button"
                  aria-label="graphButton"
                  name="graphButton"
                >
                  Bar
                </button>
              </div>
              <div
                className={companyStyles.graphTimeLineContainer}
                onClick={handleGraphTimeLineButtonClick}
              >
                <button
                  className={
                    tlActiveClass[0] === 1
                      ? "globalGraphButton highlighted"
                      : "globalGraphButton"
                  }
                  type="button"
                  aria-label="graphButton"
                  name="graphButton"
                >
                  5D
                </button>
                <button
                  className={
                    tlActiveClass[1] === 1
                      ? "globalGraphButton highlighted"
                      : "globalGraphButton"
                  }
                  type="button"
                  aria-label="graphButton"
                  name="graphButton"
                >
                  1M
                </button>
                <button
                  className={
                    tlActiveClass[2] === 1
                      ? "globalGraphButton highlighted"
                      : "globalGraphButton"
                  }
                  type="button"
                  aria-label="graphButton"
                  name="graphButton"
                >
                  6M
                </button>
                <button
                  className={
                    tlActiveClass[3] === 1
                      ? "globalGraphButton highlighted"
                      : "globalGraphButton"
                  }
                  type="button"
                  aria-label="graphButton"
                  name="graphButton"
                >
                  1Y
                </button>
                <button
                  className={
                    tlActiveClass[4] === 1
                      ? "globalGraphButton highlighted"
                      : "globalGraphButton"
                  }
                  type="button"
                  aria-label="graphButton"
                  name="graphButton"
                >
                  5Y
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      {companyHistorical !== undefined && companyHistorical.length > 0 && (
        <CompanyAccounts symbol={symbol} />
      )}
    </CompanyLayout>
  )
}

export default CompanyPage

/*Time line functions*/

const getBarGraphTimeLine = (days, companyHistorical) => {
  const barGraphData = []

  companyHistorical.map(item => {
    barGraphData.push({
      date: item.date.split("-").reverse().join("-"),
      price: item.close,
      high: item.high,
      low: item.low,
    })
  })

  if (days === 5) {
    return barGraphData.slice(0, days).reverse()
  } else if (days === 30) {
    days -= 7
    let timeLine = barGraphData.slice(0, days)
    return timeLine.filter((_, index) => index % 2 === 0).reverse()
  } else if (days === 180) {
    days -= 42
    let timeLine = barGraphData.slice(0, days)
    return timeLine.filter((_, index) => index % 14 === 0).reverse()
  } else if (days === 365) {
    days -= 114
    let timeLine = barGraphData.slice(0, days)
    return timeLine.filter((_, index) => index % 16 === 0).reverse()
  } else if (days === 1825) {
    days -= 570
    let timeLine = barGraphData.slice(0, days)
    return timeLine.filter((_, index) => index % 62 === 0).reverse()
  }
}

const getLineGraphTimeLine = (days, companyHistorical) => {
  const priceGraphData = [
    {
      id: "price",
      data: [],
    },
    {
      id: "high",
      data: [],
    },
    {
      id: "low",
      data: [],
    },
  ]

  companyHistorical.map(item => {
    priceGraphData[0].data.push({
      x: item.date.split("-").reverse().join("-"),
      y: item.close.toFixed(2),
    })
    priceGraphData[1].data.push({
      x: item.date.split("-").reverse().join("-"),
      y: item.high.toFixed(2),
    })
    priceGraphData[2].data.push({
      x: item.date.split("-").reverse().join("-"),
      y: item.low.toFixed(2),
    })
  })

  let timeLine1 = priceGraphData[0].data.slice(0, days)
  let timeLine2 = priceGraphData[1].data.slice(0, days)
  let timeLine3 = priceGraphData[2].data.slice(0, days)

  if (days === 5) {
    return [
      {
        id: "price",
        data: timeLine1
          .slice(0, days)
          .filter((_, index) => index)
          .reverse(),
      },
      {
        id: "high",
        data: timeLine2
          .slice(0, days)
          .filter((_, index) => index)
          .reverse(),
      },
      {
        id: "low",
        data: timeLine3
          .slice(0, days)
          .filter((_, index) => index)
          .reverse(),
      },
    ]
  } else if (days === 30) {
    days -= 8
    return [
      {
        id: "price",
        data: timeLine1
          .slice(0, days)
          .filter((_, index) => index)
          .reverse(),
      },
      {
        id: "high",
        data: timeLine2
          .slice(0, days)
          .filter((_, index) => index)
          .reverse(),
      },
      {
        id: "low",
        data: timeLine3
          .slice(0, days)
          .filter((_, index) => index)
          .reverse(),
      },
    ]
  } else if (days === 180) {
    days -= 52
    return [
      {
        id: "price",
        data: timeLine1
          .slice(0, days)
          .filter((_, index) => index % 6 === 0)
          .reverse(),
      },
      {
        id: "high",
        data: timeLine2
          .slice(0, days)
          .filter((_, index) => index % 6 === 0)
          .reverse(),
      },
      {
        id: "low",
        data: timeLine3
          .slice(0, days)
          .filter((_, index) => index % 6 === 0)
          .reverse(),
      },
    ]
  } else if (days === 365) {
    days -= 104
    return [
      {
        id: "price",
        data: timeLine1
          .slice(0, days)
          .filter((_, index) => index % 12 === 0)
          .reverse(),
      },
      {
        id: "high",
        data: timeLine2
          .slice(0, days)
          .filter((_, index) => index % 12 === 0)
          .reverse(),
      },
      {
        id: "low",
        data: timeLine3
          .slice(0, days)
          .filter((_, index) => index % 12 === 0)
          .reverse(),
      },
    ]
  } else if (days === 1825) {
    days -= 520
    return [
      {
        id: "price",
        data: timeLine1
          .slice(0, days)
          .filter((_, index) => index % 52 === 0)
          .reverse(),
      },
      {
        id: "high",
        data: timeLine2
          .slice(0, days)
          .filter((_, index) => index % 52 === 0)
          .reverse(),
      },
      {
        id: "low",
        data: timeLine3
          .slice(0, days)
          .filter((_, index) => index % 52 === 0)
          .reverse(),
      },
    ]
  }
}
