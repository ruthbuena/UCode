import React from "react";
import { Link } from 'react-router-dom';
import {Navbar, NavItem} from 'react-materialize';

const Navpills = (props) =>

  <Navbar className='blue-grey darken-1'>
    <NavItem><Link to={'JavascriptFundamentals'}>JavaScript Fundamentals</Link>
    </NavItem>
    <NavItem><Link to={'Javascript2'}>JavaScript Part 2</Link>
    </NavItem>
    <NavItem><Link to={'Modular'}>Modular JavaScript</Link>
    </NavItem>
    <NavItem><Link to={'JQuery'}>JQuery</Link>
    </NavItem>
    <NavItem><Link to={'ReactJs'}>React</Link>
    </NavItem>
    <NavItem><Link to={'Node'}>Node</Link>
    </NavItem>
    <NavItem><Link to={'ES'}>ES6</Link>
    </NavItem>
    <NavItem><Link to={'Redux'}>Redux</Link>
    </NavItem>
  </Navbar>

export default Navpills;
        
        
        
        
        