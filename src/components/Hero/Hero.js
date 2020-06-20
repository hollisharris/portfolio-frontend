import React from "react"
import ReactMarkdown from "react-markdown"

import LinkPrimary from '../LinkPrimary';

import "../../styles/hero.css"

const Hero = ({data}) => {
  const   teaser        = data.teaser,
          headline      = data.headline,
          description   = data.description,
          linkText      = data.linkText,
          linkUrl       = data.linkUrl,
          linkIcon      = data.linkIcon,
          color         = data.color || '',
          bgColor       = data.bgColor || 'transparent',
          offset        = data.offset || false;

  return (
    <section className={`hero ${color} ${offset ? 'offset' : ''}`} style={{backgroundColor: bgColor }}>
      <div className="container">
        <div className="hero-content">
          {teaser && <h1 className="teaser">{teaser}</h1>}
          {headline && <p className="headline">{headline}</p>}
          {description && <div className="description"><ReactMarkdown source={description} /></div>}
          
          {linkText && linkUrl && <LinkPrimary data={{path: linkUrl, text: linkText, icon: linkIcon}} />}
        </div>
      </div>
    </section>
  )
}

export default Hero
