import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

import companyStyles from "./company.module.css";


const CompanyRating = ({companyRating}) => {
    console.log(companyRating)
   if(companyRating.rating) {
    let starArray = [];
    while(starArray.length < companyRating.rating.score) {
        
        starArray.push("*");
    }

    return (
        <>
        <span className={companyStyles.companyRating}><small>Recommendation:</small>
        <span><b>{companyRating.rating.recommendation}</b></span>&nbsp;&nbsp;&nbsp;
        <small> Stock Performance Rating: </small>
        {starArray.map((star, index) => <FontAwesomeIcon icon={faStar} key={index}/> )}
    </span>
        <section className={companyStyles.companyRatingsCard}>
        {Object.keys(companyRating.ratingDetails).map(item => {
         let temp = [];
         while(temp.length < companyRating.ratingDetails[item].score) {
             temp.push("*");
         }
          
           
      return  (
      <div className={companyStyles.cardInfoBar} key={item}>&nbsp;&nbsp;&nbsp;
        <span className={companyStyles.cardDataName}>{item}</span>&nbsp;&nbsp;&nbsp;<span className={companyStyles.cardScore}><small>Score: </small> 
        {temp.map((score, index) => <small><small><FontAwesomeIcon icon={faStar} key={item + index}/></small></small>)}</span>
        <span className={companyStyles.cardDataInfo}><small>Rec: </small><span className={companyStyles.recommendation}><small><small>{companyRating.ratingDetails[item].recommendation}</small></small></span></span>
    </div>
      )
   })
}

        </section>
        </>
    )
   }
   else {
       return (
           <>
           </>
       )
   }
    
}


export default CompanyRating;