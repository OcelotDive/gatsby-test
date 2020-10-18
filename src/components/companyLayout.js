/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header/header"
import Ticker from "../components/Ticker/Ticker"
import MenuTab from "../components/nav/MenuTab"
import "./layout.css"
import searchStyles from "./searchBar/SearchBar"

const CompanyLayout = ({ children, ticker }) => {
  return (
    <section className="LayoutMain" style={{overflow: "hidden"}}>
      <Header />
      <Ticker ticker={ticker} />
      <MenuTab />
      <div
        style={{
          postion: `absolute`,
          top: `0`,
          width: `100%`,
          height: `100%`,
          overflow: `hidden`,
        }}
      >
        <main>{children}</main>
        <footer style={{ textAlign: `center` }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </section>
  )
}

CompanyLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CompanyLayout
