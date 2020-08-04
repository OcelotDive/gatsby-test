import React from 'react';
import MainNewsCardImage from './MainNewsCardImage';


import cardStyles from "./newsCard.module.css";

const NewsCard = () => {

    return (
        
    
 
    
    <div class={cardStyles.card}>
 <MainNewsCardImage />
  <div class={cardStyles.container}>
   
    <p>World Snooker Match Betting Tips</p>
  </div>
</div>
   
      
    )
}


export default NewsCard;