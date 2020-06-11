import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/contact.css"


const ContactPage = ({data}) => {

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

      <section className="container contact">
        <section className="hero">
          <p className="teaser large">Contact Me</p>
          <h1>Get in touch</h1>
        </section>

        <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
          <p className="large">My name is {nameField} and I have a {projectField} that needs help. You can reach me at {contactField} to get things started.</p>
          <p class="hidden">
            <label>Don’t fill this out if you're human: <input aria-label="Bot Field" name="bot-field" /></label>
          </p>
          <input type="hidden" name="form-name" value="contact" />
          <button type="submit" aria-label="Send Info" className="link-primary  ">Send Info</button>
        </form>
      </section>


    </Layout>
  )
}

export default ContactPage
