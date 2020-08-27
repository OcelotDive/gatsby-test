import React, {useEffect, useState} from "react";
import { Link } from "gatsby";
import axios from "axios"
import CompanySummary from "../components/companyDetails/CompanySummary";
import CompanyDataBrief from "../components/companyDetails/CompanyDataBrief";
import Key from "../keys";
import CompanyLayout from "../components/companyLayout";
import SEO from "../components/seo";
import { useLocation } from '@reach/router';
import queryString from 'query-string'

import companyStyles from "../components/companyDetails/company.module.css";
import CompanyLineChart from "../components/companyDetails/CompanyLineChart";
import CompanyScatterChart from "../components/companyDetails/CompanyScatterChart";
import CompanyBarChart from "../components/companyDetails/CompanyBarChart";
//return this.http.get(`${this.companyProfile}${symbol}${this.fmpk}`)
//this.keyMetrics = 'https://financialmodelingprep.com/api/v3/company-key-metrics/'

const CompanyPage = () => {



  const data = [
    {
      "country": "2020-08-26",
      "price": 213.020004,
      "priceColor": "hsl(348, 70%, 50%)",
      "high": 216.25,
      "burgerColor": "hsl(83, 70%, 50%)",
      "low": 212.85006,
      "sandwichColor": "hsl(50, 70%, 50%)",
      "kebab": 113,
      "kebabColor": "hsl(150, 70%, 50%)",
      
    },
    {
      "country": "AE",
      "hot dog": 93,
      "hot dogColor": "hsl(50, 70%, 50%)",
      "burger": 62,
      "burgerColor": "hsl(57, 70%, 50%)",
      "sandwich": 8,
      "sandwichColor": "hsl(329, 70%, 50%)",
      "kebab": 149,
      "kebabColor": "hsl(60, 70%, 50%)",
      "fries": 161,
      "friesColor": "hsl(146, 70%, 50%)",
      "donut": 108,
      "donutColor": "hsl(170, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 158,
      "hot dogColor": "hsl(134, 70%, 50%)",
      "burger": 87,
      "burgerColor": "hsl(336, 70%, 50%)",
      "sandwich": 69,
      "sandwichColor": "hsl(226, 70%, 50%)",
      "kebab": 0,
      "kebabColor": "hsl(170, 70%, 50%)",
      "fries": 60,
      "friesColor": "hsl(352, 70%, 50%)",
      "donut": 92,
      "donutColor": "hsl(223, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 53,
      "hot dogColor": "hsl(347, 70%, 50%)",
      "burger": 127,
      "burgerColor": "hsl(114, 70%, 50%)",
      "sandwich": 56,
      "sandwichColor": "hsl(354, 70%, 50%)",
      "kebab": 0,
      "kebabColor": "hsl(82, 70%, 50%)",
      "fries": 43,
      "friesColor": "hsl(2, 70%, 50%)",
      "donut": 148,
      "donutColor": "hsl(288, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 177,
      "hot dogColor": "hsl(288, 70%, 50%)",
      "burger": 155,
      "burgerColor": "hsl(33, 70%, 50%)",
      "sandwich": 11,
      "sandwichColor": "hsl(327, 70%, 50%)",
      "kebab": 31,
      "kebabColor": "hsl(140, 70%, 50%)",
      "fries": 57,
      "friesColor": "hsl(344, 70%, 50%)",
      "donut": 197,
      "donutColor": "hsl(93, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 135,
      "hot dogColor": "hsl(118, 70%, 50%)",
      "burger": 103,
      "burgerColor": "hsl(104, 70%, 50%)",
      "sandwich": 72,
      "sandwichColor": "hsl(210, 70%, 50%)",
      "kebab": 81,
      "kebabColor": "hsl(229, 70%, 50%)",
      "fries": 182,
      "friesColor": "hsl(313, 70%, 50%)",
      "donut": 160,
      "donutColor": "hsl(39, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 124,
      "hot dogColor": "hsl(243, 70%, 50%)",
      "burger": 101,
      "burgerColor": "hsl(190, 70%, 50%)",
      "sandwich": 111,
      "sandwichColor": "hsl(101, 70%, 50%)",
      "kebab": 150,
      "kebabColor": "hsl(170, 70%, 50%)",
      "fries": 68,
      "friesColor": "hsl(20, 70%, 50%)",
      "donut": 43,
      "donutColor": "hsl(114, 70%, 50%)"
    }
  ]

  const location = useLocation();
  console.log("myNewLocation", location)

  
     const symbol = location.hash.substring(1);
     console.log("symbol", symbol)

     let [companyObject, setCompanyObject] = useState({});
     let [companyRating, setCompanyRating] = useState({});
     let [companyKeyMetrics, setCompanyKeyMetrics] = useState({});
     let [companyHistorical, setCompanyHistorical] = useState([]);
     const companyUrl = 'https://financialmodelingprep.com/api/v3/company/profile/';
     const companyRatingsUrl = 'https://financialmodelingprep.com/api/v3/company/rating/';
     const keyMetricsUrl = 'https://financialmodelingprep.com/api/v3/company-key-metrics/';
     const companyHistoricalUrl = 'https://financialmodelingprep.com/api/v3/historical-price-full/';

     useEffect(() => {
      const fetchData = async () => {
        const result = await axios(`${companyUrl}${symbol}${Key.fmpk}`,);
        setCompanyObject(result.data)
      //  console.log("result",result)
      }
      fetchData();
        }, [symbol])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${companyRatingsUrl}${symbol}${Key.fmpk}`,);
    //  console.log("ratings", result.data)
      setCompanyRating(result.data);
    }
    fetchData();
      }, [symbol])

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(`${keyMetricsUrl}${symbol}${Key.fmpk}`,);
     //   console.log("key-metrics", result.data)
        setCompanyKeyMetrics(result.data);
        }
        fetchData();
          }, [symbol])

     useEffect(() => {
        const fetchData = async () => {
          const result = await axios(`${companyHistoricalUrl}${symbol}${Key.fmpk}`,);
          //console.log("historical", result.data)
            setCompanyHistorical(result.data.historical);
            
            }
            fetchData();
              }, [symbol])

       //**************************************************//       
       const priceGraphData = [
         {
        "id": "price",
        "data": []
      },
      {
        "id": "high",
        "data": []
      },
      {
        "id": "low",
        "data": []
      }
      ]

      const barGraphData = []
     
  
      
      companyHistorical.map(item => {
        priceGraphData[0].data.push({x: item.date.split("-").reverse().join("-"), y: item.close.toFixed(2)})
        priceGraphData[1].data.push({x: item.date.split("-").reverse().join("-"), y: item.high.toFixed(2)})
        priceGraphData[2].data.push({x: item.date.split("-").reverse().join("-"), y: item.low.toFixed(2)})
        barGraphData.push({"date": item.date, "price": item.close, "high": item.high, "low": item.low})
      });
     
  console.log("companyHistoricalArray", companyHistorical)
  console.log("barGraphData", barGraphData)

  const getGraphTimeLine = (days) => {

    let timeLine1 = priceGraphData[0].data.slice(0, days);
    let timeLine2 = priceGraphData[1].data.slice(0, days);
    let timeLine3 = priceGraphData[2].data.slice(0, days);
      let timeLineEnd1 = timeLine1[timeLine1.length - 1];
      let timeLineEnd2 = timeLine2[timeLine2.length - 1];
      let timeLineEnd3 = timeLine3[timeLine3.length - 1];
    if(days <= 30) {
  return  [{
    "id": "price",
    "data": timeLine1.slice(0, days).filter((_,index) => index).concat(timeLineEnd1).reverse()
  }, 
  {
    "id": "high",
    "data": timeLine2.slice(0, days).filter((_,index) => index ).concat(timeLineEnd2).reverse()
  }, {
    "id": "low",
    "data": timeLine3.slice(0, days).filter((_,index) => index ).concat(timeLineEnd3).reverse()
  }
]
    }
    else if(days === 180){
      return  [{
        "id": "price",
        "data": timeLine1.slice(0, days).filter((_,index) => index % 6 === 0).concat(timeLineEnd1).reverse()
      }, 
      {
        "id": "high",
        "data": timeLine2.slice(0, days).filter((_,index) => index % 6 === 0).concat(timeLineEnd2).reverse()
      }, {
        "id": "low",
        "data": timeLine3.slice(0, days).filter((_,index) => index % 6 === 0).concat(timeLineEnd3).reverse()
      }
    ]
    }
    else if(days === 365){
      return  [{
        "id": "price",
        "data": timeLine1.slice(0, days).filter((_,index) => index % 12 === 0).concat(timeLineEnd1).reverse()
      }, 
      {
        "id": "high",
        "data": timeLine2.slice(0, days).filter((_,index) => index % 12 === 0).concat(timeLineEnd2).reverse()
      }, {
        "id": "low",
        "data": timeLine3.slice(0, days).filter((_,index) => index % 12 === 0).concat(timeLineEnd3).reverse()
      }
    ]
    }
    else if(days === 1825){

     return  [{
      "id": "price",
      "data": timeLine1.slice(0, days).filter((_,index) => index % 365 === 0).concat(timeLineEnd1).reverse()
    }, 
    {
      "id": "high",
      "data": timeLine2.slice(0,days).filter((_,index) => index % 365 === 0).concat(timeLineEnd2).reverse()
    }, {
      "id": "low",
      "data": timeLine3.slice(0, days).filter((_,index) => index % 365 === 0).concat(timeLineEnd3).reverse()
    }
  ]
    }

  }

  const getBarGraphTimeLine = (days) => {
    if(days <= 30) {
      return barGraphData.slice(0, days);
    }
  }

  console.warn("results", getBarGraphTimeLine(30))

    return (
  <CompanyLayout>
    <SEO title="CompanyDetails" />
    <h4 className={companyStyles.pageHeader}>COMPANY SUMMARY</h4>
    <main className={companyStyles.mainContentCompanyContainer}>
    
      <section className={companyStyles.fiftyFiveMainContentContainer}>
    {(companyObject.profile && companyRating.rating) && <CompanySummary company={companyObject} companyRating={companyRating}/> }
    {(companyKeyMetrics.metrics && companyObject.profile) &&  <CompanyDataBrief company={companyObject} companyKeyMetrics={companyKeyMetrics}/> }
    </section>
      <section className={companyStyles.fortyFiveMainContentContainer}>
        <div className={companyStyles.chartContainer}>
        <CompanyBarChart data={data}/>
        </div>
      </section>
   </main>
  </CompanyLayout>
    )
}

export default CompanyPage;