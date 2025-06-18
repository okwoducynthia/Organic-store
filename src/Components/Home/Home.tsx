import "./Home.css";
import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

const Home = () => {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

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

      {/* ====NAVBAR SECTION STARTS HERE====  */}
      <header className="header-container">
        <div className="header-logo">
          <img
            src="/images/organic-store-logo5.svg"
            alt="Organic store white logo"
          />
        </div>

        <div>
          <nav>
            <ul className="header-navlinks">
              <NavLink to={"/"}><li><a href="">Home</a></li></NavLink>
              <NavLink to={"/about"}><li><a href="">About</a></li></NavLink>
              <NavLink to={"/products"}><li><a href="">Products</a></li></NavLink>
              <NavLink to={"/contact"}><li><a href="">Contact</a></li></NavLink>
            </ul>
          </nav>
        </div>

        <div className="header-cart">
          <p>£0.00</p>
          <i className="fa-solid fa-bag-shopping">
            <span>0</span>
          </i>
          <i className="fa-solid fa-user"></i>
        </div>

        <span className="header-nav-icon">
          <i className="fa-solid fa-bars" onClick={toggleSidebar}></i>
        </span>
      </header>
      {/* ====NAVBAR SECTION ENDS HERE====  */}

      <main>
        {/* ====HERO SECTION STARTS HERE====  */}
        <section className="hero-container">
          <div className="hero-section">
            <div className="hero-image">
              <img
                src="images/organic-products-hero.png"
                alt="images of Groceries items"
              />
            </div>

            <div className="hero-description">
              <img
                src="images/logo-leaf-new.png"
                alt="images of a green leaf"
              />
              <h4>Best Quality Products</h4>
              <h1>Join The Organic Movement!</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <button>
                <i className="fa-solid fa-cart-shopping"></i>
                SHOP NOW
              </button>
            </div>
          </div>
        </section>
        {/* ====HERO SECTION ENDS HERE====  */}

        {/* ====DELIVERY SECTION STARTS HERE====  */}
        <section className="delivery-container">
          <div className="delivery-sub-container">
            <i className="fa-solid fa-truck"></i>
            <div>
              <h1>Free Shipping</h1>
              <p>Above $5 Only</p>
            </div>
          </div>

          <div className="delivery-sub-container">
            <i className="fa-solid fa-address-book"></i>
            <div>
              <h1>Certified Organic</h1>
              <p>100% Guarantee</p>
            </div>
          </div>

          <div className="delivery-sub-container">
            <i className="fa-solid fa-money-bill"></i>
            <div>
              <h1>Huge Savings</h1>
              <p>At Lowest Price</p>
            </div>
          </div>

          <div className="delivery-sub-container">
            <i className="fa-solid fa-recycle"></i>
            <div>
              <h1>Easy Returns</h1>
              <p>No Questions Asked</p>
            </div>
          </div>
        </section>
        {/* ====DELIVERY SECTION ENDS HERE====  */}

        {/* ====BEST PRODUCTS SECTION STARTS HERE====  */}
        <section className="best-container-main">
          <div>
            <div className="best-heading">
              <h1>Best Selling Products</h1>
              <img
                src="/images/logo-leaf-new.png"
                alt="image of a green leaf logo"
              />
            </div>

            <div className="best-sub-container">
              <div className="best-sub">
                <img
                  src="/images/coffee-asorted.jpg"
                  alt="image of a coffee bag"
                />
                <p>Groceries</p>
                <h3>Assorted Coffee</h3>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <h4>£35.00</h4>
              </div>

              <div className="best-sub">
                <img src="images/sanitizer.jpg" alt="image of hand sanitizer" />
                <p>Groceries</p>
                <h3>Hand Sanitizer</h3>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <h4>£15.00</h4>
              </div>

              <div className="best-sub">
                <img
                  src="/images/red-chillies (1).jpg"
                  alt="image of red-chillies"
                />
                <p>Groceries</p>
                <h3>Handpicked Red Chillies</h3>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <h4>£19.00</h4>
              </div>

              <div className="best-sub">
                <img src="images/edible-oil.jpg" alt="/image of edible oil" />
                <p>Groceries</p>
                <h3>Natural Extracted Edible Oil</h3>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <h4>
                  <del>£34.00</del> £25.00
                </h4>
              </div>
            </div>
          </div>
        </section>
        {/* ====BEST PRODUCTS SECTION ENDS HERE====  */}

        {/* ====FRESH PRODUCTS SECTION STARTS HERE====  */}
        <section>
          <div className="fresh-container">
            <div className="fresh-image">
              <img src="/images/basil-leaf.png" alt="image of a basil leaf" />
            </div>

            <div className="fresh-sub-container">
              <div className="fresh-description">
                <h1>Farm Fresh Fruits</h1>
                <p>
                  Ut sollicitudin quam vel purus tempus, vel eleifend felis
                  varius.
                </p>
                <button>
                  SHOP NOW
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
                <img src="/images/image2.jpg" alt="image of fresh oranges" />
              </div>

              <div className="fresh-description">
                <h1>Fresh Vegetables</h1>
                <p>
                  Aliquam porta justo nibh, id laoreet sapien sodales vitae
                  justo.
                </p>
                <button>
                  SHOP NOW
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
                <img src="/images/image3.jpg" alt="image of fresh Vegetables" />
              </div>

              <div className="fresh-description">
                <h1>Organic Legume</h1>
                <p>
                  Phasellus sed urna mattis, viverra libero sed, aliquam est.
                </p>
                <button>
                  SHOP NOW
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
                <img src="/images/image1.jpg" alt="images of fresh legumes" />
              </div>
            </div>
          </div>
        </section>
        {/* ====FRESH PRODUCTS SECTION ENDS HERE====  */}

        {/* ====FIRST PURCHASE SECTION STARTS HERE====  */}
        <section>
          <div className="first-container">
            <h1>Get 25% Off On Your First Purchase!</h1>
            <button>
              <i className="fa-solid fa-cart-shopping"></i>
              SHOP NOW
            </button>
          </div>

          <div className="free-registration">
            <h1>Try It For Free. No Registration Needed.</h1>
          </div>
        </section>
        {/* ====FIRST PURCHASE SECTION ENDS HERE====  */}

        {/* ==TRENDING PRODUCTS SECTION STARTS HERE==  */}
        <section>
          <div className="trending-container">
            <div className="trending-heading">
              <h1>Trending Products</h1>
              <img
                src="/images/logo-leaf-new.png"
                alt="image of a green leaf logo"
              />
            </div>

            <div className="trend-sub-container">
              <div className="trend-sub">
                <img
                  src="/images/coffee-asorted.jpg"
                  alt="image of a coffee bag"
                />
                <p>Groceries</p>
                <h3>Assorted Coffee</h3>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <h4>£35.00</h4>
              </div>

              <div className="trend-sub">
                <img
                  src="/images/orage-juice-kariz.jpg"
                  alt="image of fresh orange Juice"
                />
                <p>Juice</p>
                <h3>Fresh Orange Juice</h3>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <h4> £18.00</h4>
              </div>

              <div className="trend-sub">
                <img
                  src="/images/sanitizer.jpg"
                  alt="image of hand sanitizer"
                />
                <p>Groceries</p>
                <h3>Hand Sanitizer</h3>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <h4>£15.00</h4>
              </div>

              <div className="trend-sub">
                <img
                  src="/images/red-chillies (1).jpg"
                  alt="image of red-chillies"
                />
                <p>Groceries</p>
                <h3>Handpicked Red Chillies</h3>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <h4>£19.00</h4>
              </div>
            </div>
          </div>
        </section>
        {/* ==TRENDING PRODUCTS SECTION ENDS HERE==   */}

        {/* =CUSTOMER'S REVIEWS SECTION STARTS HERE=  */}
        <section className="customers-container">
          <div className="customers-heading">
            <h1>Customers Reviews</h1>
            <img
              src="/images/logo-leaf-new.png"
              alt="image of a green leaf logo"
            />
          </div>

          <div className="customers-sub-container">
            <div className="customers-sub">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <p>
                Click edit button to change this text. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo
              </p>
              <img
                src="/images/client02-free-img.png"
                alt="image of a client"
              />
              <h4>Mila Kunis</h4>
            </div>

            <div className="customers-deal">
              <h1>Deal Of The Day 15% Off On All Vegetables!</h1>
              <p>
                I am text block. Click edit button to change this tex em ips.
              </p>
              <button>
                SHOP NOW
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            <div className="customers-sub">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <p>
                Click edit button to change this text. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo
              </p>
              <img
                src="/images/client01-free-img.png"
                alt="image of a client"
              />
              <h4>Mike Sendler</h4>
            </div>
          </div>
        </section>
        {/* =CUSTOMER'S REVIEWS SECTION ENDS HERE=  */}

        {/* ====BRANDS SECTION STARTS HERE====  */}
        <section>
          <div className="brand-container">
            <div>
              <h1>Featured Brands:</h1>
            </div>

            <div>
              <img src="/images/logoipsum-215.svg" alt="" />
            </div>

            <div>
              <img src="/images/logoipsum-215.svg" alt="" />
            </div>

            <div>
              <img src="/images/logoipsum-215.svg" alt="" />
            </div>

            <div>
              <img src="/images/logoipsum-215.svg" alt="" />
            </div>

            <div>
              <img src="/images/logoipsum-215.svg" alt="" />
            </div>
          </div>
        </section>
      </main>
      {/* ====BRANDS SECTION ENDS HERE====  */}

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
  );
};

export default Home;
