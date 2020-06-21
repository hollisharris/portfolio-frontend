import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactMarkdown from "react-markdown"

import { HeroCaseStudy } from "../components/Hero"
import { ImageColumns, NextCaseStudy } from "../components/CaseStudy"
import { ContactFooter } from "../components/Footer"

import "../styles/case-study.css"

export const query = graphql`
  query($full_slug: String!) {
    storyblokEntry(full_slug: {eq: $full_slug}) {
      content
      position
    },
    allStoryblokEntry(filter: {full_slug: {regex: "/^case-studies//", ne: "case-studies/"}}) {
      edges {
        node {
          name
          full_slug
          content
          position
        }
      }
    }
  }
`
const CaseStudy = ({data}) => {
  const doc = JSON.parse(data.storyblokEntry.content);

  const roles = doc.roles.map((role, index) => {
    return <li key={index} >{role}</li>
  })

  const pageContent = doc.components.map(component => {
    switch(component.component) {
      case 'image_columns':
        return <ImageColumns  key={component._uid} data={component.column_group}/>
      default:
        return <div className="text-block" key={component._uid}><ReactMarkdown source={component.content} /></div>;
    }
  })

  const newAll = data.allStoryblokEntry.edges.map(item => {
    const content = JSON.parse(item.node.content);
    return ({
      position: item.node.position,
      teaser: content.hero_teaser,
      headline: content.hero_headline,
      category: content.category,
      slug: item.node.full_slug,
      startColor: content.hero_color_start ? content.hero_color_start.color : null,
      endColor: content.hero_color_end ? content.hero_color_end.color : null
    })
  })

  return (
    <Layout headerColor="light">
      <SEO title={doc.seo.title || doc.hero_teaser} description={doc.seo.description || doc.hero_headline}/>

      <HeroCaseStudy data={{
        teaser: doc.hero_teaser,
        category: doc.category,
        headline: doc.hero_headline,
        description: doc.hero_description,
        foreground: doc.hero_foreground_image,
        background: doc.hero_background_image,
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

      <NextCaseStudy data={{
        current: data.storyblokEntry.position,
        all: newAll
      }}/>

      <ContactFooter />

    </Layout>
  )
}

export default CaseStudy
