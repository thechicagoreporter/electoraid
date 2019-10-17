import React from "react"
import Layout from "../components/layout"
import SmallHero from "../components/smallhero"
import QuestionnaireForm from "../components/questionnaireform"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SmallHero />
    <QuestionnaireForm />  
  </Layout>
)

export default IndexPage