import { Image, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../../../../assets/images/homeTwo/logo.jpg";

function ColorSchemesExample() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <Image src={Logo} />
          </Navbar.Brand>
          <Nav className="me-end">
            <Nav.Link href="#home" className="mx-3">
              Home
            </Nav.Link>
            <Nav.Link href="#features" className="mx-3">
              Services
            </Nav.Link>
            <Nav.Link href="#pricing" className="mx-3">
              Careers
            </Nav.Link>
            <Nav.Link href="#pricing" className="mx-3">
              Traninings
            </Nav.Link>
            <Nav.Link href="#pricing" className="mx-3">
              Contact
            </Nav.Link>
            <NavDropdown title="En" id="basic-nav-dropdown" className="mx-3">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
