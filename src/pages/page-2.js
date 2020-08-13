import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Forex from "../components/forex/Forex"

const SecondPage = () => (
  <Layout>
    <SEO title="Forex" />
    <Forex />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
