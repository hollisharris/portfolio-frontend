import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import LinkPrimary, { LinkIcon } from "../components/LinkPrimary"

import "../styles/contact.css"

export const query = graphql`
  {
    storyblokEntry(slug: { eq: "contact" }) {
      content
    }
  }
`

const ContactPage = ({data}) => {
  const doc = JSON.parse(data.storyblokEntry.content);
  console.log(doc)

  const nameField =
    <label>
      <span className="hidden">Name:</span>
      <input type="text" name="Full Name" aria-label="Full Name" placeholder="John Smith"/>
    </label>,
  projectField =
    <label>
      <span className="hidden">Type:</span>
      <input type="text" name="Project Type" aria-label="Project Type" placeholder="full-time job, website, etc." />
    </label>,
  contactField =
  <label>
    <span className="hidden">Email:</span>
    <input type="email" name="Email" aria-label="Email" placeholder="john.smith@gmail.com" />
  </label>;

  return (
    <Layout>
      <SEO title="Contact" />

      <Hero data={{
          teaser: doc.hero_teaser,
          headline: doc.hero_headline,
          description: doc.hero_description
      }} />

      <section className="container contact">
        <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
          <p className="large">My name is {nameField} and I have a {projectField} that needs help. You can reach me at {contactField} to get things started.</p>
          <p className="hidden">
            <label>Don’t fill this out if you're human: <input aria-label="Bot Field" name="bot-field" /></label>
          </p>
          <input type="hidden" name="form-name" value="contact" />
          <button type="submit" aria-label="Send Info" className="link-primary  "><LinkIcon icon={doc.send_link_icon}/> Send Info</button>
        </form>

        <div className="contact-info">
          <ul>
            <li><LinkPrimary data={{text:doc.contact_email, url:`mailto:${doc.contact_email}`, block: true, icon: "mail"}} /> </li>
            <li><LinkPrimary data={{text:doc.contact_phone, url:`tel:${doc.contact_phone}`, block: true, icon: "smartphone"}} /> </li>
          </ul>
        </div>
      </section>


    </Layout>
  )
}

export default ContactPage
