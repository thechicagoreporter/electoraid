import React from "react"
import { Link } from "gatsby"

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