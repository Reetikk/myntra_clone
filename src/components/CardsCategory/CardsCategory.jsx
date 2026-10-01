import "./CardsCategory.css";
import beautyImage from "../../assets/Screenshot 2026-10-01 072401.png";
import groomingImage from "../../assets/Screenshot 2026-10-01 072328.png";
import watchesImage from "../../assets/Screenshot 2026-10-01 072319.png";
import lingerieImage from "../../assets/Screenshot 2026-10-01 072308.png";
import innerwearImage from "../../assets/Screenshot 2026-10-01 072300.png";
import loungewearImage from "../../assets/Screenshot 2026-10-01 072251.png";

const categories = [
  { id: "loungewear", title: "Loungewear", discount: "30-60% OFF", image: loungewearImage },
  { id: "innerwear", title: "Innerwear", discount: "UP TO 70% OFF", image: innerwearImage },
  { id: "lingerie", title: "Lingerie", discount: "UP TO 70% OFF", image: lingerieImage },
  { id: "watches", title: "Watches", discount: "UP TO 80% OFF", image: watchesImage },
  { id: "grooming", title: "Grooming", discount: "UP TO 60% OFF", image: groomingImage },
  { id: "beauty", title: "Beauty & Makeup", discount: "UP TO 60% OFF", image: beautyImage },
  { id: "loungewear", title: "Loungewear", discount: "30-60% OFF", image: loungewearImage },
  { id: "innerwear", title: "Innerwear", discount: "UP TO 70% OFF", image: innerwearImage },
  { id: "lingerie", title: "Lingerie", discount: "UP TO 70% OFF", image: lingerieImage },
  { id: "watches", title: "Watches", discount: "UP TO 80% OFF", image: watchesImage },
  { id: "grooming", title: "Grooming", discount: "UP TO 60% OFF", image: groomingImage },
  { id: "beauty", title: "Beauty & Makeup", discount: "UP TO 60% OFF", image: beautyImage },
  { id: "loungewear", title: "Loungewear", discount: "30-60% OFF", image: loungewearImage },
  { id: "innerwear", title: "Innerwear", discount: "UP TO 70% OFF", image: innerwearImage },
  { id: "lingerie", title: "Lingerie", discount: "UP TO 70% OFF", image: lingerieImage },
  { id: "watches", title: "Watches", discount: "UP TO 80% OFF", image: watchesImage },
  { id: "grooming", title: "Grooming", discount: "UP TO 60% OFF", image: groomingImage },
  { id: "beauty", title: "Beauty & Makeup", discount: "UP TO 60% OFF", image: beautyImage },
  { id: "loungewear", title: "Loungewear", discount: "30-60% OFF", image: loungewearImage },
  { id: "innerwear", title: "Innerwear", discount: "UP TO 70% OFF", image: innerwearImage },
  { id: "lingerie", title: "Lingerie", discount: "UP TO 70% OFF", image: lingerieImage },
  { id: "watches", title: "Watches", discount: "UP TO 80% OFF", image: watchesImage },
  { id: "grooming", title: "Grooming", discount: "UP TO 60% OFF", image: groomingImage },
  { id: "beauty", title: "Beauty & Makeup", discount: "UP TO 60% OFF", image: beautyImage },
  { id: "loungewear", title: "Loungewear", discount: "30-60% OFF", image: loungewearImage },
  { id: "innerwear", title: "Innerwear", discount: "UP TO 70% OFF", image: innerwearImage },
  { id: "lingerie", title: "Lingerie", discount: "UP TO 70% OFF", image: lingerieImage },
  { id: "watches", title: "Watches", discount: "UP TO 80% OFF", image: watchesImage },
];

function CardsCategory() {
  return (
    <section className="cards-category-section" id="categories">
      <div className="cards-category-heading">
        <h2>SHOP BY CATEGORY</h2>
      </div>

      <div className="cards-category-grid">
        {categories.map((category, index) => (
          <a className="cards-category-card" id={category.id} href="#trending" key={`${category.id}-${index}`}>
            <img src={category.image} alt={category.title} loading="lazy" />
            <div className="cards-category-details">
              <h3>{category.title}</h3>
              <strong>{category.discount}</strong>
              <span>Shop Now</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default CardsCategory;