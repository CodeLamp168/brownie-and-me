"use client"

import { useState } from "react"

export default function Header() {
  const [navOpen, setNavOpen] = useState(false)

  const toggleNav = () => {
    setNavOpen(!navOpen)
  }

  return (
    <header className="header-section layout-section">
      <div className="container header-content">
        <div className="logo-box">
          <div className="logo-img">
            <img src="/brownie-logo.svg" alt="Brownie and Me Logo" />
          </div>
          <h2 className="logo-name">BROWNIE AND ME</h2>
        </div>

        <button className="nav-button nav-button-open-box" onClick={toggleNav} aria-label="Toggle navigation">
          <img src="/nav-menu-open.svg" alt="Open Menu" />
        </button>

        <nav className={`nav-wrap ${navOpen ? "active" : ""}`}>
          <div className="nav-box">
            <div className="nav-item nav-item-interactive-box">
              <h3>MENU</h3>
            </div>
            <div className="nav-item nav-item-interactive-box">
              <h3>DELIVERY</h3>
            </div>
            <div className="nav-item nav-item-interactive-box">
              <h3>ABOUT</h3>
            </div>
            <div className="nav-item nav-item-interactive-box">
              <h3>CONTACT</h3>
            </div>
          </div>
          <button className="nav-button nav-button-close-box" onClick={toggleNav} aria-label="Close navigation">
            <img src="/nav-menu-close.svg" alt="Close Menu" />
          </button>
        </nav>
      </div>
    </header>
  )
}

