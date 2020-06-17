const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const caseStudyEntry = path.resolve('src/templates/case-study.js')

    resolve(
      graphql(
        `{
            caseStudies: allStoryblokEntry(filter: {full_slug: {regex: "/^case-studies\//"}}) {
              edges {
                node {
                  name
                  full_slug
                  content
                }
              }
            }
          }`
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const case_studies = result.data.caseStudies.edges
        case_studies.forEach((entry, index) => {

          createPage({
            path: `/${entry.node.full_slug}`,
            component: caseStudyEntry,
            context: {
                full_slug: entry.node.full_slug
            }
          })
        })
      })
    )
  })
}