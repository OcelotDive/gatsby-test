import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <p>
      Use the back button or return to homepage.{" "}
      <Link to="/">
        <li className={navStyles.mainNavListItem}>
          <span className={navStyles.navListLink}>Home</span>
        </li>
      </Link>
    </p>
  </Layout>
)

export default NotFoundPage
