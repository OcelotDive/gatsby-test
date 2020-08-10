import React from 'react';
import MainNewsCardImage from './MainNewsCardImage';

import newsCardStyles from './newsCardStyles.module.css';

const NewsCard = ({newsItem, primary}) => {
  return (
    !primary ?
    <div className={newsCardStyles.card}>
      <div className={newsCardStyles.standardImageContainer}>
        <MainNewsCardImage newsImage={newsItem.multimedia[0]} /> 
      </div>
      <div className={newsCardStyles.newsDescription}>
        <h5>heading</h5>
        <p>Some stuff</p>
      </div>
    </div>
    :
    <div className={newsCardStyles.primaryCard} >
      
        <MainNewsCardImage newsImage={newsItem.multimedia[0]} primary={primary}/> 
        <div className={newsCardStyles.primaryNewsDescription}>
        <h5>headint</h5>
        <p>Some stuff</p>
        </div>
      
      
    </div>

    )  
}


export default NewsCard;