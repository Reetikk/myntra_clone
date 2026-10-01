import Header from "./components/Header/Header";
import CrouserCards from "./components/crousercards/crousercards";
import CardsCategory from "./components/CardsCategory/CardsCategory";
import bankOfferImage from "./assets/Screenshot 2026-10-01 073424.png";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="myntra-app">
      <Header />
      <main>
        <CrouserCards />
        <img
          className="bank-offer-image"
          src={bankOfferImage}
          alt="HDFC Bank festive offer: 10% instant discount on HDFC Bank credit cards and EasyEMI on credit cards"
        />
        <CardsCategory />
      </main>
      <Footer />
    </div>
  );
}

export default App;