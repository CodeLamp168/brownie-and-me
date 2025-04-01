import cookieImg from "/product-imgs/cookies.jpg"
import brownieImg from "/product-imgs/brownie.jpg"
import lemonloafImg from "/product-imgs/lemon-loaf.jpg"
import muffinImg from "/product-imgs/muffin.jpg"

export default function Main() {
  const products = [
    {
      id: 1,
      name: "Double Chocolate Brownie",
      image: brownieImg,
      description: "Rich, fudgy with chocolate chunks",
      price: "4.99",
    },
    {
      id: 2,
      name: "Chocolate Chip Cookie",
      image: cookieImg,
      description: "Soft, chewy with melty chocolate chips",
      price: "3.99",
    },
    {
      id: 3,
      name: "Lemon Loaf",
      image: lemonloafImg,
      description: "Tangy, sweet with a zesty glaze",
      price: "5.49",
    },
    {
      id: 4,
      name: "Blueberry Muffin",
      image: muffinImg,
      description: "Bursting with fresh blueberries",
      price: "4.29",
    },
  ]

  return (
    <section className="main-section layout-section">
      <div className="container">
        <div className="hero-content-wrap">
          <div className="hero-product-gallery-wrap">
            {products.map((product) => (
              <div className="hero-product-item" key={product.id}>
                <img src={product.image || "/placeholder.svg"} alt={product.name} />
                <div className="product-text-content">
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                  <div className="product-price">${product.price}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="call-to-action">
            <h2>
              Make your occasion <i>extra</i> special
            </h2>
            <p>
              Discover our irresistible brownies, cookies, and a delightful array of treats, all made with love and the
              finest ingredients. Whether you're celebrating a special occasion or simply craving a sweet escape, we've
              got the perfect goodies to satisfy your every desire.
            </p>
            <div className="cta-button-container">
              <a href="#" className="cta-button">
                Order Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

