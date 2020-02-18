import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Portfolio" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Projects</h1>
    <hr />

    {/*D3 PROJECTS*/}
    <h2>D3 Projects</h2>
    <p>
      D3.js is a data visualization library. Using data captured by an API call,
      I used D3.js to generate different types of charts.
    </p>
    <p>
      This app was created using <strong>D3.js</strong>, <strong>React</strong>,{" "}
      <strong>React Router DOM (client-side rendering)</strong>,{" "}
      <strong>Material UI</strong>, and <strong>NPM</strong>.
    </p>
    <a href="https://communitybicycle.github.io/d3-projects/">
      <button>Go to Project</button>
    </a>
    <hr />

    {/*POMODORO CLOCK*/}
    <h2>Pomodoro Clock</h2>
    <p>
      A pomodoro clock is intended to facilitate the{" "}
      <a
        href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
        target="_blank"
      >
        pomodoro technique
      </a>{" "}
      by presetting a timer to 25 minutes, which by default leads to a 5 minute
      break period.
    </p>
    <p>
      This app was created using <strong>HTML</strong>, <strong>CSS</strong>,
      and <strong>plain JavaScript</strong>.
    </p>
    <a href="https://communitybicycle.github.io/pomodoro-clock/">
      <button>Go to Project</button>
    </a>
    <hr />
    <h2>JavaScript Calculator</h2>
    <p>
      Link to the calculator here:{" "}
      <Link to="/portfolio/calculator">Calculator</Link>
    </p>
  </Layout>
)

export default AboutPage
