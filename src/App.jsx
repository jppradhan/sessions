import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav, NavbarLink } from 'styled-bootstrap-components';
import Home from 'pages/home';
import Hooks from 'pages/hooks';

function App() {
  return (
    <Router>
      <Container fluid>
        <Navbar dark>
          <Nav>
            <Link to='/'>
              <NavbarLink dark>Home</NavbarLink>
            </Link>
            <Link to='/hooks'>
              <NavbarLink dark>Hooks</NavbarLink>
            </Link>
          </Nav>
        </Navbar>
        <Route path='/' exact component={Home} />
        <Route path='/hooks' component={Hooks} />
      </Container>
    </Router>
  );
}

export default App;
