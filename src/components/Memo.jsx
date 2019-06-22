import React, { memo, useCallback, useState } from 'react';
import styled from 'styled-components';
import { Button } from 'styled-bootstrap-components';

const CountButton = memo(({ onClick, count }) => {
  return <CustomButtom onClick={onClick}>counter {count}</CustomButtom>;
});

const DualCounter = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment1 = useCallback(() => setCount1(c => c + 1), []);
  const increment2 = useCallback(() => setCount2(c => c + 1), []);

  return (
    <>
      <CountButton count={count1} onClick={increment1} />
      <CountButton count={count2} onClick={increment2} />
    </>
  );
};

const CustomButtom = styled(Button)`
  margin: 10px;
`;

export default DualCounter;
