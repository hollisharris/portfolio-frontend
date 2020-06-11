import { Link } from "gatsby"
import React from "react"

import '../styles/header.css'

const Header = () => (
  <header className="container">
    <div>
      <h1 className="brand">
        <Link to="/">
          hollis.
        </Link>
      </h1>
    </div>
    <nav>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
)

export default Header
