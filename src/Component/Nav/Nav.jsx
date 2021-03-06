import React, { Component } from 'react';
import { Button, Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Link ,Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import './Nav.css';
import SignUpMdodal from '../SignUpMdodal/SignUpMdodal';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
    this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        return (
            <Router>
                <Navbar color="success-color" dark expand="md" scrolling>
                    <NavbarBrand href="/" >
                        <strong>Navbar</strong>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                          
                        </NavbarNav>
                        <NavbarNav right>
                          <NavItem className="mr-3">
                            <NavLink to="#">About</NavLink>
                          </NavItem>
                          <NavItem className="mr-3">
                          <NavLink to="#">Get Involved</NavLink>
                          </NavItem>
                          <NavItem className="mr-3">
                          <NavLink to="#">Shop</NavLink>
                          </NavItem>
                          <NavItem className="mr-3">
                          <SignUpMdodal></SignUpMdodal>
                          </NavItem>
                          <NavItem className="mr-3 donate">
                              <NavLink to="/Donate">Donate</NavLink>
                          </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </Router>
        );
    }
}

export default Nav;