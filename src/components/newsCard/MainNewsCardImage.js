import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import newsCardStyles from './newsCardStyles.module.css';
/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const MainNewsCardImage = ({newsImage, primary}) => {
 
  return (
    <>
   { !primary?
      <img src={newsImage.url} className={newsCardStyles.standardNewsImage} alt="news item image"/>
      :
      <img src={newsImage.url} className={newsCardStyles.primaryNewsImage} alt="primary news item image"/>
    
    }
    </>
    ) 

}

export default MainNewsCardImage;