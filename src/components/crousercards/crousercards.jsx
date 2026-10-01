import "./crousercards.css";
import { useEffect, useState } from "react";
import offerImage from "../../assets/Screenshot 2026-10-01 045014.png";
import seasonImage from "../../assets/Screenshot 2026-10-01 042439.png";
import activeImage from "../../assets/Screenshot 2026-10-01 042835.png";

const slides = [
  {
    id: "season",
    image: seasonImage,
    imageAlt: "Gen-Z fashion campaign with two models and a yellow background",
  },
  {
    id: "active",
    image: activeImage,
    imageAlt: "Runner wearing HRX activewear",
  },
];

function CrouserCards() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const slide = slides[activeIndex];

  useEffect(() => {
    if (!isHovered || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, [isHovered]);

  function showSlide(index) {
    setActiveIndex((index + slides.length) % slides.length);
  }

  return (
    <section className="crousercards-section">
      <img
        className="crousercards-promo-image"
        src={offerImage}
        alt="Flat 300 rupees off on your first purchase via the Myntra app"
      />
      <div
        className="crousercards-carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="Featured promotions"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="crousercards-slide" key={`${slide.id}-slide`}>
          <img className="crousercards-image" src={slide.image} alt={slide.imageAlt} />
        </div>
        <div className="crousercards-controls" aria-label="Carousel controls">
          <button type="button" className="crousercards-arrow" aria-label="Previous promotion" onClick={() => showSlide(activeIndex - 1)}>
            ‹
          </button>
          <div className="crousercards-dots" aria-label="Choose a promotion">
            {slides.map((item, index) => (
              <button
                type="button"
                key={item.id}
                className={`crousercards-dot${index === activeIndex ? " is-active" : ""}`}
                aria-label={`Show ${item.id} promotion`}
                aria-current={index === activeIndex ? "true" : undefined}
                onClick={() => showSlide(index)}
              />
            ))}
          </div>
          <button type="button" className="crousercards-arrow" aria-label="Next promotion" onClick={() => showSlide(activeIndex + 1)}>
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

export default CrouserCards;