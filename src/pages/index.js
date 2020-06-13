import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HomeHero from "../components/Hero"

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
    <Layout>
      <SEO title={doc.seo.title} description={doc.seo.description}/>

      <HomeHero data={{
        teaser: doc.hero_teaser,
        headline: doc.hero_headline,
        description: doc.hero_description,
        linkText: doc.hero_link_text,
        linkUrl: doc.hero_link_url.url
      }} />

      <div className="container">
        <h2>Featured Work</h2>
      </div>


    </Layout>
  )
}

export default IndexPage
