import React, { useState, useCallback, memo } from 'react';
import { Button } from 'styled-bootstrap-components';
import styled from 'styled-components';
import { SpacedContainer } from 'components/Common';

const UseCallback = () => {
  const [toggle, setToggle] = useState(false);

  const otherClick = () => {
    console.log('Cliked here....');
  };

  // const otherClick = useCallback(() => {
  //   console.log('Cliked here....');
  // }, []);

  return (
    <SpacedContainer>
      <div>
        <CustomButtom onClick={() => setToggle(!toggle)}>Toggle</CustomButtom>
        <CustomButtom primary onClick={otherClick}>
          Pure button
        </CustomButtom>
        <p>{toggle ? 'ON' : 'OFF'}</p>
      </div>
    </SpacedContainer>
  );
};

const CustomButtom = memo(styled(Button)`
  margin: 10px;
`);

export default UseCallback;
