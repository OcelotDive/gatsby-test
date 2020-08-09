import React from 'react';
import MainNewsCardImage from './MainNewsCardImage';

import newsCardStyles from './newsCard.module.css';

const NewsCard = ({newsItem, primary}) => {
    console.log(newsItem)
 
 
    return (

    
    <div className={newsCardStyles.card}>
      <div className={newsCardStyles.standardImageContainer}>
     <MainNewsCardImage newsImage={newsItem.multimedia[0]} /> 
     </div>
<div className={newsCardStyles.newsDescription}>
  <h5>headint</h5>
  <p>Some toss</p>
</div>
</div>
   
      
    )
    
}


export default NewsCard;