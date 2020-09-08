import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CryptoCurrency from "../components/cryptocurrencies/CryptoCurrency"

const FourthPage = () => (
  <Layout>
    <SEO title="CryptoCurrencies" />
    <CryptoCurrency />
  </Layout>
)

export default FourthPage
