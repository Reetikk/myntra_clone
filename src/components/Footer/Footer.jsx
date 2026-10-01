import "./Footer.css";

function Footer() {
  return (
    <footer className="myntra-footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>ONLINE SHOPPING</h3>
          <a href="#men">Men</a>
          <a href="#women">Women</a>
          <a href="#kids">Kids</a>
          <a href="#home">Home</a>
          <a href="#beauty">Beauty</a>
          <a href="#genz">Genz</a>
        </div>

        <div className="footer-column">
          <h3>CUSTOMER POLICIES</h3>
          <a href="#">Contact Us</a>
          <a href="#">FAQ</a>
          <a href="#">Terms Of Use</a>
          <a href="#">Track Orders</a>
          <a href="#">Shipping</a>
          <a href="#">Cancellation</a>
        </div>

        <div className="footer-column">
          <h3>USEFUL LINKS</h3>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
          <a href="#">Site Map</a>
          <a href="#">Corporate Information</a>
        </div>

        <div className="footer-column">
          <h3>EXPERIENCE MYNTRA APP</h3>
          <p className="footer-text">Shop fashion anytime, anywhere.</p>
          <div className="app-buttons">
            <button type="button">Google Play</button>
            <button type="button">App Store</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>100% ORIGINAL guarantee for all products</p>
        <p>© 2026 Frontend Project</p>
      </div>
    </footer>
  );
}

export default Footer;