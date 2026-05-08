import React from 'react';

const DiscountBanner: React.FC = () => {
  return (
    <section className="discount-banner">
      <div className="container">
        <div className="banner-wrap">
          <div className="banner-text">
            <h2 className="banner-title">Скидки на мебель действуют</h2>
            <p className="banner-date">до 30.04.2026</p>
            <button className="banner-btn">К АКЦИЯМ</button>
          </div>
          <div className="banner-image-wrapper">
            <img
              src="/assets/images/banner-discount.png"
              alt="Скидки"
              className="banner-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountBanner;