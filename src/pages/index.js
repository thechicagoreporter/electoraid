import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Unit from "../components/units"
import ChiVote from "../components/chivote"
import AidForm from "../components/form"


import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Unit />
    <ChiVote />
    <AidForm />
  
  </Layout>
)

export default IndexPage
