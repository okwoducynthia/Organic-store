import "./Contact.css"


const Contact = () => {

  return (
    <div>
    {/* -- ====HERO SECTION STARTS HERE====  */}
      <section>
        <div className="contact-hero">
          <h1>Get In Touch</h1>
        </div>
      </section>
      {/* -- ====HERO SECTION ENDS HERE====  */}

      {/* -- ====CONTACT DETAILS SECTION STARTS HERE====  */}
       <section className="details-main-container">
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
       </section>
       {/* -- ====CONTACT DETAILS SECTION ENDS HERE====  */}
    </div>
  )
}

export default Contact