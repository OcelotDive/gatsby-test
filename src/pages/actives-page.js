import React from "react"

import ErrorBoundary from "../components/errorBoundary/ErrorBoundary"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Actives from "../components/actives/Actives"

const SixthPage = () => (
  <Layout>
    <ErrorBoundary>
      <SEO title="ACTIVES" />
      <Actives />
    </ErrorBoundary>
  </Layout>
)

export default SixthPage
