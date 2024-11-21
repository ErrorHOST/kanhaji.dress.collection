// import React from 'react';
// import Header from '../components/Header';
// import { products } from '../data/productsData';
// import ProductCard from '../components/ProductCard';
// import Carousel from '../components/Carousel';
// import './Home.css';

// const Home = () => {
//   const topProducts = products.slice(0, 5);  // Create a new array for the top 5 products

//   return (
//     <>
//       <Header />
//       <Carousel />
//       <div className='mx-5 mt-5 border'>
//         <h1>Top 5 Products of the Month</h1>
//         <div className="product-list mx-5">
//           {topProducts.map(product => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </div>
//       <div className='mx-5 mt-5 border'>
//         <h1>All Products</h1>
//         <div className="product-list mx-5">
//           {products.map(product => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;

import React from 'react';
import Header from '../components/Header';
import { products } from '../data/productsData';
import ProductCard from '../components/ProductCard';
import Carousel from '../components/Carousel';
import Slider from 'react-slick';
import './Home.css';

// Import slick-carousel CSS files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../components/Footer';

const Home = () => {
  const topProducts = products.slice(0, 5);

  // React Slick settings with infinite scroll, smooth animation, and navigation buttons
  const settings = {
    infinite: true, // Infinite loop of slides (this is the key for continuous scrolling)
    speed: 500, // Transition speed (500ms for smooth effect)
    slidesToShow: 5, // Number of slides visible at a time
    slidesToScroll: 5, // Scroll one slide at a time
    arrows: true, // Enable left/right navigation arrows
    prevArrow: (
      <button className="slick-prev" style={{ left: -50 }}>
        Prev
      </button>
    ),
    nextArrow: (
      <button className="slick-next" style={{ right: -50 }}>
        Next
      </button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // 3 slides on medium screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // 1 slide on small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Header />
      <Carousel />
      <div className="mx-5 mt-5 border rounded-4">
        <h1>Top 5 Products of the Month</h1>
        <div className="product-list mx-5">
          {topProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* All Products Section with React Slick Carousel */}
      <div className="mx-5 my-5 border rounded-4">
        <h1>All Products</h1>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </Slider>
        
      </div>
      <Footer/>
    </>
  );
};

export default Home;


