import { Container, Navbar, Nav, NavDropdown, Offcanvas } from 'react-bootstrap'
import dojoData from '../data/dojo.json'

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" expand={false} fixed="top">
        <Container fluid>
          <Navbar.Brand href="/">
            <img alt="logo" src={`img/` + dojoData.logo} width="35" height="40" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Offcanvas
            placement="end"
          >
            <Offcanvas.Header closeButton className="justify-content-end" />
            <Offcanvas.Body>
              <Nav className="d-flex align-items-center">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/faq">FAQ</Nav.Link>
                <NavDropdown title="Resources">
                  <NavDropdown.Item href="/terms">Terms</NavDropdown.Item>
                  <NavDropdown.Item href="https://youtu.be/cpidZRL5ZbI" target="_blank">Warmup</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href={dojoData.calendar} target="_blank">Calendar</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar