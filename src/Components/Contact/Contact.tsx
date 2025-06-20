import "./Contact.css"
import { NavLink } from "react-router-dom"
import { MdClose } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";


const Contact = () => {

  const [sidebar, setSidebar] = useState(false);
      const toggleSidebar = () => {
        setSidebar(!sidebar);
      }

  return (
    <div>
      {sidebar && (
        <div
          className="bg-transparent-grey-bg w-[100%] h-full fixed right-0 top-0 flex justify-end"
          style={{ zIndex: 1000 }}>
          <div className="w-[90%] h-full flex flex-col font-heading-font w-[80%] h-[100%] py-5 px-2 bg-white-secondary bg-white">
            <button onClick={toggleSidebar} className="self-end me-5 text-2xl h-[7vh]">
              <MdClose />
            </button>
            <div className="mt-5 w-full relative bg-white">
              <input
                type="text"
                placeholder="Search..."
                className="w-full font-paragraph-font border-1 border-solid border-gray-300 rounded-sm p-2 text-gray-400 text-sm outline-0 font-extralight h-[8vh]"
              />
              <span className="absolute right-3 top-3 text-gray-400">
                <BsSearch />
              </span>
            </div>
            <ul className="mt-5 w-full flex flex-col gap-y-3 text-lime-500 p-3 bg-white h-[100vh]">
              <NavLink to={"/"}><li className="p-1">Home</li></NavLink>
              <NavLink to={"/about"}><li className="p-1">About</li></NavLink>
              <NavLink to={"/products"}><li className="p-1">Products</li></NavLink>
              <li className="p-1">Cart</li>
              <li className="p-1">Checkout</li>
              <li className="p-1">My account</li>
              <NavLink to={"/contact"}><li className="p-1">Contact</li></NavLink>
            </ul>
          </div>
        </div>
      )}
      {/* -- ====NAVBAR SECTION STARTS HERE====  */}
      <header className="contact-header-container">
      <div className="contact-header-logo">
        <img
          src="/images/organic-store-logo5.svg"
          alt="Organic store white logo"
        />
      </div>

      <div>
        <nav>
          <ul className="contact-header-navlinks">
            <NavLink to={"/"}><li><a href="">Home</a></li></NavLink>
            <NavLink to={"/about"}><li><a href="">About</a></li></NavLink>
            <NavLink to={"/products"}><li><a href="">Products</a></li></NavLink>
            <NavLink to={"/contact"}><li><a href="">Contact</a></li></NavLink>
          </ul>
        </nav>
      </div>

      <div className="contact-header-cart">
        <p>£0.00</p>
        <i className="fa-solid fa-bag-shopping">
          <span>0</span>
        </i>
        <i className="fa-solid fa-user"></i>
      </div>

      <span className="contact-header-nav-icon">
        <i className="fa-solid fa-bars"  onClick={toggleSidebar}></i>
      </span>
    </header>
    {/* -- ====NAVBAR SECTION ENDS HERE====  */}

    {/* -- ====HERO SECTION STARTS HERE====  */}
      <section>
        <div className="contact-hero">
          <h1>Get In Touch</h1>
        </div>
      </section>
      {/* -- ====HERO SECTION ENDS HERE====  */}

      {/* -- ====CONTACT DETAILS SECTION STARTS HERE====  */}
       {/* <section className="details-main-container">
        <div className="details-heading">
          <img src="/images/basil-leaf.png" alt="image of a green basil leaf"/>
        </div>

        <div className="details-sub-container">
          <div className="details-sub">
            <i className="fa-solid fa-phone"></i>
            <p>+123 456 7890</p>
            <p>+123 456 7890</p>
          </div>

          <div className="details-sub">
            <i className="fa-solid fa-envelope"></i>
            <p>info@example.com</p>
            <p>support@example.com</p>
          </div>

          <div className="details-sub">
            <i className="fa-solid fa-location-dot"></i>
            <p>1569 Ave, New York,</p>
            <p>NY 10028, USA</p>
          </div>
        </div>
       </section> */}
       {/* -- ====CONTACT DETAILS SECTION ENDS HERE====  */}

       {/* -- ====FOOTER SECTION STARTS HERE====  */}
    <footer>
      <div className="contact-footer-container">
        <div className="contact-footer-first">
          <img src="/images/organic-store-white-logo.png" alt="image of the company logo"/>
          <h4>
            Maecenas mi justo, interdum at consectetur vel, tristique et arcu.
          </h4>
        </div>

        <div className="contact-footer-nav">
          <h1>Website</h1>
          <ul>
            <NavLink to={"/"}><li>Home</li></NavLink>
            <NavLink to={"/about"}><li>About</li></NavLink>
            <NavLink to={"/products"}><li>Products</li></NavLink>
            <NavLink to={"/contact"}><li>Contact</li></NavLink>
          </ul>
        </div>

        <div className="contact-footer-quick-links">
          <h1>Quick Links</h1>
          <ul>
            <li>Know More About Us</li>
            <li>Visit Store</li>
            <li>Let's Connect</li>
          </ul>
        </div>

        <div className="contact-footer-site-links">
          <h1>Site Links</h1>
          <ul>
            <li>Privacy Policy</li>
            <li>Shipping Details</li>
            <li>Offer Coupons</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
      </div>

      
      <div className="contact-footer-second-container">
        <div className="contact-div-divider"></div>

        <div className="contact-footer-icons">
          <div>
            <p>
              Copyright © 2025 | Organic Store
            </p>
          </div>

          <div className="contact-footer-socials">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </footer>
    {/* -- ====FOOTER SECTION ENDS HERE==== </main> */}
    </div>
  )
}

export default Contact