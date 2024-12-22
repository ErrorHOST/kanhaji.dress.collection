import React from 'react'
import styled from 'styled-components';
import PageNavigation from './components/PageNavigation';
import ScrollToTop from './components/ScrollToTop';
import GridView from './components/GridView';
import { products } from "./data/productsData";



const Products = () => {
  return (
    <Wrapper>
      <PageNavigation title="Products"/>
      <div className="container ">
        {/* <div>
          <FilterSection />
        </div> */}

        <section className="product-view--sort">
          <div className="main-product">
            <GridView products={products}/>            
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
