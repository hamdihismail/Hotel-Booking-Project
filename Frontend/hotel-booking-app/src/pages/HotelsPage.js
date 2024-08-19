import React from 'react';
import styled from 'styled-components';
import { Filters, HotelList, Sort, PageHero } from '../components';

const HotelsPage = () => {
  return (
    <main className="none">
      <PageHero title="hotels" />
      <Wrapper className="page">
        <div className="section-center hotels">
          <Filters />
          <div>
            <Sort />
            <HotelList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div`
  wrapper {
    background: white !important;
  }
  .hotels {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .hotels {
      grid-template-columns: 200px 1fr;
    }
  }
`;
export default HotelsPage;
