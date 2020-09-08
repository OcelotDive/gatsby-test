import React from "react"

import newsCardStyles from "./newsCardStyles.module.css"

const MainNewsCardImage = ({ newsImage, primary }) => {
  return (
    <>
      {!primary ? (
        <img
          src={newsImage.url}
          className={newsCardStyles.standardNewsImage}
          alt="news item image"
        />
      ) : (
        <img
          src={newsImage.url}
          className={newsCardStyles.primaryNewsImage}
          alt="primary news item image"
        />
      )}
    </>
  )
}

export default MainNewsCardImage
