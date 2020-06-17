import { Link } from "gatsby"
import React from "react"

import LinkPrimary from './LinkPrimary'

import '../styles/header.css'

const Header = ({headerColor}) => (
  <header className={headerColor ? headerColor :''}>
    <div className="container">
      <h1 className="brand">
        <Link to="/">
          hollis.
        </Link>
      </h1>
      <nav>
        <LinkPrimary data={{
          path: "/case-studies",
          text: "Case Studies",
          showIcon: false
        }}/>
        <LinkPrimary data={{
          path: "/contact",
          text: "Contact",
          showIcon: false
        }}/>
      </nav>
    </div>
  </header>
)

export default Header
