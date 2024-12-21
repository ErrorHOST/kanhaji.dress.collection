import React from 'react'
import styled from 'styled-components';
import ProductList from './components/ProductList';
import Sort from './components/Sort';
import FilterSection from './components/FilterSection';
import PageNavigation from './components/PageNavigation';
import ScrollToTop from './components/ScrollToTop';

const Products = () => {
  return (
    <Wrapper>
      <PageNavigation title="Products"/>
      <div className="container ">
        {/* <div>
          <FilterSection />
        </div> */}

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
            
        </section>
      </div>
      <ScrollToTop />
    </Wrapper>
  )
}

const Wrapper = styled.section`
.container {
  max-width: 130rem;
  margin: 10px auto;
}
`;
export default Products
