import React from "react";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
const NavbarSection = () => {
  let width = window.innerWidth;
  console.log(width);
  return (
    <div>
      <section>
        <Navbar
          bg="light"
          className="Nav_container"
          variant="light"
          sticky="top"
        >
          <Container>
            <Navbar.Brand href="#home">Tesla</Navbar.Brand>
            <Nav className="justify-content-center">
              <Nav.Link href="#home" className="bg-hover">
                Model S
              </Nav.Link>
              <Nav.Link href="#features" className="bg-hover">
                Model 3
              </Nav.Link>
              <Nav.Link href="#pricing" className="bg-hover">
                Model X
              </Nav.Link>
              <Nav.Link href="#home" className="bg-hover">
                Model Y
              </Nav.Link>
              <Nav.Link href="#features" className="bg-hover">
                Solar Roof
              </Nav.Link>
              <Nav.Link href="#pricing" className="bg-hover">
                Solar Panels
              </Nav.Link>
              <Nav.Link href="#pricing" className="bg-hover">
                Power Wall
              </Nav.Link>
            </Nav>
            <Navbar className="justify-content-center">
              <Nav className="me-auto ">
                <Nav.Link href="#home" className="bg-hover">
                  Shop
                </Nav.Link>
                <Nav.Link href="#features" className="bg-hover">
                  Account
                </Nav.Link>
                <Nav.Link href="#pricing" className="bg-hover">
                  Menu
                </Nav.Link>
              </Nav>
            </Navbar>
          </Container>
        </Navbar>
      </section>
    </div>
  );
};

export default NavbarSection;
