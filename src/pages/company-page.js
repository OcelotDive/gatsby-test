import React, {useEffect, useState} from "react";
import { Link } from "gatsby";
import CompanySummary from "../components/companyDetails/CompanySummary";
import Key from "../keys";
import CompanyLayout from "../components/companyLayout";
import SEO from "../components/seo";

import companyStyles from "../components/companyDetails/company.module.css";
//return this.http.get(`${this.companyProfile}${symbol}${this.fmpk}`)

const CompanyPage = ({location}) => {
     const {symbol} = location.state;
     console.log(symbol)
     let [companyObject, setCompanyObject] = useState({});
     const companyUrl = 'https://financialmodelingprep.com/api/v3/company/profile/';

     useEffect(() => {
      fetch(`${companyUrl}${symbol}${Key.fmpk}`)
      .then((response) => response.json())
      .then((data) => {
        setCompanyObject(data.profile);
        console.log(data)
      }) 
   
  }, [symbol]);
  
     
    return (
  <CompanyLayout>
    <SEO title="CompanyDetails" />
    
    <main className={companyStyles.mainContentCompanyContainer}>
    <h4 className={companyStyles.pageHeader}>COMPANY SUMMARY</h4>
      <section className={companyStyles.halfMainContentContainer}>
    <CompanySummary company={companyObject} />
    </section>
   </main>
  </CompanyLayout>
    )
}

export default CompanyPage;