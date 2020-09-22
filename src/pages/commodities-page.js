import React from "react"
import ErrorBoundary from "../components/errorBoundary/ErrorBoundary"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Commodities from "../components/commodities/Commodities"

const ThirdPage = () => (
  <Layout>
    <ErrorBoundary>
      <SEO title="Commodities" />
      <Commodities />
    </ErrorBoundary>
  </Layout>
)

export default ThirdPage
