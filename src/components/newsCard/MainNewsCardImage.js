import React from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import newsCardStyles from "./newsCardStyles.module.css"


const MainNewsCardImage = ({ newsImage, primary }) => {
  return (
    <>
      {!primary ? (
        <LazyLoadImage
          src={newsImage.url}
          className={newsCardStyles.standardNewsImage}
          alt="news item image"
        />
      ) : (
        <LazyLoadImage
          src={newsImage.url}
          className={newsCardStyles.primaryNewsImage}
          alt="primary news item image"
        />
      )}
    </>
  )
}

export default MainNewsCardImage
