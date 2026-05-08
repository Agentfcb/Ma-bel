import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="top-bar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="/assets/images/logotip.jpg" alt="МА-Бель" className="logo-icon" />
          </Link>
        </div>

        <nav className="top-nav">
          <Link to="/catalog">Каталог</Link>
          <span className="nav-divider">|</span>
          <Link to="/payment">Оплата</Link>
          <span className="nav-divider">|</span>
          <Link to="/assembly">Сборка</Link>
          <span className="nav-divider">|</span>
          <Link to="/guarantees">Гарантии</Link>
          <span className="nav-divider">|</span>
          <Link to="/about">О нас</Link>
        </nav>

        <div className="top-right">
          <button className="city-btn">
            <img src="/assets/icons/location.png" alt="Город" className="nav-icon-small" />
            <span>г. Владимир</span>
          </button>
          <button className="phone-btn">+ 7 900 000-00-00</button>
        </div>
      </div>
    </header>
  );
};

export default Header;