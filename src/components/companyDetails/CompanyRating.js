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
      return  (
      <div className="cardInfoBar" >
        <span className="cardDataName"></span>
        <i className="far fa-star"></i>
        <span className="cardDataInfo"></span>
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