import React from 'react';
import { Hero, Services, Contact } from '../components';
import styled from 'styled-components';

const HomePage = () => {
  return (
    <HomePageContainer>
      <main>
        {/* <div className="overlay"></div> */}
        <Hero />
        <Services />
        <Contact />
      </main>
    </HomePageContainer>
  );
};

const HomePageContainer = styled.section``;
export default HomePage;
