import React from "react"
import { Link } from "gatsby"

import '../styles/links.css'
import 'css.gg/icons/all.css'
import '../styles/fontawesome.css'

const LinkPrimary = ({data}) => {
  const   url  = data.url,
          path = data.path,
          text = data.text,
          aria = data.aria,
          showIcon = data.showIcon,
          icon = data.icon || "chevron-right",
          block = data.block;

  let linkElement = <Link className={`link-primary ${block ? 'block' : null}`} to={path} aria-label={aria ? aria : text}>{showIcon !== false ? <LinkIcon icon={icon}/> : null }{text}</Link>

  if(url) {
    linkElement = <a className={`link-primary ${block ? 'block' : null}`} href={url} aria-label={aria ? aria : text}>{showIcon !== false ? <LinkIcon icon={icon}/> : null }{text}</a>
  }
  
  return linkElement
}

const LinkIcon = ({icon}) => (<i className={`fa fa-${icon}`}/>)
// const LinkIcon = () => (null)

export {
  LinkIcon
}

export default LinkPrimary