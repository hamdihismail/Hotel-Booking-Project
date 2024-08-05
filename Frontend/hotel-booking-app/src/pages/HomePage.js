import React from 'react';
import { Hero, Services, Contact } from '../components';
import styled from 'styled-components';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Contact />
    </main>
  );
};

const HomePageContainer = styled.section`
  background: url('../assets/logo.svg');
`;
export default HomePage;
