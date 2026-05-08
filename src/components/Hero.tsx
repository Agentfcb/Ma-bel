import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <img
          src="/assets/images/hero.png"
          alt="Комната"
          className="hero-image"
        />
        <div className="hero-content">
          <h1 className="hero-title">
            Комфорт, с которого не хочется вставать.
          </h1>
          <hr className="hero-divider" />
          <p className="hero-subtitle">
            Стулья, диваны, кресла для дома и не только
          </p>
          <Link to="/catalog" className="hero-btn">
            Перейти в каталог →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;