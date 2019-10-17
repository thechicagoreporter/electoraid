import React from "react"

import Layout from "../components/layout"
import Confirm from "../components/signup"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Confirm />
  </Layout>
)

export default IndexPage