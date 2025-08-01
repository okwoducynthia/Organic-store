import { NavLink } from "react-router-dom";
import "./Footer.css"

const Footer = () => {
  return (
    <div>
      {/* ====FOOTER SECTION STARTS HERE====  */}
      <footer>
        <div className="footer-container">
          <div className="footer-first">
            <img
              src="/images/organic-store-white-logo.png"
              alt="image of the company logo"
            />
            <h4>
              Maecenas mi justo, interdum at consectetur vel, tristique et arcu.
            </h4>
          </div>

          <div className="footer-nav">
            <h1>Website</h1>
            <ul>
              <NavLink to={"/"}>
                <li>Home</li>
              </NavLink>
              <NavLink to={"/about"}>
                <li>About</li>
              </NavLink>
              <NavLink to={"/products"}>
                <li>Products</li>
              </NavLink>
              <NavLink to={"/contact"}>
                <li>Contact</li>
              </NavLink>
            </ul>
          </div>

          <div className="footer-quick-links">
            <h1>Quick Links</h1>
            <ul>
              <li>Know More About Us</li>
              <li>Visit Store</li>
              <li>Let's Connect</li>
            </ul>
          </div>

          <div className="footer-site-links">
            <h1>Site Links</h1>
            <ul>
              <li>Privacy Policy</li>
              <li>Shipping Details</li>
              <li>Offer Coupons</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
        </div>

        <div className="footer-second-container">
          <div className="div-divider"></div>

          <div className="footer-icons">
            <div>
              <p>Copyright © 2025 | Organic Store</p>
            </div>

            <div className="footer-socials">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
      </footer>
      {/* ====FOOTER SECTION ENDS HERE====  */}
    </div>
  )
}

export default Footer