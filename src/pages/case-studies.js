import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import WorkList from "../components/WorkList"

export const query = graphql`
  {
    allStoryblokEntry(filter: {full_slug: {regex: "/^case-studies\//"}}) {
      edges {
        node {
          name
          full_slug
          content
        }
      }
    }
  }
`

const CaseStudyPage = ({data}) => {

  const featuredWorkData = data.allStoryblokEntry.edges.map(item => {
    const content = JSON.parse(item.node.content);
    return ({
      _uid: content._uid,
      teaser: content.hero_teaser,
      headline: content.hero_headline,
      category: content.category,
      fullSlug: item.node.full_slug
    })
  })


  return (
    <Layout>
      <SEO title={"Work"} description={"Case Studies"}/>

      <Hero data={{
        // teaser: "Work",
        headline: "Work",
        // description: doc.hero_description,
        // linkText: doc.hero_link_text,
        // linkUrl: doc.hero_link_url.url,
        // linkIcon: doc.hero_link_icon,
        bgColor: '#fff'
      }} />


      <div className="container">
        <WorkList data={featuredWorkData}/>
      </div>


    </Layout>
  )
}

export default CaseStudyPage
