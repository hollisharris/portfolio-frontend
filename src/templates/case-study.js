import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactMarkdown from "react-markdown"

import { HeroCaseStudy } from "../components/Hero"
import { ImageColumns } from "../components/CaseStudy"

import "../styles/case-study.css"

export const query = graphql`
  query($full_slug: String!) {
    storyblokEntry(full_slug: {eq: $full_slug}) {
      content
    }
  }
`
const CaseStudy = ({data}) => {
  const doc = JSON.parse(data.storyblokEntry.content);
  console.log(doc)

  const roles = doc.roles.map(role => {
    return <li>{role}</li>
  })

  const pageContent = doc.components.map(component => {
    switch(component.component) {
      case 'image_columns':
        return <ImageColumns data={component.column_group}/>
      default:
        return <div className="text-block"><ReactMarkdown source={component.content} /></div>;
    }
  })

  return (
    <Layout headerColor="light">
      <SEO title={doc.seo.title || doc.hero_teaser} description={doc.seo.description || doc.hero_headline}/>

      <HeroCaseStudy data={{
        teaser: doc.hero_teaser,
        category: doc.category,
        headline: doc.hero_headline,
        description: doc.hero_description,
        foreground: doc.hero_foreground_image.filename,
        background: doc.hero_background_image.filename,
        startColor: doc.hero_color_start ? doc.hero_color_start.color : null,
        endColor: doc.hero_color_end ? doc.hero_color_end.color : null
      }} />

      <section className="case-study-content">
        <div className="container">
          <div className="roles">
            <h2>What I Did</h2>
            <ul>
              {roles}
            </ul>
          </div>
          {pageContent}
        </div>
        
        
      </section>
      


    </Layout>
  )
}

export default CaseStudy
