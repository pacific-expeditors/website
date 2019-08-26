/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

const path = require('path')

exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators
  return new Promise((resolve, reject) => {
    const layoutTemplate = path.resolve('src/components/layout.js')
    resolve(
      graphql(`
        {
          allContentfulPage (limit:100) {
            edges {
              node {
                slug
                title
                sections {
                  __typename
                  ... on ContentfulHeader {
                    siteTitle
                    logo {
                      title
                      description
                      file {
                        url
                      }
                    }
                    mobileLogo {
                      title
                      description
                      file {
                        url
                      }
                    }
                    navigationLinks {
                      href
                      text
                      alignment
                      subNavigationLinks {
                        ... on ContentfulNavigationLinks {
                          href
                          text
                        }
                      }
                    }
                  }
                  ... on ContentfulFooter {
                    copyright
                    logo {
                      title
                      description
                      file {
                        url
                      }
                    }
                    footerLinks {
                      href
                      text
                    }
                    socialMediaLinks {
                      id
                      title
                      link
                      icon {
                        file {
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }

        result.data.allContentfulPage.edges.forEach((edge) => {
          if (edge.node.slug) {
            createPage({
              path: edge.node.slug,
              component: layoutTemplate,
              context: {
                slug: edge.node.slug,
                sections: edge.node.sections,
                title: edge.node.title
              }
            })
          }
        })

        return
      })
    )
  })
}