"use client"

import { useEffect } from "react"
import brownieImg from "/product-imgs/brownie.jpg"

export default function Home({ setCurrentPage }) {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="main-section layout-section">
      <div className="hero-banner">
        <div className="hero-content container">
          <div className="hero-text">
            <h1>
              Handcrafted <span>Brownies</span> & Sweet Treats
            </h1>
            <p>Indulge in our delicious homemade desserts made with premium ingredients and baked with love</p>
            <div className="hero-buttons">
              <button className="cta-button" onClick={() => setCurrentPage("menu")}>
                View Our Menu
              </button>
              <button className="cta-button-outline" onClick={() => setCurrentPage("order")}>
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="featured-products">
          <div className="section-header">
            <h2>Our Signature Treats</h2>
            <p>Discover our most loved creations</p>
          </div>

          <div className="featured-grid">
            <div className="featured-item">
              <div className="featured-image">
                <img src={brownieImg || "/placeholder.svg"} alt="Double Chocolate Brownie" />
              </div>
              <h3>Double Chocolate Brownie</h3>
              <p>Rich, fudgy with chocolate chunks</p>
              <span className="featured-price">$4.99</span>
            </div>

            <div className="featured-item">
              <div className="featured-image">
                <img src="/product-imgs/cookies.jpg" alt="Chocolate Chip Cookies" />
              </div>
              <h3>Chocolate Chip Cookies</h3>
              <p>Soft, chewy with melty chocolate chips</p>
              <span className="featured-price">$3.99</span>
            </div>

            <div className="featured-item">
              <div className="featured-image">
                <img src="/product-imgs/lemon-loaf.jpg" alt="Lemon Loaf" />
              </div>
              <h3>Lemon Loaf</h3>
              <p>Tangy, sweet with a zesty glaze</p>
              <span className="featured-price">$5.49</span>
            </div>
          </div>

          <div className="view-all-container">
            <button className="view-all-button" onClick={() => setCurrentPage("menu")}>
              View All Products
            </button>
          </div>
        </div>

        <div className="about-section">
          <div className="about-content-home">
            <div className="about-text-home">
              <h2>Our Story</h2>
              <p>
                Brownie and Me began in 2015 in a small kitchen with a passion for creating the perfect brownie. What
                started as weekend hobby for founder Sarah Johnson quickly blossomed into a beloved local business.
              </p>
              <p>
                Our commitment to quality ingredients and handcrafted recipes has been at the heart of everything we do.
                We believe that the best treats are made with love, care, and the finest ingredients available.
              </p>
              <div className="values-home">
                <div className="value-badge">Quality Ingredients</div>
                <div className="value-badge">Handcrafted</div>
                <div className="value-badge">Family Recipes</div>
              </div>
            </div>
            <div className="about-image-home">
              <img src="/placeholder.svg?height=400&width=400" alt="Brownie and Me bakery" />
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2>Ready to Order?</h2>
          <p>Contact us today to place your order for pickup or local delivery</p>
          <button className="cta-button" onClick={() => setCurrentPage("order")}>
            Order Now
          </button>
        </div>
      </div>
    </section>
  )
}

