import React from 'react';
import styled from 'styled-components';
import Hotel from './Hotel';

const GridView = ({ hotels }) => {
  return (
    <Wrapper>
      <div className="hotels-container">
        {hotels.map((hotel) => {
          return <Hotel key={hotel.id} {...hotel} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    height: 175px;
    width: 300px;
  }

  .hotels-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .hotels-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .hotels-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default GridView;
