import React, { useEffect, useState } from "react";

import companyStyles from "./company.module.css";
import Key from "../../keys";
import CompanyPage from "../../pages/company-page";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";



const CompanySummary = ({company, companyRating}) => {

 console.log("from compSum", company.profile.image)
 
    return (
        <>
       <div className={companyStyles.companyHeaderRow}>
           <img className={companyStyles.companyImage} src={company.profile.image} alt="company logo" />
            <h3 className={companyStyles.descriptionTitle}>{company.profile.companyName}</h3>
            <p className={companyStyles.description}>{company.profile.industry}</p>
            <p className={companyStyles.description}><b>Ceo:</b> {company.profile.ceo}</p>
            <p className={companyStyles.description}><b>Exq:</b> {company.profile.exchange}</p>   
        </div>
       
     <article className={companyStyles.backgroundInfo}>{company.profile.description}</article>
        <div className={companyStyles.companyRating}><small>Recommendation:</small>
        <span><b>{companyRating.rating.recommendation}</b></span>&nbsp;&nbsp;&nbsp;
        <small> Stock Performance Rating: </small>
  
    </div> 
        </>
    )
        
}


export default CompanySummary;