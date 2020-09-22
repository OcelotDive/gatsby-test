import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Sectors from "../components/sectors/Sectors"
import ErrorBoundary from "../components/errorBoundary/ErrorBoundary"

const FifthPage = () => (
  <Layout>
    <ErrorBoundary>
      <SEO title="Sectors" />
      <Sectors />
    </ErrorBoundary>
  </Layout>
)

export default FifthPage
