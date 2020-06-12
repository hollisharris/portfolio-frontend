import React from "react"
import { Link } from "gatsby"
import ReactMarkdown from "react-markdown"

import "../../styles/hero.css"

const HomeHero = ({data}) => {
  const   teaser        = data.teaser,
          headline      = data.headline,
          description   = data.description,
          linkText      = data.linkText,
          linkUrl       = data.linkUrl;

  return (
    <section className="container hero home-hero">
        <div className="hero-content">
          {teaser && <p className="teaser large">{teaser}</p>}
          {headline && <h1 className="headline">{headline}</h1>}
          {description && <div className="description"><ReactMarkdown source={description} /></div>}
          {linkText && linkUrl && <Link className="link-primary" to={linkUrl}>{linkText}</Link>}
        </div>
    </section>
  )
}

export default HomeHero
