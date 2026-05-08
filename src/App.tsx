import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import CartPage from './pages/CartPage';
import FavoritesPage from './pages/FavoritesPage';
import LoginPage from './pages/LoginPage';

import type { Product } from './data/products';

const App: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    alert(`Товар "${product.name}" добавлен в корзину!`);
  };

  const removeFromCart = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="app-wrapper">
      <Header />
      <SearchBar cartCount={cart.length} />
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage addToCart={addToCart} />} />
          <Route path="/catalog" element={<CatalogPage addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<div className="container" style={{padding: '60px 20px'}}><h1>О нас</h1></div>} />
          <Route path="/payment" element={<div className="container" style={{padding: '60px 20px'}}><h1>Оплата</h1></div>} />
          <Route path="/assembly" element={<div className="container" style={{padding: '60px 20px'}}><h1>Сборка</h1></div>} />
          <Route path="/guarantees" element={<div className="container" style={{padding: '60px 20px'}}><h1>Гарантии</h1></div>} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;