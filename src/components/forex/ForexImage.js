
import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';
function renderImage(file) {

  return <Img fluid={file.node.childImageSharp.fluid} />
}
const ForexImage = function ({src}) {
  return <StaticQuery
    query={graphql`
      query {
      images: allFile(filter:{ extension: { regex: "/jpeg|jpg|png|gif/"}}) {
      edges {
        node {
          extension
          relativePath
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    }
    `}
    render={({ images }) =>  renderImage(images.edges.find(image => {
     return image.node.relativePath === src;
    }))
    }
  />
}
export default ForexImage;