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
import Utils from "../utils";
import companyStyles from "../components/companyDetails/company.module.css";
import CompanyLineChart from "../components/companyDetails/CompanyLineChart";
import CompanyScatterChart from "../components/companyDetails/CompanyScatterChart";
import CompanyBarChart from "../components/companyDetails/CompanyBarChart";
//return this.http.get(`${this.companyProfile}${symbol}${this.fmpk}`)
//this.keyMetrics = 'https://financialmodelingprep.com/api/v3/company-key-metrics/'

const CompanyPage = () => {




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
 
 



 /* const getBarGraphTimeLine = (days) => {
    if(days <= 30) {
      return barGraphData.slice(0, days).reverse();
    }
  }*/



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
    <CompanyLineChart data={getLineGraphTimeLine(365, companyHistorical)} /> 
        </div>
        <div className={companyStyles.graphButtonContainer}>
          <div className={companyStyles.graphTypeContainer} >
          <button className={companyStyles.graphButton} type="button" aria-label="graphButton" name="graphButton" >Line</button>
          <button className={companyStyles.graphButton} type="button" aria-label="graphButton" name="graphButton" >Scatter</button>
          <button className={companyStyles.graphButton} type="button" aria-label="graphButton" name="graphButton" >Bar</button>
          </div>
          <div className={companyStyles.graphTimeLineContainer} >
          <button className={companyStyles.graphButton} type="button" aria-label="graphButton" name="graphButton" >5D</button>
          <button className={companyStyles.graphButton} type="button" aria-label="graphButton" name="graphButton" >1M</button>
          <button className={companyStyles.graphButton} type="button" aria-label="graphButton" name="graphButton" >6M</button>
          <button className={companyStyles.graphButton} type="button" aria-label="graphButton" name="graphButton" >1Y</button>
          <button className={companyStyles.graphButton} type="button" aria-label="graphButton" name="graphButton" >6Y</button>
          </div>
          </div>
      </section>
   </main>
  </CompanyLayout>
    )
}

export default CompanyPage;


/*Time line functions*/

const getBarGraphTimeLine = (days, companyHistorical) => {
  const barGraphData = [];

  companyHistorical.map(item => {
    barGraphData.push({"date": item.date.split("-").reverse().join("-"), "price": item.close, "high": item.high, "low": item.low})
  });

  if(days <= 30) {
    return barGraphData.slice(0, days).reverse();
  }
  else if (days === 180) {
    let timeLine = barGraphData.slice(0, days);
    let timeLineEnd = timeLine[timeLine.length - 1];
    return timeLine.filter((_,index) => index % 6 === 0).concat(timeLineEnd).reverse();
  }
  else if (days === 365) {
    let timeLine = barGraphData.slice(0, days);
    let timeLineEnd = timeLine[timeLine.length - 1];
    return timeLine.filter((_,index) => index % 12 === 0).concat(timeLineEnd).reverse();
  }
  else if (days === 1825) {
    let timeLine = barGraphData.slice(0, days);
    let timeLineEnd = timeLine[timeLine.length - 1];
    return timeLine.filter((_,index) => index % 180 === 0).concat(timeLineEnd).reverse();
  }

}

const getLineGraphTimeLine = (days, companyHistorical) => {
  console.table(companyHistorical)
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
  
 
    
  
     
     companyHistorical.map(item => {
       priceGraphData[0].data.push({x: item.date.split("-").reverse().join("-"), y: item.close.toFixed(2)})
       priceGraphData[1].data.push({x: item.date.split("-").reverse().join("-"), y: item.high.toFixed(2)})
       priceGraphData[2].data.push({x: item.date.split("-").reverse().join("-"), y: item.low.toFixed(2)})
     });
    
  
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
        "data": timeLine1.slice(0, days).filter((_,index) => index % 180 === 0).concat(timeLineEnd1).reverse()
      }, 
      {
        "id": "high",
        "data": timeLine2.slice(0,days).filter((_,index) => index % 180 === 0).concat(timeLineEnd2).reverse()
      }, {
        "id": "low",
        "data": timeLine3.slice(0, days).filter((_,index) => index % 180 === 0).concat(timeLineEnd3).reverse()
      }
    ]
      }
  
    }