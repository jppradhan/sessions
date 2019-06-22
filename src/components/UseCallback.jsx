import React, { useState, useMemo, useEffect } from 'react';
import { Button, Alert } from 'styled-bootstrap-components';
import styled from 'styled-components';
import { SpacedContainer } from 'components/Common';

const UseCallback = () => {
  const [items, setItems] = useState([]);

  const updatedItems = useMemo(() => items, [items.length]);

  return (
    <SpacedContainer>
      <Br />
      <div>
        <CustomButtom onClick={() => setItems([...items, items.length + 1])}>
          Add items
        </CustomButtom>
        <CustomButtom primary onClick={() => setItems([1, 2, 3, 4, 5])}>
          Add same items
        </CustomButtom>
      </div>
      <List items={updatedItems} />
    </SpacedContainer>
  );
};

const List = ({ items }) => {
  useEffect(() => {
    console.log('New item added....');
  }, [items]);

  return (
    <ListWrapper>
      {items.map(item => (
        <Alert key={item} success>
          Sample item: {item}
        </Alert>
      ))}
    </ListWrapper>
  );
};

const CustomButtom = styled(Button)`
  margin: 10px;
`;

const ListWrapper = styled.div`
  width: 500px;
`;

const Br = styled.div`
  padding: 10px;
`;

export default UseCallback;
