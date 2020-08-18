import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo";
import Commodities from "../components/commodities/Commodities";

const ThirdPage = () => (
  <Layout>
    <SEO title="Commodities" />
    <Commodities />
   
  </Layout>
)

export default ThirdPage
