import React from "react"
import { Link } from "gatsby"
import NewsCard from '../components/NewsCard';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    
    <NewsCard />
  </Layout>
)

export default IndexPage
