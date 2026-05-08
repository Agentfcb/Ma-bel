import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../data/products';

interface CartPageProps {
  cart: Product[];
  removeFromCart: (index: number) => void;
  clearCart: () => void;
}

const CartPage: React.FC<CartPageProps> = ({ cart, removeFromCart, clearCart }) => {

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return (
      <div className="container" style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h1 className="page-title">Корзина</h1>
        <p style={{ fontSize: '18px', color: '#7a7a7a', marginBottom: '20px' }}>
          Ваша корзина пуста 🛒
        </p>
        <Link to="/catalog" className="hero-btn" style={{ display: 'inline-block' }}>
          Перейти в каталог
        </Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '40px 20px' }}>
      <h1 className="page-title">Ваша корзина ({cart.length})</h1>
      
      <div className="cart-list">
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-img" />
            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p className="cart-price">{item.price.toLocaleString('ru-RU')} ₽</p>
            </div>
            <button 
              className="remove-btn" 
              onClick={() => removeFromCart(index)}
            >
              Удалить
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="total-row">
          <span>Итого:</span>
          <span className="total-price">{totalPrice.toLocaleString('ru-RU')} ₽</span>
        </div>
        <button className="clear-cart-btn" onClick={clearCart}>
          Очистить корзину
        </button>
      </div>
    </div>
  );
};

export default CartPage;