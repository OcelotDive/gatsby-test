import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sectors from "../components/sectors/Sectors"

const FifthPage = () => (
  <Layout>
    <SEO title="Sectors" />
    <Sectors />
  </Layout>
)

export default FifthPage
