import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import styled from 'styled-components'

const Foot = styled.section`
    background: #000;
    padding: 2rem 0;
`

const Contain = styled.div`
    color: #fff;
    display: grid;
    grid-gap: 40px;
    grid-template-columns: 1fr 7fr;
    margin: 0 auto;
    width: 80%;
    @media (max-width: 680px) {
      grid-template-columns: 1fr 3fr;
      width: 90%;
  }
`
const LogoImg = styled.img`
    display: block;
    margin: 5px auto 0 auto;
    width: 100%;
    padding-bottom: 2rem;

    @media (max-width: 530px) {
        width: 90%;
      }
`




const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
        <main>{children}</main>
        <Foot>
            <Contain>
              <LogoImg src={require('../images/tcr-logo.png')} />
              <div>
                <p>Founded on the heels of the civil rights movement of the 1960s, The Chicago Reporter confronts racial and economic inequality, using the power of investigative journalism.</p>
                <p>The Chicago Reporter 111 W. Jackson Blvd., Suite 820 | Chicago, IL 60604 (312) 427-4830 | tcr@chicagoreporter.com</p>
                © {new Date().getFullYear()}, Chicago Reporter
              </div>
            </Contain>
        </Foot>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
