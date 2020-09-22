import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Forex from "../components/forex/Forex"
import ErrorBoundary from "../components/errorBoundary/ErrorBoundary"

const SecondPage = () => (
  <Layout>
    <ErrorBoundary>
      <SEO title="Forex" />
      <Forex />
    </ErrorBoundary>
  </Layout>
)

export default SecondPage
