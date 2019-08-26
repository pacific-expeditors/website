/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Suspense } from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"

import "./layout.css"

const Layout = ({ children, pageContext }) => {
  // console.log(pageContext)
  return (
    <>
      <Suspense fallback={<div>Loading ...</div>}>
        <header className="header">
          {pageContext.sections
            .filter(section => section.__typename === 'ContentfulHeader')
            .map(section => {
              const Header = React.lazy(() => import(`./${section.__typename.replace('Contentful', '').toLowerCase()}`))
              return <Header key={section.__typename} {...section} />
            })
          }
        </header>

        <main>
          {/* {pageContext.sections.map(section => section.__typename && React.lazy(() => import(`./${section.__typename.toLowerCase()}`)))} */}
        </main>

        <footer>
        </footer>
      </Suspense>
    </>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
