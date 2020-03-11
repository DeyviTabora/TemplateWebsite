import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class NavComponent extends React.Component {
    render() {
        return (
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand id="client">Logo Company</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>Features</Nav.Link>
                        <Nav.Link>Pricing</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default NavComponent;