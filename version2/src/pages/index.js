import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
   <h1>Welcome to Muh Website</h1>
   <p className="text-6xl text-white">Testing Tailwind</p>
  </Layout>
)

export default IndexPage
