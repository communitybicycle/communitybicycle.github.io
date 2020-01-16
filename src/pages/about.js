import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <h1>About</h1>
    <p>Hi, I am an avid web developer. Here is my current skillset:</p>
    <h2>Toolkit</h2>
    <ul>
      <li>JavaScript (HTML + CSS)</li>
      <ul>
        <li>React</li>
        <li>Redux</li>
        <li>Gatsby</li>
      </ul>
      <li>Python</li>
    </ul>
  </Layout>
)

export default AboutPage
