import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"

const ThankYouPage = ({data}) => {

  return (
    <Layout>
      <SEO title={"Thank You"} description={"I'll contact you soon."}/>

      <Hero data={{
        // teaser: "Thank You",
        headline: "Thank You.",
        description: "I'm excited to start working with you and will be reaching out soon.",
        // linkText: doc.hero_link_text,
        // linkUrl: doc.hero_link_url.url,
        // linkIcon: doc.hero_link_icon,
        bgColor: '#fff'
      }} />


    </Layout>
  )
}

export default ThankYouPage
