import React from 'react';
import {Col, Row, Navbar, Button} from 'react-materialize';

const Header = (props) =>

    <div>
        <Row>
            <Col s={12} className="cover">
                <Navbar className='blue-grey darken-1' brand='UCode' right>
                <Button>Log Out</Button>
                </Navbar>
            </Col>
        </Row>
    </div>

export default Header;