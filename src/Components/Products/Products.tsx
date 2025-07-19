import "./Products.css"
import { NavLink } from "react-router-dom"
import { MdClose } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { ProductData } from "../../Data/ProductData/ProductData";
import { useState } from "react";

const Products = () => {

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
    <header className="products-header-container">
      <div className="products-header-logo">
        <img
          src="/images/organic-store-logo5.svg"
          alt="Organic store logo"
        />
      </div>

      <div>
        <nav>
          <ul className="products-header-navlinks">
            <NavLink to={"/"}><li><a href="">Home</a></li></NavLink>
            <NavLink to={"/about"}><li><a href="">About</a></li></NavLink>
            <NavLink to={"/products"}><li><a href="">Products</a></li></NavLink>
            <NavLink to={"/contact"}><li><a href="">Contact</a></li></NavLink>
          </ul>
        </nav>
      </div>

      <div className="products-header-cart">
        <p>£0.00</p>
        <i className="fa-solid fa-bag-shopping">
          <span>0</span>
        </i>
        <i className="fa-solid fa-user"></i>
      </div>

      <span className="products-header-nav-icon">
        <i className="fa-solid fa-bars" onClick={toggleSidebar}></i>
      </span>
    </header>
    {/* -- ====NAVBAR SECTION ENDS HERE====  */}

    <main>
      {/* -- ====SHOP SECTION STARTS HERE====  */}
      <section>
        <div className="shop-main-container">
          <div>
            <h1>Shop</h1>
          </div>

          <div className="shop-sub-container">
            <div className="shop-details">
              {ProductData .map((items: any) => (
                <>
                  <img src={items.image} alt="" />
                  <p>{items.category}</p>
                  <h3>{items.name}</h3>
                  <i>
                    {Array.from({ length: items.rating }).map((_, i) => (
                      <span key={i} className="star">
                        &#9733;
                      </span>
                    ))}
                    {Array.from({ length: 5 - items.rating }).map((_, i) => (
                      <span key={i} id ="empty-star">
                        &#9733;
                      </span>
                    ))}
                  </i>
                  <h4>{items.price}</h4>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* -- ====SHOP SECTION ENDS HERE====   */}
    </main>

    {/* -- ====FOOTER SECTION STARTS HERE====  */}
    <footer className="products-footer-main">
      <div className="products-footer-container">
        <div className="products-footer-first">
          <img src="/images/organic-store-white-logo.png" alt="image of the company logo"/>
          <h4>
            Maecenas mi justo, interdum at consectetur vel, tristique et arcu.
          </h4>
        </div>

        <div className="products-footer-nav">
          <h1>Website</h1>
          <ul>
            <NavLink to={"/"}><li>Home</li></NavLink>
            <NavLink to={"/about"}><li>About</li></NavLink>
            <NavLink to={"/products"}><li>Products</li></NavLink>
            <NavLink to={"/contact"}><li>Contact</li></NavLink>
          </ul>
        </div>

        <div className="products-footer-quick-links">
          <h1>Quick Links</h1>
          <ul>
            <li>Know More About Us</li>
            <li>Visit Store</li>
            <li>Let's Connect</li>
          </ul>
        </div>

        <div className="products-footer-site-links">
          <h1>Site Links</h1>
          <ul>
            <li>Privacy Policy</li>
            <li>Shipping Details</li>
            <li>Offer Coupons</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
      </div>

      
      <div className="products-footer-second-container">
        <div className="products-div-divider"></div>

        <div className="products-footer-icons">
          <div>
            <p>
              Copyright © 2025 | Organic Store
            </p>
          </div>

          <div className="products-footer-socials">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Products