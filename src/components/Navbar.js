import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import logo from "./image/classpro-logo.png";

const PageNav = () => {
  return (
    <Navbar bg="light" className="mb-4" sticky="top">
      <Navbar.Brand href="#home">
        <img style={{ height: "60px" }} src={logo} alt="classpro-logo"></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Tour</Nav.Link>
          <Nav.Link href="#link">Pricing</Nav.Link>
          <NavDropdown title="Resources" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">E-Books</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Buy Books</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Test Series</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default PageNav;
