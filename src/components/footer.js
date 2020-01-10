import React from "react"
import styled from "@emotion/styled"

const GatsbyLink = styled.a`
  margin-left: 5px;
`

const NewFooter = styled.footer`
  display: flex;
  justify-content: center;
`

const Footer = () => (
  <NewFooter>
    © {new Date().getFullYear()}, Built with
    <GatsbyLink href="https://www.gatsbyjs.org">Gatsby</GatsbyLink>
  </NewFooter>
)

export default Footer
