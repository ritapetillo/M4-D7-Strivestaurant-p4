import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, withRouter } from 'react-router-dom'

class NavBar extends Component {
  componentDidMount = () => {
    console.log('component mounted')
  }
  render() {
    const { location } = this.props;
    return (
      <div>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Link to="/">
            <Navbar.Brand>{this.props.title} - Strive For Food</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/menu">
                <div
                  className={
                    this.props.location.pathname === "/menu"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Menu
                </div>
              </Link>
              {location.pathname === "/details/2" && (
                <Link to="/menu">
                  <div
                    className={
                      location.pathname === "/details/2"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    My List
                  </div>
                </Link>
              )}
              <Link to="/reservation">
                <div
                  className={
                    this.props.location.pathname === "/reservation"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Reservation
                </div>
              </Link>
              <Nav.Link>Our Location</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}




export default withRouter(NavBar); // will give the component exported EXTRA PROPS: history, location, match
