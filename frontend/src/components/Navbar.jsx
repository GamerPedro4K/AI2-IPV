import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';

const NavbarC = (props) => {
    return (
        <>
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed="top" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand as={Link} to={'/'} style={{ textDecoration: 'none' }}>
                <img style={{marginTop: '-3px'}} alt="" src="https://static-00.iconduck.com/assets.00/film-camera-icon-2048x2048-9l3wqnjk.png" width="30" height="30" className="d-inline-block align-top"/>
                {' '}<b>Movie</b>Rise
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/#filmes">Mais Vistos</Nav.Link>
                <Nav.Link href="/generos">Generos</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        <div style={{marginTop: '56px'}}></div>
        <Outlet />
        </>
    )
}

export default NavbarC;
