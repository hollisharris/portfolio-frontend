import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { HomeHero } from "../components/Hero"
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
  console.log(data)

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
      {/* <SEO title={doc.seo.title} description={doc.seo.description}/>

      <HomeHero data={{
        teaser: doc.hero_teaser,
        headline: doc.hero_headline,
        description: doc.hero_description,
        linkText: doc.hero_link_text,
        linkUrl: doc.hero_link_url.url
      }} /> */}

      <div className="container">
        <WorkList data={featuredWorkData}/>
      </div>


    </Layout>
  )
}

export default CaseStudyPage
