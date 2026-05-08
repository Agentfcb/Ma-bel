import React from 'react';

const FavoritesPage: React.FC = () => {
  return (
    <div className="container" style={{ padding: '60px 20px' }}>
      <h1 className="page-title">Избранное</h1>
      <div style={{ 
        background: '#f5f0ea', 
        padding: '40px', 
        borderRadius: '12px',
        textAlign: 'center'
      }}>
        <p style={{ fontSize: '18px', color: '#7a7a7a', marginBottom: '20px' }}>
          ♥ У вас пока нет избранных товаров
        </p>
        <a href="/catalog" className="hero-btn" style={{ display: 'inline-block' }}>
          Перейти в каталог
        </a>
      </div>
    </div>
  );
};

export default FavoritesPage;