import React, { useState } from "react"

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
  const [labelVisibility, toggleLabel] = useState({
    name: false,
    type: false,
    email: false
  });

  const showLabel = (id) => {
    toggleLabel({...labelVisibility, [id]: !labelVisibility[id]})
  }

  const hideLabel = (id) => {
    toggleLabel({...labelVisibility, [id]: !labelVisibility[id]})
  }

  const nameField =
  <span className={`label-${labelVisibility.name ? 'show' : 'hide'}`}>
    <label
      htmlFor="name">Full Name:</label>
    <input
      type="text"
      name="Full Name"
      id="name"
      aria-label="Full Name"
      placeholder="John Smith"
      onFocus={() => showLabel("name")}
      onBlur={() => hideLabel("name")}/>
  </span>,

  projectField =
  <span className={`label-${labelVisibility.type ? 'show' : 'hide'}`}>
    <label
      htmlFor="type">Project Type:</label>
    <input
      type="text"
      name="Project Type"
      id="type"
      aria-label="Project Type"
      placeholder="Full-time job, website, etc."
      onFocus={() => showLabel("type")}
      onBlur={() => hideLabel("type")}/>
  </span>,

  emailField =
  <span className={`label-${labelVisibility.email ? 'show' : 'hide'}`}>
    <label
      htmlFor="email">Email:</label>
    <input
      type="email"
      name="Email"
      id="email"
      aria-label="Email"
      placeholder="john.smith@gmail.com"
      onFocus={() => showLabel("email")}
      onBlur={() => hideLabel("email")}/>
  </span>;

  return (
    <Layout>
      <SEO title="Contact" />

      <Hero data={{
          teaser: doc.hero_teaser,
          headline: doc.hero_headline,
          description: doc.hero_description
      }} />

      <section className="container contact">
        <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/thankyou">
          <p className="large">My name is {nameField} and I have a {projectField} that needs help. You can reach me at {emailField} to get things started.</p>
          <p className="hidden">
            <label>Don’t fill this out if you're human: <input aria-label="Bot Field" name="bot-field" /></label>
          </p>
          <input type="hidden" name="form-name" value="contact" />
          <button type="submit" aria-label="Send Info" className="link-primary  "><LinkIcon icon={doc.send_link_icon}/> Send Info</button>
        </form>

        <div className="contact-info">
          <h2 className="teaser">Contact info</h2>
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
