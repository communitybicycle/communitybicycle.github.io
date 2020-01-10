import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const GatsbyLink = styled.a`
  margin-left: 5px;
`

const NewFooter = styled.footer`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const Footer = () => (
  <NewFooter>
    <div id="footer-top">
      © {new Date().getFullYear()}, Built with
      <GatsbyLink href="https://www.gatsbyjs.org">Gatsby</GatsbyLink>.
    </div>
    <div id="footer-bottom">
      <p>
        <a href="mailto:hal.shin@alumni.ubc.ca">Email</a> |{" "}
        <a href="https://twitter.com/_halshin" target="_blank">
          Twitter
        </a>{" "}
        |{" "}
        <a href="https://github.com/communitybicycle" target="_blank">
          GitHub
        </a>
      </p>
    </div>
  </NewFooter>
)

export default Footer
