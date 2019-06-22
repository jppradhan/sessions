import React from 'react';
import styled from 'styled-components';
import { Container } from 'styled-bootstrap-components';
import HooksIng from 'images/hooks.png';

const Home = () => {
  return (
    <Container fluid>
      <ImageWrapper src={HooksIng} />
    </Container>
  );
};

const ImageWrapper = styled.img`
  width: 100%;
`;

export default Home;
