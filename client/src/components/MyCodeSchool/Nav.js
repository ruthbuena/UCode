import React from "react";
import { Link } from 'react-router-dom';
import {Navbar, NavItem} from 'react-materialize';
import '../Traversy/TraversyNav.css';

const Navpills = (props) =>

  <Navbar className='blue-grey darken-1'>
    <NavItem><Link to={'DataStructures'} className='link'>Data Structures</Link>
    </NavItem>
    <NavItem><Link to={'BinarySearch'} className='link'>Binary Search</Link>
    </NavItem>
    <NavItem><Link to={'Math'} className='link'>Math for Programmers</Link>
    </NavItem>
    <NavItem><Link to={'ProgrammingQuestions'} className='link'>Programming Interview Qs</Link>
    </NavItem>
    <NavItem><Link to={'Recursion'} className='link'>Recursion</Link>
    </NavItem>
    <NavItem><Link to={'Sorting'} className='link'>Sorting Algorithms</Link>
    </NavItem>
    <NavItem><Link to={'TimeComplexity'} className='link'>Time Complexity Analysis</Link>
    </NavItem>
  </Navbar>

export default Navpills;
        
        
        
        
        