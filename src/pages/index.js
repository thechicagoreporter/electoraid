import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Unit from "../components/units"
import ChiVote from "../components/chivote"
import Sub from "../components/subform"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Unit />
    <ChiVote />
    <Sub />
  </Layout>
)

export default IndexPage
