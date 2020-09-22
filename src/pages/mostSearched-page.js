import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MostSearched from "../components/most_searched/MostSearched"
import ErrorBoundary from "../components/errorBoundary/ErrorBoundary"

const MostSearchedPage = () => (
  <Layout>
    <ErrorBoundary>
      <SEO title="MOST SEARCHED" />
      <MostSearched />
    </ErrorBoundary>
  </Layout>
)

export default MostSearchedPage
