import React from 'react';
import MainNewsCardImage from './MainNewsCardImage';
import PropTypes from 'prop-types'; 
import newsCardStyles from './newsCardStyles.module.css';

const NewsCard = ({newsItem, primary}) => {

 const newsItemDesc = newsItem.abstract.length > 130 ? `${newsItem.abstract.substring(0, 130)}...` : newsItem.abstract.substring(0, 130);
 
  return (
    !primary ?
    <a href={newsItem.url} target="_blank" className={newsCardStyles.newsLink}>
      <div className={newsCardStyles.card}>
        <div className={newsCardStyles.standardImageContainer}>
          <MainNewsCardImage newsImage={newsItem.multimedia[0]} /> 
        </div>
        <div className={newsCardStyles.newsDescription}>
          <h6 className={newsCardStyles.newsItemHeader}>{newsItem.title}</h6>
          <p>{newsItemDesc}</p>
        </div>
      </div>
    </a>
    :
    <a href={newsItem.url} target="_blank" className={newsCardStyles.newsLink}>
      <div className={newsCardStyles.primaryCard} >
        <MainNewsCardImage newsImage={newsItem.multimedia[0]} primary={primary}/> 
        <div className={newsCardStyles.primaryNewsDescription}>
          <h4 className={newsCardStyles.newsItemHeader}>{newsItem.title}</h4>
        </div> 
    </div>
    </a>
    )  
}

NewsCard.propTypes = {
  newsItem: PropTypes.object,
  primary: PropTypes.bool,
}

export default NewsCard;