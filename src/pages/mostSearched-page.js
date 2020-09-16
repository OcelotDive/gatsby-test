import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MostSearched from "../components/most_searched/MostSearched"

const MostSearchedPage = () => (
  <Layout>
    <SEO title="MOST SEARCHED" />
    <MostSearched />
  </Layout>
)

export default MostSearchedPage
