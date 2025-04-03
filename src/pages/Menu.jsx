"use client"

import { useEffect, useState } from "react"
import cookieImg from "/product-imgs/cookies.jpg"
import brownieImg from "/product-imgs/brownie.jpg"
import lemonloafImg from "/product-imgs/lemon-loaf.jpg"
import muffinImg from "/product-imgs/muffin.jpg"

export default function Menu({ setCurrentPage }) {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Products" },
    { id: "brownies", name: "Brownies" },
    { id: "cookies", name: "Cookies" },
    { id: "cakes", name: "Cakes & Loaves" },
    { id: "muffins", name: "Muffins" },
  ]

  const products = [
    {
      id: 1,
      name: "Double Chocolate Brownie",
      image: brownieImg,
      description: "Rich, fudgy with chocolate chunks",
      price: "4.99",
      category: "brownies",
      bestseller: true,
    },
    {
      id: 2,
      name: "Chocolate Chip Cookie",
      image: cookieImg,
      description: "Soft, chewy with melty chocolate chips",
      price: "3.99",
      category: "cookies",
      bestseller: true,
    },
    {
      id: 3,
      name: "Lemon Loaf",
      image: lemonloafImg,
      description: "Tangy, sweet with a zesty glaze",
      price: "5.49",
      category: "cakes",
      bestseller: false,
    },
    {
      id: 4,
      name: "Blueberry Muffin",
      image: muffinImg,
      description: "Bursting with fresh blueberries",
      price: "4.29",
      category: "muffins",
      bestseller: false,
    },
    {
      id: 5,
      name: "Walnut Brownie",
      image: brownieImg,
      description: "Classic brownie with crunchy walnuts",
      price: "4.99",
      category: "brownies",
      bestseller: false,
    },
    {
      id: 6,
      name: "Oatmeal Raisin Cookie",
      image: cookieImg,
      description: "Chewy oatmeal with plump raisins",
      price: "3.99",
      category: "cookies",
      bestseller: false,
    },
    {
      id: 7,
      name: "Banana Bread",
      image: lemonloafImg,
      description: "Moist banana bread with cinnamon",
      price: "5.49",
      category: "cakes",
      bestseller: true,
    },
    {
      id: 8,
      name: "Chocolate Muffin",
      image: muffinImg,
      description: "Double chocolate with chocolate chips",
      price: "4.29",
      category: "muffins",
      bestseller: false,
    },
  ]

  const filteredProducts =
    activeCategory === "all" ? products : products.filter((product) => product.category === activeCategory)

  return (
    <section className="main-section layout-section">
      <div className="container">
        <div className="page-header">
          <h1>Our Menu</h1>
          <p className="page-subtitle">Handcrafted with love and premium ingredients</p>
        </div>

        <div className="menu-categories">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-button ${activeCategory === category.id ? "active" : ""}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="menu-products">
          {filteredProducts.map((product) => (
            <div className="menu-product-item" key={product.id}>
              <div className="product-image">
                <img src={product.image || "/placeholder.svg"} alt={product.name} />
                {product.bestseller && <span className="bestseller-badge">Bestseller</span>}
              </div>
              <div className="product-details">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-footer">
                  <span className="menu-product-price">${product.price}</span>
                  <button className="add-to-order-button" onClick={() => setCurrentPage("order")}>
                    Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="menu-cta">
          <div className="menu-cta-content">
            <h2>Special Orders</h2>
            <p>Need a custom order or have dietary requirements? We're happy to accommodate your needs.</p>
            <button className="cta-button" onClick={() => setCurrentPage("order")}>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

