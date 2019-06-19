import React, { useState, useCallback, memo } from "react";
import { Button, Alert } from "styled-bootstrap-components";
import styled from "styled-components";

const CustomButtom = memo(styled(Button)`
  margin: 0 5px;
`);

const List = memo(styled.div`
  width: 500px;
`);

const Br = memo(styled.div`
  display: block;
  padding: 10px;
`);

const CustomAlert = memo(Alert);

const functions = new Set();

const Counter = () => {
  const [c1, setC1] = useState(0);
  const [c2, setC2] = useState(0);
  const [items, setItems] = useState([]);

  const increment1 = useCallback(() => setC1(c1 + 1), [c1]);
  const increment2 = useCallback(() => setC2(c2 + 1), [c2]);

  const addItems = useCallback(() => setItems([...items, items.length + 1]), [
    items
  ]);

  functions.add(increment1);
  functions.add(increment2);

  return (
    <>
      <h1>Counter 1: {c1}</h1>
      <h1>Counter 2: {c2}</h1>
      <Br />
      <div>
        <CustomButtom onClick={increment1}>Increment Counter 1</CustomButtom>
        <CustomButtom primary onClick={increment2}>
          Increment Counter 2
        </CustomButtom>
      </div>
      <div> Newly Created Functions: {functions.size - 2} </div>
      <Br />
      <CustomButtom onClick={addItems} danger>
        Add new item
      </CustomButtom>
      <Br />
      <List>
        {items.map(item => (
          <CustomAlert key={item} success>
            New item added
          </CustomAlert>
        ))}
      </List>
    </>
  );
};

export default Counter;
