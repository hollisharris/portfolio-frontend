import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero, { ImageOffset } from "../components/Hero"
import WorkList from "../components/WorkList"
import { ContactFooter } from "../components/Footer"

export const query = graphql`
  {
    storyblokEntry(slug: { eq: "home" }) {
      content
    }
  }
`

const IndexPage = ({data}) => {
  const doc = JSON.parse(data.storyblokEntry.content);
  console.log(doc.featured_work)

  const featuredWorkData = doc.featured_work.map(item => {
    const story = item.relation.story
    return ({
      _uid: item._uid,
      teaser: story.content.hero_teaser,
      headline: story.content.hero_headline,
      category: story.content.category,
      fullSlug: story.full_slug,
      foreground: story.content.hero_foreground_image.filename,
      background: story.content.hero_background_image.filename
    })
  })

  return (
    <Layout className="home">
      <SEO title={doc.seo.title} description={doc.seo.description}/>

      <Hero data={{
        teaser: doc.hero_teaser,
        headline: doc.hero_headline,
        description: doc.hero_description,
        linkText: doc.hero_link_text,
        linkUrl: doc.hero_link_url.url,
        linkIcon: doc.hero_link_icon,
        bgColor: '#fff'
      }} />

      <ImageOffset data={{
        offset: false,
        src:"https://res.cloudinary.com/madebyhollis/image/upload/v1592517327/madebyhollis_25fd5a2e-db9c-4efd-87c5-f92b1cca0750_active-mobile-hero-v3_yttux1.jpg"
      }} />

      <div className="container">
        <h2 className="work-list-header">{doc.featured_work_headline}</h2>
        <WorkList data={featuredWorkData}/>
      </div>

      <ContactFooter dark="true" />


    </Layout>
  )
}

export default IndexPage
