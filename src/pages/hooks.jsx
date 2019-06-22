import React from 'react';
import { Container } from 'styled-bootstrap-components';
import Counter from 'components/Counter';

const Hooks = () => {
  return (
    <Container>
      <div className='App-header'>
        <h2>Hooks</h2>
        <Counter />
      </div>
    </Container>
  );
};

export default Hooks;
