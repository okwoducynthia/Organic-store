import "./About.css";
import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

const About = () => {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div>
      {sidebar && (
        <div
          className="bg-transparent-grey-bg w-[100%] h-full fixed right-0 top-0 flex justify-end"
          style={{ zIndex: 1000 }}
        >
          <div className="w-[90%] h-full flex flex-col font-heading-font w-[80%] h-[100%] py-5 px-2 bg-white-secondary bg-white">
            <button
              onClick={toggleSidebar}
              className="self-end me-5 text-2xl h-[7vh]"
            >
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
      <header className="about-header-container">
        <div className="about-header-logo">
          <img
            src="/images/organic-store-logo5.svg"
            alt="Organic store white logo"
          />
        </div>

        <div>
          <nav>
            <ul className="about-header-navlinks">
              <NavLink to={"/"}><li><a href="">Home</a></li></NavLink>
              <NavLink to={"/about"}><li><a href="">About</a></li></NavLink>
              <NavLink to={"/products"}><li><a href="">Products</a></li></NavLink>
              <NavLink to={"/contact"}><li><a href="">Contact</a></li></NavLink>
            </ul>
          </nav>
        </div>

        <div className="about-header-cart">
          <p>£0.00</p>
          <i className="fa-solid fa-bag-shopping">
            <span>0</span>
          </i>
          <i className="fa-solid fa-user"></i>
        </div>

        <span className="about-header-nav-icon">
          <i className="fa-solid fa-bars" onClick={toggleSidebar}></i>
        </span>
      </header>
      {/* -- ====NAVBAR SECTION ENDS HERE====  */}
      <main>
        {/* -- ====HERO SECTION STARTS HERE====  */}
        <section>
          <div className="about-hero">
            <h1>About us</h1>
          </div>
        </section>
        {/* -- ====HERO SECTION ENDS HERE====  */}

        {/* -- ====FAVOURITE SECTION STARTS HERE====  */}
        <section>
          <div>
            <div className="favourite-image">
              <img
                src="/images/basil-leaf.png"
                alt="image of a green basil leaf"
              />
            </div>

            <div className="favourite-description">
              <div className="favourite-paragraph">
                <h1>We Are Your Favourite Store.</h1>
                <p>
                  Tuas quisquam quo gravida proident harum, aptent ligula anim
                  consequuntur, ultrices mauris, nunc voluptates lobortis,
                  varius, potenti placeat! Fuga omnis. Cubilia congue.
                  Recusandae. Vero penatibus quasi! Nostra tenetur dignissimos
                  ultrices natus distinctio ultrices consequuntur numqu.
                </p>
                <p>
                  Officiis fuga harum porro et? Similique rhoncus atque! Netus
                  blanditiis provident nunc posuere. Rem sequi, commodo, lorem
                  tellus elit, hic sem tenetur anim amet quas, malesuada
                  proident platea corrupti expedita.
                </p>
              </div>

              <div className="favourite-second-image">
                <img
                  src="/images/berries-01.jpg"
                  alt="image of a man holding blue berries"
                />
              </div>
            </div>
          </div>
        </section>
        {/* -- ====FAVOURITE SECTION ENDS HERE====  */}

        {/* -- ====NUMBERS SECTION STARTS HERE====  */}
        <section>
          <div className="numbers-container">
            <div>
              <h2>Numbers Speak For Themselves!</h2>
            </div>

            <div>
              <h1>5,000+</h1>
              <p>Curated Products</p>
            </div>

            <div>
              <h1>800+</h1>
              <p>Curated Products</p>
            </div>

            <div>
              <h1>40+</h1>
              <p>Product Categories</p>
            </div>
          </div>
        </section>
        {/* -- ====NUMBERS SECTION ENDS HERE====  */}
      </main>
      {/* -- ====FOOTER SECTION STARTS HERE====  */}
      <footer>
        <div className="about-footer-container">
          <div className="about-footer-first">
            <img
              src="/images/organic-store-white-logo.png"
              alt="image of the company logo"
            />
            <h4>
              Maecenas mi justo, interdum at consectetur vel, tristique et arcu.
            </h4>
          </div>

          <div className="about-footer-nav">
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

          <div className="about-footer-quick-links">
            <h1>Quick Links</h1>
            <ul>
              <li>Know More About Us</li>
              <li>Visit Store</li>
              <li>Let's Connect</li>
            </ul>
          </div>

          <div className="about-footer-site-links">
            <h1>Site Links</h1>
            <ul>
              <li>Privacy Policy</li>
              <li>Shipping Details</li>
              <li>Offer Coupons</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
        </div>

        <div className="about-footer-second-container">
          <div className="about-div-divider"></div>

          <div className="about-footer-icons">
            <div>
              <p>Copyright © 2025 | Organic Store</p>
            </div>

            <div className="about-footer-socials">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
      </footer>
      {/* -- ====FOOTER SECTION ENDS HERE====  */}
    </div>
  );
};

export default About;
