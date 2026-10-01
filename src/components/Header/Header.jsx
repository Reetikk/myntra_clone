import "./Header.css";
import myntraLogo from "../../assets/myntra-logo.png";

function Header() {
  return (
    <header className="myntra-header">
      <div className="header-container">
        <a className="myntra-logo" href="#" aria-label="Myntra home">
          <img src={myntraLogo} alt="Myntra" />
        </a>

        <nav className="main-navigation" aria-label="Main navigation">
          <a href="#men">MEN</a>
          <a href="#women">WOMEN</a>
          <a href="#kids">KIDS</a>
          <a href="#home">HOME</a>
          <a href="#beauty">BEAUTY</a>
          <a href="#genz">GENZ</a>
          <a href="#studio" className="studio-link">
            STUDIO <span>NEW</span>
          </a>
        </nav>

        <div className="search-container">
          <span className="search-icon">⌕</span>
          <input
            type="text"
            placeholder="Search for products, brands and more"
            aria-label="Search"
          />
        </div>

        <div className="header-actions">
          <button className="header-action" type="button">
            <span className="action-icon">♙</span>
            <span>Profile</span>
          </button>
          <button className="header-action" type="button">
            <span className="action-icon">♡</span>
            <span>Wishlist</span>
          </button>
          <button className="header-action" type="button">
            <span className="action-icon">♧</span>
            <span>Bag</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;