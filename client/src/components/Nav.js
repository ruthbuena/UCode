import React from "react";

import HTML from './HTML';
import CSS from './CSS';
import JavaScript from './Javascript';
import ReactJs from './ReactJs';
import Node from './Node';
import ES from './ES';
import SQL from './SQL';
import Mongo from './Mongo';

const Nav = () =>
<div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <HTML />
          </li>
          <li className="nav-item">
            <CSS />        
          </li>
          <li className="nav-item">
            <JavaScript />
          </li>
          <li className="nav-item">
            <ReactJs />
          </li>
        
          <li className="nav-item">
            <Node />
          </li>
       
          <li className="nav-item">
            <ES />
          </li>
        
          <li className="nav-item">  
            <SQL />
          </li>
          
          <li className="nav-item">
            <Mongo />
          </li>  
        </ul>
    </div>
  </nav>;
</div>

export default Nav;


        
        
        
        
        
        