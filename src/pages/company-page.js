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
     const companyUrl = 'https://financialmodelingprep.com/api/v3/company/profile/';
     const companyRatingsUrl = 'https://financialmodelingprep.com/api/v3/company/rating/';
     const keyMetricsUrl = 'https://financialmodelingprep.com/api/v3/company-key-metrics/';

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
        console.log("key-metrics", result.data)
        setCompanyKeyMetrics(result.data);
        }
        fetchData();
          }, [symbol])
  
  
    return (
  <CompanyLayout>
    <SEO title="CompanyDetails" />
    
    <main className={companyStyles.mainContentCompanyContainer}>
    <h4 className={companyStyles.pageHeader}>COMPANY SUMMARY</h4>
      <section className={companyStyles.halfMainContentContainer}>
    {(companyObject.profile && companyRating.rating) && <CompanySummary company={companyObject} companyRating={companyRating}/> }
    {(companyKeyMetrics.metrics && companyObject.profile) &&  <CompanyDataBrief company={companyObject} companyKeyMetrics={companyKeyMetrics}/> }
    </section>
   </main>
  </CompanyLayout>
    )
}

export default CompanyPage;