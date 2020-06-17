import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import WorkList from "../components/WorkList"

export const query = graphql`
  {
    storyblokEntry(slug: { eq: "home" }) {
      content
    }
  }
`

const IndexPage = ({data}) => {
  const doc = JSON.parse(data.storyblokEntry.content);
  console.log(doc)

  return (
    <Layout className="home">
      <SEO title={doc.seo.title} description={doc.seo.description}/>

      <Hero data={{
        teaser: doc.hero_teaser,
        headline: doc.hero_headline,
        description: doc.hero_description,
        linkText: doc.hero_link_text,
        linkUrl: doc.hero_link_url.url,
        linkIcon: doc.hero_link_icon
      }} />

      <div className="container">
        <h2>{doc.featured_work_headline}</h2>
        <WorkList data={doc.featured_work}/>
      </div>


    </Layout>
  )
}

export default IndexPage
