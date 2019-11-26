import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import { Navbar } from "./components/navigation/Navbar"

// Global application wrapper
export const AppLayout = ({ children, pageContext }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      return (
        <>
          <Navbar siteTitle={data.site.siteMetadata.title} />
          {/* <WindowDimensionsProvider>
              <Navbar siteTitle={data.site.siteMetadata.title} />
            </WindowDimensionsProvider> */}
          {/* <Menu /> */}
          <div
            className="container"
            // style={{
            //   // margin: `0 auto`,
            //   maxWidth: 960,
            //   padding: `0px 1.0875rem 1.45rem`,
            //   paddingTop: `1rem`,
            //   background: `#011627`,
            // }}
          >
            <main>{children}</main>
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </div>
        </>
      )
    }}
  />
)

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout
