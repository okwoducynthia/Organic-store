import "./About.css";

const About = () => {
  
  return (
    <div>
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
    </div>
  );
};

export default About;
