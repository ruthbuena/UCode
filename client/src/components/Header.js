import React from 'react';
import {Col, Row, Navbar, NavItem} from 'react-materialize';


const Header = (props) =>

    <div>
        <Row>
            <Col s={12} className="cover">
                <Navbar className='blue-grey darken-1' brand='UCode' right>
                    {props.authenticated ?
                        <NavItem href='/login'>Log Out</NavItem> :
                        [
                            <NavItem href='/login'>Log in</NavItem>,
                            <NavItem href='/signup'>Sign up</NavItem>
                        ]
                    }
                </Navbar>
            </Col>
        </Row>
    </div>

export default Header;