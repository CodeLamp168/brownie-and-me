"use client"

import { useState } from "react"

export default function Header({ currentPage, setCurrentPage }) {
  const [navOpen, setNavOpen] = useState(false)

  const toggleNav = () => {
    setNavOpen(!navOpen)
  }

  const handleNavClick = (page) => {
    setCurrentPage(page)
    setNavOpen(false)
  }

  return (
    <header className="header-section layout-section">
      <div className="container header-content">
        <div className="logo-box" onClick={() => handleNavClick("home")} style={{ cursor: "pointer" }}>
          <div className="logo-img">
            <img src="/brownie-logo.svg" alt="Brownie and Me Logo" />
          </div>
          <h2 className="logo-name">BROWNIE AND ME</h2>
        </div>

        {/* Mobile Navigation Toggle Button - Only visible on mobile */}
        <button className="nav-button nav-button-open-box" onClick={toggleNav} aria-label="Toggle navigation">
          <img src="/nav-menu-open.svg" alt="Open Menu" />
        </button>

        {/* Navigation - Transforms to mobile menu on small screens, horizontal nav on desktop */}
        <nav className={`nav-wrap ${navOpen ? "active" : ""}`}>
          <div className="nav-box">
            <div
              className={`nav-item nav-item-interactive-box ${currentPage === "home" ? "active" : ""}`}
              onClick={() => handleNavClick("home")}
            >
              <h3>HOME</h3>
            </div>

            <div
              className={`nav-item nav-item-interactive-box ${currentPage === "menu" ? "active" : ""}`}
              onClick={() => handleNavClick("menu")}
            >
              <h3>MENU</h3>
            </div>

            <div
              className={`nav-item nav-item-interactive-box order-button ${currentPage === "order" ? "active" : ""}`}
              onClick={() => handleNavClick("order")}
            >
              <h3>ORDER</h3>
            </div>
          </div>

          {/* Mobile Close Button - Only visible in mobile menu */}
          <button className="nav-button nav-button-close-box" onClick={toggleNav} aria-label="Close navigation">
            <img src="/nav-menu-close.svg" alt="Close Menu" />
          </button>
        </nav>
      </div>
    </header>
  )
}

