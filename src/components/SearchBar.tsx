import React from 'react';
import { Link } from 'react-router-dom';

interface SearchBarProps {
  cartCount: number;
}

const SearchBar: React.FC<SearchBarProps> = ({ cartCount }) => {
  return (
    <div className="search-bar">
      <div className="container">
        <div className="search-container">
          <div className="search-box">
            <div className="search-icon-wrap">
              <span className="search-icon">🔍</span>
            </div>
            <input type="text" placeholder="Поиск" />
          </div>
          <Link to="/catalog" className="catalog-btn">Каталог</Link>
        </div>
        
        <div className="search-actions">
          <Link to="/cart" className="icon-btn" title="Корзина">
            <img src="/assets/icons/cart.png" alt="Корзина" className="nav-icon" />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
          <Link to="/favorites" className="icon-btn" title="Избранное">
            <img src="/assets/icons/favorite.png" alt="Избранное" className="nav-icon" />
          </Link>
          <Link to="/login" className="login-btn">
            <img src="/assets/icons/user.png" alt="Войти" className="nav-icon-small" />
            <span>Войти</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;