"use client"

import { useEffect } from "react"

export default function Order() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="main-section layout-section">
      <div className="container">
        <div className="page-header">
          <h1>How to Order</h1>
          <p className="page-subtitle">Simple steps to get your sweet treats</p>
        </div>

        <div className="order-info-container">
          <div className="order-steps">
            <div className="order-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Browse Our Menu</h3>
                <p>Take a look at our delicious selection of treats and decide what you'd like to order.</p>
              </div>
            </div>

            <div className="order-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Contact Us</h3>
                <p>Reach out via phone, email, or social media with your order details.</p>
              </div>
            </div>

            <div className="order-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Confirm Your Order</h3>
                <p>We'll confirm availability, pricing, and arrange payment details.</p>
              </div>
            </div>

            <div className="order-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Pickup or Delivery</h3>
                <p>Choose to pick up your order at our bakery or have it delivered locally.</p>
              </div>
            </div>
          </div>

          <div className="order-contact-details">
            <div className="contact-card">
              <h3>Contact Information</h3>
              <div className="contact-item">
                <strong>Phone:</strong> (555) 123-4567
              </div>
              <div className="contact-item">
                <strong>Email:</strong> orders@brownieandme.com
              </div>
              <div className="contact-item">
                <strong>Address:</strong> 123 Bakery Street, Sweet Town
              </div>
            </div>

            <div className="hours-card">
              <h3>Business Hours</h3>
              <div className="hours-item">
                <strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM
              </div>
              <div className="hours-item">
                <strong>Saturday:</strong> 9:00 AM - 5:00 PM
              </div>
              <div className="hours-item">
                <strong>Sunday:</strong> Closed
              </div>
            </div>

            <div className="policies-card">
              <h3>Ordering Policies</h3>
              <ul className="policies-list">
                <li>Please place orders at least 24 hours in advance</li>
                <li>Custom orders may require 48-72 hours notice</li>
                <li>Delivery available within 10 miles ($5 fee)</li>
                <li>Payment accepted via credit card, cash, or Venmo</li>
              </ul>
            </div>
          </div>

          <div className="special-orders-box">
            <h3>Special Dietary Needs?</h3>
            <p>
              We offer gluten-free, vegan, and nut-free options. Please specify any dietary requirements when placing
              your order.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

