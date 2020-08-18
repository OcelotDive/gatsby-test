import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Actives from "../components/actives/Actives";

const SixthPage = () => (
  <Layout>
    <SEO title="ACTIVES" />
    <Actives />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SixthPage
