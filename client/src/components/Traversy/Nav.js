import React from "react";
import { Link } from 'react-router-dom';
import {Navbar, NavItem} from 'react-materialize';
import './TraversyNav.css';
const Navpills = (props) =>

  <Navbar className='blue-grey darken-1'>
    <NavItem><Link to={'HTML_Traversy'} className='link'>HTML & CSS</Link>
    </NavItem>
    <NavItem><Link to={'JQuery'} className='link'>JQuery</Link>
    </NavItem>
    <NavItem><Link to={'Javascript'} className='link'>JavaScript</Link>
    </NavItem>
    <NavItem><Link to={'ReactJs'} className='link'>React</Link>
    </NavItem>
    <NavItem><Link to={'Node'} className='link'>Node</Link>
    </NavItem>
    <NavItem><Link to={'Bootstrap'} className='link'>Bootstrap</Link>
    </NavItem>
    <NavItem><Link to={'Crash'} className='link'>Web Dev Crash Courses</Link>
    </NavItem>
    <NavItem><Link to={'ES'} className='link'>ES6</Link>
    </NavItem>
    <NavItem><Link to={'Passport'} className='link'>Passport Login w/ Node</Link>
    </NavItem>
    <NavItem><Link to={'API'} className='link'>API</Link>
    </NavItem>
    <NavItem><Link to={'Express'} className='link'>Node & Express</Link>
    </NavItem>
  </Navbar>

export default Navpills;
        
        
        
        
        