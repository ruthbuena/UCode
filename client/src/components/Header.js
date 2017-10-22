import React, { Component } from 'react';
import {Col, Row, Navbar} from 'react-materialize';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//
// const Header = () =>
//
// <div>
//   <Row>
//     <Col s={12}>
//       <Navbar brand='UCode' right>
//       </Navbar>
//     </Col>
//   </Row>
// </div>
//
// export default Header;
class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      //show a link to sign out
      return <li className="nav-item">
        <Link className="nav-link" to="/signout">Sign Out</Link>
      </li>
    } else {
      //show a link to sign in or sign up
    return [
    <li className="nav-item" key={1}>
      <Link className="nav-link" to="/signin">Sign In</Link>
    </li>,
    <li className="nav-item" key={2}>
      <Link className="nav=link" to="/signup">Sign Up</Link>
    </li>
      ];
    }
  }

  render() {
    return (
      <nav className="navbar navbar-light">
      <Link to="/" className="navbar-brand">Redux Auth</Link>
        <ul className="nav navbar-nav">
          {this.renderLinks()}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps) (Header);
