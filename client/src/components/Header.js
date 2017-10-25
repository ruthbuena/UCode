import React from 'react';
import {Col, Row, Navbar, NavItem} from 'react-materialize';
//import { Register } from 'signup';
//import { Login } from 'login';

const Header = () => 

<div>
  <Row>
    <Col s={12}>
      <Navbar className='blue-grey darken-1' brand='UCode' right></Navbar>
    </Col>
  </Row>
</div>

export default Header;