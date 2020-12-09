import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Confirm = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <main>
        <h1>Just one more thing...</h1>
        <p>
          Thank you for subscribing. You will need to check your inbox and
          confirm your subscription.
        </p>
      </main>
    </Layout>
  )
}

export default Confirm

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
