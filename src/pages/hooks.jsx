import React from 'react';
import { Container, Nav, NavLink } from 'styled-bootstrap-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UseCallback from 'components/UseCallback';
import UseMemo from 'components/UseMemo';
import Memo from 'components/Memo';
import { CustomLink } from 'components/Common';

const Hooks = () => {
  return (
    <Router>
      <Container>
        <Nav>
          <CustomLink to='/hooks/use-callback'>use callback</CustomLink>
          <CustomLink to='/hooks/use-memo'>use memo</CustomLink>
          <CustomLink to='/hooks/memo'>memo</CustomLink>
        </Nav>
      </Container>
      <Route path='/hooks/use-callback' component={UseCallback} />
      <Route path='/hooks/use-memo' component={UseMemo} />
      <Route path='/hooks/memo' component={Memo} />
    </Router>
  );
};

export default Hooks;
