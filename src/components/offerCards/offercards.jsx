import "./OfferCards.css";

const offers = [
  {
    title: "Loungewear",
    discount: "30-60% OFF",
    image: "/images/lounge.jpg",
  },
  {
    title: "Innerwear",
    discount: "UP TO 70% OFF",
    image: "/images/innerwear.jpg",
  },
  {
    title: "Lingerie",
    discount: "UP TO 70% OFF",
    image: "/images/lingerie.jpg",
  },
  {
    title: "Watches",
    discount: "UP TO 80% OFF",
    image: "/images/watches.jpg",
  },
  {
    title: "Grooming",
    discount: "UP TO 60% OFF",
    image: "/images/grooming.jpg",
  },
  {
    title: "Beauty & Makeup",
    discount: "UP TO 60% OFF",
    image: "/images/beauty.jpg",
  },
];

function OfferCards() {
  return (
    <section className="offer-section">

      <h2 className="cardHeading">SHOP BY CATEGORY</h2>

      <div className="offer-container">

        {offers.map((offer) => (
          <div className="offer-card" key={offer.title}>

            <img
              src={offer.image}
              alt={offer.title}
            />

            <div className="offer-content">

              <h3>{offer.title}</h3>

              <strong>{offer.discount}</strong>

              <p>Shop Now</p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default OfferCards;