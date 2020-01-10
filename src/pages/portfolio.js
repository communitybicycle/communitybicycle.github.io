import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Portfolio" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Portfolio</h1>
    <hr />
    <h2>JavaScript Calculator</h2>
    <p>
      Link to the calculator here:{" "}
      <Link to="/portfolio/calculator">Calculator</Link>
    </p>
  </Layout>
)

export default AboutPage
