import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
//import Auth from '../utils/auth';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavComponent() {
  return (
    <>
      <Navbar key="lg" bg="light" expand="lg" className="mb-3 px-4">
        <Container fluid>
          <Navbar.Brand href="">TEAM COOPICK APPLICATION</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Account
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="">PAGE 1</Nav.Link>
                <NavDropdown
                  title="Account"
                  id={`offcanvasNavbarDropdown-expand-sm`}
                >
                  <NavDropdown.Item href="">
                    PAGE 2
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item /* onClick={Auth.logout} */ >Logout</NavDropdown.Item> 
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavComponent;
