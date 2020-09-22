import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ErrorBoundary from "../components/errorBoundary/ErrorBoundary"
import CryptoCurrency from "../components/cryptocurrencies/CryptoCurrency"

const FourthPage = () => (
  <Layout>
    <ErrorBoundary>
      <SEO title="CryptoCurrencies" />
      <CryptoCurrency />
    </ErrorBoundary>
  </Layout>
)

export default FourthPage
