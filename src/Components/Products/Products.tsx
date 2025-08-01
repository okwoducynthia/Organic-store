import "./Products.css"
import { ProductData } from "../../Data/ProductData/ProductData";

const Products = () => {

  return (
    <div>
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
    </div>
  )
}

export default Products