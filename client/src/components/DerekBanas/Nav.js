import React from "react";
import { Link } from 'react-router-dom';
import {Navbar, NavItem} from 'react-materialize';

const Navpills = (props) =>

  <Navbar className='blue-grey darken-1'>
    <NavItem><Link to={'HTML_Derek'}>HTML</Link>
    </NavItem>
    <NavItem><Link to={'CSS'}>CSS</Link>
    </NavItem>
    <NavItem><Link to={'JQuery'}>JQuery</Link>
    </NavItem>
    <NavItem><Link to={'Javascript'}>JavaScript</Link>
    </NavItem>
    <NavItem><Link to={'Ajax'}>Ajax</Link>
    </NavItem>
    <NavItem><Link to={'Node'}>Node</Link>
    </NavItem>
    <NavItem><Link to={'Mongo'}>Mongo</Link>
    </NavItem>
    <NavItem><Link to={'Object'}>Object Oriented Design</Link>
    </NavItem>
    <NavItem><Link to={'SQL'}>MySQL</Link>
    </NavItem>
    <NavItem><Link to={'Git'}>Git</Link>
    </NavItem>
  </Navbar>

export default Navpills;
        
        
        
        
        