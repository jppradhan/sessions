import React from "react";
import { Container } from "styled-bootstrap-components";
import Counter from "./components/Counter";

function App() {
  return (
    <Container>
      <div className='App-header'>
        <h2>Hello everyone</h2>
        <Counter />
      </div>
    </Container>
  );
}

export default App;
