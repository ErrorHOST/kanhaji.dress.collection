import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/productsData';
import Header from '../components/Header';
import './Products.css';

function Products() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div>
      <Header />
      <h1>Products</h1>
      <div className="category-buttons">
        <button
          className={!selectedCategory ? 'active' : ''}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </button>
        {categories.map(category => (
          <button
            key={category.id}
            className={selectedCategory === category.id ? 'active' : ''}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="product-list">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;

