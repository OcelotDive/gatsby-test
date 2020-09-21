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
      Hit the back button or use the menu and search bar to try to resolve the
      issue.
    </p>
    <p>
      Suggestion
      <Link to="/">
        <li>
          <span>Home</span>
        </li>
      </Link>
    </p>
  </Layout>
)

export default NotFoundPage
