import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavbarC = (props) => {
    return (
        <>
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home">
                <img style={{marginTop: '-3px'}} alt="" src="https://static-00.iconduck.com/assets.00/film-camera-icon-2048x2048-9l3wqnjk.png" width="30" height="30" className="d-inline-block align-top"/>
                {' '}<b>Movie</b>Rise
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Mais Vistos</Nav.Link>
                <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Ação</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Terror</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Comedia</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    )
}

export default NavbarC;