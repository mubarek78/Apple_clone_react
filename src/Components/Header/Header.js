import React from 'react';
import logo from '../../images/icons/logo-sm.png';
import search_icon from '../../images/icons/search-icon-sm.png';
import cart_icon from '../../images/icons/cart-sm.png'
import HeaderLink from '../Header/HeaderLinks/HeaderLink'
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormControl } from 'react-bootstrap';

function Header() {
    return (
        <div>
            <header className="nav-wrapper fixed-top navbar navbar-toggleable-sm navbar-expand-md">
                <div className="container">
                    <Navbar className="w-100" collapseOnSelect expand="lg" variant="dark">
                        <Navbar.Toggle aria-controls='responsive-navbar-new' />
                        <Navbar.Brand href="/"><img src={logo} alt="logo" /></Navbar.Brand>
                        <Navbar.Collapse id="responsive-navbar-nav"  >
                           <br/>
                            <Nav className=" w-100 nav-fill justify-content-end flex-grow-1 pe-3">
                                <Form className="d-flex"variant="dark">
                                    <FormControl
                                        type="search"
                                        placeholder="Search apple.com"
                                        className="me-2"
                                        aria-label="Search "
                                        
                                    />
                                    <Navbar.Brand href="search"><img src={search_icon} alt="search" /></Navbar.Brand>
                                    {/* <Button variant="outline-success">Search</Button> */}
                                </Form>
                                <ul className="navbar-nav nav-justified w-100 nav-fill">
                            <HeaderLink LinkName="Store" LinkUrl="/store/" />
                            <HeaderLink LinkName="Mac" LinkUrl="/mac/" />
                            <HeaderLink LinkName="iPad" LinkUrl="/ipad/" />
                            <HeaderLink LinkName="iPhone" LinkUrl="/iphone/" />
                            <HeaderLink LinkName="Watch" LinkUrl="/watch/" />
                            <HeaderLink LinkName="AirPods" LinkUrl="/airpods/" />
                            <HeaderLink LinkName="TV & Home" LinkUrl="/tv_home/" />
                            {/* <HeaderLink LinkName="Only on Apple" LinkUrl="/some link" /> */}
                            <HeaderLink LinkName="Accessories" LinkUrl="/accessories/" />
                            <HeaderLink LinkName="Support" LinkUrl="/support/" />
                            <Nav.Link href="/search"><img src={search_icon} alt="search" /></Nav.Link>
                                    <Nav.Link href="/cart"><img src={cart_icon} alt="add-cart" /></Nav.Link>
                                </ul>
                            </Nav>
                            
                    </Navbar.Collapse>
                    </Navbar>
                    
                </div>
            </header>




        </div>

    )
}

export default Header
