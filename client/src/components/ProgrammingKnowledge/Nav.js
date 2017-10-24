import React from "react";
import { Link } from 'react-router-dom';
import {Navbar, NavItem} from 'react-materialize';

const Navpills = (props) =>

  <Navbar className='blue-grey darken-1'>
    <NavItem><Link to={'HTML'}>HTML</Link>
    </NavItem>
    <NavItem><Link to={'Bootstrap'}>Boostrap</Link>
    </NavItem>
    <NavItem><Link to={'CSS'}>HTML & CSS</Link>
    </NavItem>
    <NavItem><Link to={'Javascript'}>JavaScript</Link>
    </NavItem>
    <NavItem><Link to={'SQL'}>MySQL</Link>
    </NavItem>
    <NavItem><Link to={'Node'}>Node</Link>
    </NavItem>
    <NavItem><Link to={'Mongo'}>Mongo</Link>
    </NavItem>
  </Navbar>

export default Navpills;
        
        
        
        
        