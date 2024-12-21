import styled from "styled-components";
import CategoryCard from "./CategoryCard";

const Wrapper = styled.section`
  padding-bottom: 40px;

  .containerDiv {
    width: 100%;
    padding-right: var(--bs-gutter-x, 15px);
    padding-left: var(--bs-gutter-x, 15px);
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
    --bs-gutter-y: 0.9375rem;
    --bs-gutter-x: 0.9375rem;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--bs-gutter-y));
    margin-right: calc(-0.5 * var(--bs-gutter-x));
    margin-left: calc(-0.5 * var(--bs-gutter-x));

    @media (min-width: 576px) {
      --bs-gutter-y: 1.875rem;
      --bs-gutter-x: 1.875rem;
    }
  }

  .row > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-top: var(--bs-gutter-y);
  }

  .col {
    flex: 0 0 auto;
    width: 50%;

    @media (min-width: 992px) {
      width: 33.33333333%;
    }
    @media (min-width: 1200px) {
      width: 16.66666667%;
    }
  }
`;

const Category = () => {
  return (
    <Wrapper>
      <div className="containerDiv">
        <div className="row">
          <div className="col">
            <CategoryCard
              color="#DCFFD2"
              label="new"
              labelBg="#ff6565"
              image="card-category/Idol.webp"
              title="Idols✨"
            />
          </div>
          <div className="col">
            <CategoryCard
              color="#FFEDB4"
              label=""
              labelBg=""
              image="card-category/KanhajiCloth.webp"
              title="Clothes🧥"
            />
          </div>
          <div className="col colum">
            <CategoryCard
              color="#DFE4FF"
              label=""
              labelBg=""
              image="card-category/Singhasan.webp"
              title="Singhasan🏰"
            />
          </div>
          <div className="col colum">
            <CategoryCard
              color="#FFEACC"
              label="sale"
              labelBg="#835BF4"
              image="card-category/Jhula.webp"
              title="Jhula🌸"
            />
          </div>
          <div className="col colum">
            <CategoryCard
              color="#FFDAE0"
              label=""
              labelBg=""
              image="card-category/Toys.webp"
              title="Toys🦄"
            />
          </div>
          <div className="col colum">
            <CategoryCard
              color="#FFF3DA"
              label=""
              labelBg=""
              image="card-category/Accessories.webp"
              title="Accessories💎"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Category;
