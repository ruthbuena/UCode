import React from "react";
import { Link } from 'react-router-dom';
import {Navbar, NavItem} from 'react-materialize';


const Navpills = (props) =>

  <Navbar className='blue-grey darken-1'>
    <NavItem><Link to={'Bootstrap'}>Bootstrap 4</Link>
    </NavItem>
    <NavItem><Link to={'JQuery'}>JQuery</Link>
    </NavItem>
    <NavItem><Link to={'Sass'}>Sass</Link>
    </NavItem>
    <NavItem><Link to={'WebDesign'}>Web Design</Link>
    </NavItem>
    <NavItem><Link to={'WebHosting'}>Web Hosting</Link>
    </NavItem>
  </Navbar>

export default Navpills;
        
        
        
        
        