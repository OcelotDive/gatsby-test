/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useState} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header/header";
import Ticker from "../components/Ticker/Ticker";
import MenuTab from "../components/nav/MenuTab";
import "./layout.css"
import searchStyles from "./searchBar/SearchBar";

const Layout = ({ children, ticker }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  /*let [elementClicked, setElementClicked] = useState(false);

  const getElementClicked= (e) => {
    console.warn(e.target.className)
    if(e.target.className.includes("searchBar")) {
      console.log("this is search bar class")
      setElementClicked(false);
    }
    // clicked on element other than searchBar class
    else if(e.target.className === "") {
        setElementClicked(true)
    }
    else {
      setElementClicked(true);
    }
  }
  */
  

  return (
    <section className="LayoutMain">
      <Header siteTitle={data.site.siteMetadata.title} />
      <Ticker ticker={ticker}/>
      <MenuTab />
      <div
        style={{
          margin: `auto`,
          maxWidth: 1200,
          padding: `0 1.0875rem 1.45rem`,
      
         
        }}
      >
      
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </section>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
