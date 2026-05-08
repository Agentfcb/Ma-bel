import React from 'react';
import { products } from '../data/products';
import type { Product } from '../data/products';

interface CatalogPageProps {
  addToCart: (product: Product) => void;
}

const CatalogPage: React.FC<CatalogPageProps> = ({ addToCart }) => {
  return (
    <div className="container" style={{ padding: '40px 20px' }}>
      <h1 className="page-title">Каталог мебели</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <p className="product-name">{product.name}</p>
            <p className="product-price">{product.price.toLocaleString('ru-RU')} ₽</p>
            <button 
              className="add-to-cart" 
              onClick={() => addToCart(product)}
            >
              Добавить в корзину
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;