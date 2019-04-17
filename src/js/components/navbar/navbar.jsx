import React from 'react'
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl } from 'react-bootstrap';

import {
    Link
} from 'react-router-dom';



export default class NavBar extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                    <Navbar.Brand href="/">VidJot</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to='/'style={{fontSize: "1.25rem", paddingRight:'1rem', textDecoration: 'none', color: 'rgba(255,255,255,.5)'}}>Home</Link>
                            <Link to='/about' style={{fontSize: "1.25rem", textDecoration: 'none', color: 'rgba(255,255,255,.5)'}}>About</Link>
                        </Nav>
                        <Nav>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <Link to='/about'><NavDropdown.Item href="#action/3.1">Ideas</NavDropdown.Item></Link>
                                <NavDropdown.Item href="#action/3.2">Add Ideas</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div >
        )
    }
}

