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
//return this.http.get(`${this.companyProfile}${symbol}${this.fmpk}`)
//this.keyMetrics = 'https://financialmodelingprep.com/api/v3/company-key-metrics/'

const CompanyPage = () => {



  const data = [
    {
      "id": "japan",
      "color": "hsl(223, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 293
        },
        {
          "x": "helicopter",
          "y": 143
        },
        {
          "x": "boat",
          "y": 161
        },
        {
          "x": "train",
          "y": 261
        },
        {
          "x": "subway",
          "y": 206
        },
        {
          "x": "bus",
          "y": 20
        },
        {
          "x": "car",
          "y": 5
        },
        {
          "x": "moto",
          "y": 82
        },
        {
          "x": "bicycle",
          "y": 149
        },
        {
          "x": "horse",
          "y": 90
        },
        {
          "x": "skateboard",
          "y": 208
        },
        {
          "x": "others",
          "y": 121
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(92, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 255
        },
        {
          "x": "helicopter",
          "y": 3
        },
        {
          "x": "boat",
          "y": 25
        },
        {
          "x": "train",
          "y": 130
        },
        {
          "x": "subway",
          "y": 289
        },
        {
          "x": "bus",
          "y": 220
        },
        {
          "x": "car",
          "y": 137
        },
        {
          "x": "moto",
          "y": 51
        },
        {
          "x": "bicycle",
          "y": 276
        },
        {
          "x": "horse",
          "y": 2
        },
        {
          "x": "skateboard",
          "y": 79
        },
        {
          "x": "others",
          "y": 136
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(193, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 6
        },
        {
          "x": "helicopter",
          "y": 241
        },
        {
          "x": "boat",
          "y": 210
        },
        {
          "x": "train",
          "y": 21
        },
        {
          "x": "subway",
          "y": 17
        },
        {
          "x": "bus",
          "y": 10
        },
        {
          "x": "car",
          "y": 291
        },
        {
          "x": "moto",
          "y": 75
        },
        {
          "x": "bicycle",
          "y": 56
        },
        {
          "x": "horse",
          "y": 240
        },
        {
          "x": "skateboard",
          "y": 232
        },
        {
          "x": "others",
          "y": 126
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(232, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 112
        },
        {
          "x": "helicopter",
          "y": 35
        },
        {
          "x": "boat",
          "y": 258
        },
        {
          "x": "train",
          "y": 89
        },
        {
          "x": "subway",
          "y": 154
        },
        {
          "x": "bus",
          "y": 179
        },
        {
          "x": "car",
          "y": 237
        },
        {
          "x": "moto",
          "y": 175
        },
        {
          "x": "bicycle",
          "y": 209
        },
        {
          "x": "horse",
          "y": 273
        },
        {
          "x": "skateboard",
          "y": 30
        },
        {
          "x": "others",
          "y": 179
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(9, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 188
        },
        {
          "x": "helicopter",
          "y": 285
        },
        {
          "x": "boat",
          "y": 151
        },
        {
          "x": "train",
          "y": 9
        },
        {
          "x": "subway",
          "y": 4
        },
        {
          "x": "bus",
          "y": 68
        },
        {
          "x": "car",
          "y": 295
        },
        {
          "x": "moto",
          "y": 246
        },
        {
          "x": "bicycle",
          "y": 241
        },
        {
          "x": "horse",
          "y": 206
        },
        {
          "x": "skateboard",
          "y": 188
        },
        {
          "x": "others",
          "y": 142
        }
      ]
    }
  ];

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
      companyHistorical.map(item => {
        priceGraphData[0].data.push({x: item.date, y: item.close.toFixed(2)})
        priceGraphData[1].data.push({x: item.date, y: item.high.toFixed(2)})
        priceGraphData[2].data.push({x: item.date, y: item.low.toFixed(2)})
      });
     
  console.log("companyHistoricalArray", companyHistorical)

  const  fiveDay = [{
    "id": "price",
    "data": priceGraphData[0].data.slice(0, 5).reverse()
  }, 
  {
    "id": "high",
    "data": priceGraphData[1].data.slice(0,5).reverse()
  }, {
    "id": "low",
    "data": priceGraphData[2].data.slice(0, 5).reverse()
  }


]
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
        <CompanyLineChart data={fiveDay}/>
        </div>
      </section>
   </main>
  </CompanyLayout>
    )
}

export default CompanyPage;