import React from "react";
import styled from "styled-components";
import Product from "./Product";
import Category from "./Category";


const GridView = ({ products }) => {
  
  return (
    <>
      <Category />
      <Wrapper>
        <section class="section-space">
          <div class="container">
            <div class="row">
              {products.map((product) => (
                <div class="col" key={product.id}>
                  <Product product={product} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .section-space {
    padding-bottom: 50px;
    padding-top: 50px;
  }

  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 576px) {
      max-width: 540px;
    }
    @media (min-width: 768px) {
      max-width: 720px;
    }
    @media (min-width: 992px) {
      max-width: 960px;
    }
    @media (min-width: 1200px) {
      max-width: 1200px;
    }
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    // justify-content: center;
    margin-top: 0;
    margin-right: calc(-0.5 * 1.875rem);
    margin-left: calc(-0.5 * 1.875rem);

    @media (min-width: 576px) {
      margin-bottom: -3.125rem !important;
    }
  }

  .row > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(1.875rem * 0.5);
    padding-left: calc(1.875rem * 0.5);
    margin-top: 1.875rem;
  }

  .col {
    margin-top: 0;
    margin-bottom: 1.25rem !important;
    margin-bottom: 2.5rem !important;
    flex: 0 0 auto;
    width: 50%;

    @media (min-width: 992px) {
      width: 33.33333333%;
    }
    @media (min-width: 1200px) {
      width: 25%;
    }
  }
`;

export default GridView;
