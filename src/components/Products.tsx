import React from 'react';
import { products } from '../data/products';
import type { Product } from '../data/products';

interface ProductsProps {
  addToCart: (product: Product) => void;
}

const Products: React.FC<ProductsProps> = ({ addToCart }) => {
  return (
    <section className="products">
      <div className="container">
        <div className="products-grid">
          {products.map((p) => (
            <div className="product-card" key={p.id}>
              <img src={p.image} alt={p.name} className="product-image" />
              <p className="product-name">{p.name}</p>
              <p className="product-price">{p.price.toLocaleString('ru-RU')} ₽</p>
              <button className="add-to-cart" onClick={() => addToCart(p)}>
                Добавить в корзину
              </button>
            </div>
          ))}
        </div>
        <hr className="section-divider" />
      </div>
    </section>
  );
};

export default Products;