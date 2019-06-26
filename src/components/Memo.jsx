import React, { memo, useCallback, useState } from 'react';
import styled from 'styled-components';
import { Button, Container } from 'styled-bootstrap-components';

// const PureButton = memo(({ count }) => {
//   return <CustomButtom>Pure button count: {count}</CustomButtom>;
// });

const PureButton = ({ count }) => <CustomButtom>Pure button: {count}</CustomButtom>;

const DualCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(c => c + 1);

  return (
    <Container>
      <CustomButtom onClick={increment}>COUNTER: {count}</CustomButtom>
      <PureButton count={10} />
    </Container>
  );
};

const CustomButtom = styled(Button)`
  margin: 10px;
`;

export default DualCounter;
