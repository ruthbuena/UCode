import React from 'react';
import {Col, Row, Navbar, NavItem, Button} from 'react-materialize';


const Header = () =>

<div>
  <Row>
    <Col s={12}>
      <Navbar className='blue-grey darken-1' brand='HI I"M DIFFERENT NOW' right>
      <Button>Log Out</Button>
      </Navbar>
    </Col>
  </Row>
</div>

export default Header;
