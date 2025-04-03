export default function About() {
  return (
    <section className="main-section layout-section">
      <div className="container">
        <div className="page-header">
          <h1>About Us</h1>
          <p className="page-subtitle">The story behind our sweet creations</p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img src="/placeholder.svg?height=400&width=600" alt="Brownie and Me bakery" className="about-main-image" />
          </div>

          <div className="about-text">
            <h2>Our Sweet Beginning</h2>
            <p>
              Brownie and Me began in 2015 in a small kitchen with a passion for creating the perfect brownie. What
              started as weekend hobby for founder Sarah Johnson quickly blossomed into a beloved local business.
            </p>
            <p>
              Our commitment to quality ingredients and handcrafted recipes has been at the heart of everything we do.
              We believe that the best treats are made with love, care, and the finest ingredients available.
            </p>

            <h2 className="mt-4">Our Values</h2>
            <div className="values-container">
              <div className="value-item">
                <h3>Quality</h3>
                <p>We use only premium ingredients, sourcing locally whenever possible.</p>
              </div>
              <div className="value-item">
                <h3>Creativity</h3>
                <p>We constantly innovate with new flavors and seasonal specialties.</p>
              </div>
              <div className="value-item">
                <h3>Community</h3>
                <p>We're proud to be part of our local community and support local causes.</p>
              </div>
            </div>

            <h2 className="mt-4">Meet Our Team</h2>
            <div className="team-container">
              <div className="team-member">
                <div className="team-image">
                  <img src="/placeholder.svg?height=150&width=150" alt="Sarah Johnson" />
                </div>
                <h3>Sarah Johnson</h3>
                <p>Founder & Head Baker</p>
              </div>
              <div className="team-member">
                <div className="team-image">
                  <img src="/placeholder.svg?height=150&width=150" alt="Michael Chen" />
                </div>
                <h3>Michael Chen</h3>
                <p>Pastry Chef</p>
              </div>
              <div className="team-member">
                <div className="team-image">
                  <img src="/placeholder.svg?height=150&width=150" alt="Emma Rodriguez" />
                </div>
                <h3>Emma Rodriguez</h3>
                <p>Customer Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

