import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

import RegisterModal from "./modals/RegisterModal";
import LoginModal from "./modals/LoginModal";

function Header() {
  return (
    <>
      <Navbar key="md" expand="md" className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="#">
            <i className="bi bi-house"></i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-md`}
              ></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link data-bs-target="#loginToggle" data-bs-toggle="modal">
                  登入
                </Nav.Link>
                <LoginModal />
                <Nav.Link
                  data-bs-target="#registerToggle"
                  data-bs-toggle="modal"
                >
                  註冊
                </Nav.Link>
                <RegisterModal />
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
