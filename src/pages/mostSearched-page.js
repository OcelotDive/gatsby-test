import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MostSearched from "../components/most_searched/MostSearched";

const MostSearchedPage = () => (
  <Layout>
    <SEO title="MOST SEARCHED" />
    <MostSearched />
 
  </Layout>
)

export default MostSearchedPage