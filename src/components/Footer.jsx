import instagramSrc from "/instagram.svg"
import messengerSrc from "/messenger.svg"

export default function Footer() {
  return (
    <footer className="footer-section layout-section">
      <div className="container footer-content">
        <div className="footer-text">
          <h2>Indulge in delightful treats</h2>
          <a href="mailto:contact@brownieandme.com">contact@brownieandme.com</a>
          <div className="footer-contact">
            <p>123 Bakery Street, Sweet Town</p>
            <p>Open: Mon-Sat 8am-6pm</p>
            <p>Tel: (555) 123-4567</p>
          </div>
        </div>

        <div className="social-box">
          <div className="messenger-logo-box social-logo-box">
            <img className="social-logo" src={messengerSrc || "/placeholder.svg"} alt="Messenger" />
          </div>
          <div className="instagram-logo-box social-logo-box">
            <img className="social-logo" src={instagramSrc || "/placeholder.svg"} alt="Instagram" />
          </div>
        </div>
      </div>
    </footer>
  )
}

