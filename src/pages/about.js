import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled.div`
  display: flex;
`

const Column = styled.div`
  flex: 1;
`

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <h1>About</h1>
    <p>
      Hi! I am a full stack web developer. After graduating from the University
      of British Columbia with a degree in philosophy and a minor specialization
      in business, I decided to pursue a career in developing great software
      that will enrich the lives of others.
    </p>
    <p>
      I am also a self-taught developer. And as such, I advise you to check out
      my projects <Link to="/portfolio">here</Link>.
    </p>
    <h2>Toolkit</h2>
    <Container>
      <Column>
        <strong>Frontend</strong>

        <ul>
          <li>JavaScript</li>
          <li>CSS + HTML5</li>
          <ul>
            <li>Bootstrap</li>
          </ul>
          <li>React</li>
          <ul>
            <li>Redux</li>
            <li>material-ui</li>
            <li>react-router-dom</li>
            <li>react-beautiful-dnd</li>
            <li>socket.io</li>
          </ul>
        </ul>
        <strong>Languages</strong>
        <ul>
          <li>JavaScript</li>
          <li>Python</li>
          <li>C</li>
        </ul>
      </Column>
      <Column>
        <strong>Backend</strong>
        <ul>
          <li>Node.js</li>
          <ul>
            <li>Express</li>
            <li>mongoose</li>
            <li>socket.io</li>
            <li>cheerio</li>
          </ul>
          <li>Python</li>
          <ul>
            <li>Flask</li>
          </ul>
          <li>Databases</li>
          <ul>
            <li>MongoDB</li>
            <li>SQL</li>
          </ul>
        </ul>
        <strong>Other</strong>
        <ul>
          <li>Git & GitHub</li>
          <li>WebStorm</li>
          <li>Design</li>
          <ul>
            <li>Adobe Illustrator</li>
            <li>Whimsical</li>
          </ul>
          <li>Project Management</li>
          <ul>
            <li>Trello</li>
            <li>Notion</li>
          </ul>
        </ul>
      </Column>
    </Container>
    <h2>Certificates</h2>
    <strong>freeCodeCamp</strong> -{" "}
    <a href="https://www.freecodecamp.org/communitybicycle">Profile</a>
    <ul>
      <li>Responsive Web Design Certification</li>
      <li>JavaScript Algorithms and Data Structures</li>
      <li>Front End Libraries Certification</li>
      <li>Data Visualization Certification</li>
      <li>APIs and Microservices Certification</li>
    </ul>
    <h2>Courses</h2>
    <p>
      <a href="https://www.edx.org/course/cs50s-introduction-to-computer-science">
        CS50's Introduction to Computer Science
      </a>
    </p>
    <p>
      <a href="https://www.udacity.com/course/introduction-to-python--ud1110">
        CS101: Intro to Computer Science
      </a>{" "}
      by Dave Evans
    </p>
    <p>
      <a href="https://automatetheboringstuff.com/">
        Automating the Boring Stuff With Python
      </a>
    </p>
    <p>
      <a href="https://www.udemy.com/course/the-web-developer-bootcamp">
        The Web Developer Bootcamp
      </a>
    </p>
    <p>
      <a href="https://www.udemy.com/course/modern-react-bootcamp/">
        The Modern React Bootcamp
      </a>
    </p>
    <p>
      <a href="https://www.udemy.com/course/the-advanced-web-developer-bootcamp">
        The Advanced Web Developer Bootcamp
      </a>
    </p>
    <p>
      <a href="https://www.udemy.com/course/understand-javascript">
        JavaScript: Understanding the Weird Parts
      </a>
    </p>
  </Layout>
)

export default AboutPage
