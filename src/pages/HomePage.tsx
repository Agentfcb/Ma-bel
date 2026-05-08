import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import DiscountBanner from '../components/DiscountBanner';
import Categories from '../components/Categories';
import WhyChooseUs from '../components/WhyChooseUs';
import type { Product } from '../data/products';

interface HomePageProps {
  addToCart: (product: Product) => void;
}

const HomePage: React.FC<HomePageProps> = ({ addToCart }) => {
  return (
    <>
      <Hero />
      <Products addToCart={addToCart} />
      <DiscountBanner />
      <Categories />
      <WhyChooseUs />
    </>
  );
};

export default HomePage;