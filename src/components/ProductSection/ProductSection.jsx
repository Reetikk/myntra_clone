import "./ProductSection.css";
import { products } from "../../data/products";

function ProductSection() {
  return (
    <section className="product-section" id="trending">
      <div className="section-title-wrap">
        <p>WHAT'S HOT</p>
        <h2>TRENDING NOW</h2>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <div className="product-image-wrapper">
              <img src={product.image} alt={product.name} loading="lazy" />
              <button className="wishlist-button" type="button" aria-label={`Add ${product.name} to wishlist`}>
                ♡
              </button>
            </div>

            <div className="product-details">
              <h3>{product.brand}</h3>
              <p>{product.name}</p>
              <div className="product-price">
                <strong>{product.price}</strong>
                <span className="original-price">{product.originalPrice}</span>
                <span className="discount">({product.discount})</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProductSection;