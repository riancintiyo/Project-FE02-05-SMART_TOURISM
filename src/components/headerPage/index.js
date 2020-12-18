import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button
} from "reactstrap";
import "../../App.css";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render = () => {
    return (
      <div>
        <Navbar
          color="faded"
          dark
          expand="md"
          fixed={`top`}
          className="navDark"
        >
          <Container>
            <NavbarBrand className='navbarTittle' href="#">Traveldung</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="about">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="packageBody">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="servicesBody">Package</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="contactBody">Review</NavLink>
                </NavItem>
                <Button className='register_btn' outline color="warning">Register</Button>{" "}
                <Button color="success">Login</Button>{" "}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;
