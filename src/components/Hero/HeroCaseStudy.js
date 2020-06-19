import React from "react"
import ReactMarkdown from "react-markdown"

import LinkPrimary from '../LinkPrimary';

import "../../styles/hero.css"

const HeroCaseStudy = ({data}) => {
  const   teaser        = data.teaser,
          category      = data.category,
          headline      = data.headline,
          description   = data.description,
          linkText      = data.linkText,
          linkUrl       = data.linkUrl,
          foreground    = data.foreground,
          background    = data.background,
          startColor    = data.startColor,
          endColor      = data.endColor;

  let hexToRgb = (hex, alpha) => {
    hex   = hex.replace('#', '');
    var r = parseInt(hex.length == 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2), 16);
    var g = parseInt(hex.length == 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4), 16);
    var b = parseInt(hex.length == 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6), 16);
    if ( alpha ) {
        return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
    }
    else {
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
  }

  return (
    <section className=" hero case-study light">
      <div className="hero-background">
        <div className="hero-background-image" style={{backgroundImage: `url('${background}')`}}></div>
        <div className="hero-overlay" style={startColor && endColor && { backgroundImage: `linear-gradient(to right, ${hexToRgb(startColor, '1')} 30%, ${hexToRgb(startColor, '.7')} 70%, ${hexToRgb(endColor, '.3')} 100%`}}></div>
      </div>
      <div className="container">
        <div className="hero-content">
          {teaser && <p className="teaser">{teaser} | {category}</p>}
          {headline && <h1 className="headline">{headline}</h1>}
          {description && <div className="description"><ReactMarkdown source={description} /></div>}
          
          {linkText && linkUrl && <LinkPrimary data={{path: linkUrl, text: linkText}} />}
        </div>
        <div className="hero-foreground" >
          <img src={foreground} alt=""/>
        </div>
      </div>
    </section>
  )
}

export default HeroCaseStudy
