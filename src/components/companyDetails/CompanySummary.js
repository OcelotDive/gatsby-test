import React, { useEffect, useState } from "react";

import companyStyles from "./company.module.css";
import Key from "../../keys";
import CompanyPage from "../../pages/company-page";



const CompanySummary = ({company}) => {
console.log(company)


    return (
        <>
        <div className={companyStyles.companyHeaderRow}>
           <img className={companyStyles.companyImage} src={company.image} alt="company logo" />
            <h3 className={companyStyles.descriptionTitle}>{company.companyName}</h3>
            <p className={companyStyles.description}>{company.industry}</p>
            <p className={companyStyles.description}><b>Ceo:</b> {company.ceo}</p>
            <p className={companyStyles.description}><b>Exq:</b> {company.exchange}</p> 
        </div>
        </>
    )
        
}


export default CompanySummary;