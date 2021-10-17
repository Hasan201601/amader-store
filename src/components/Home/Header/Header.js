import React from 'react';
import { Badge, Container, FormControl, InputGroup, Nav, Navbar } from 'react-bootstrap';
import logo from "../../../Images/logo.png"
import cartImg from "../../../Images/cart.png"
import useProducts from '../../Hooks/useProducts';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = ({ cart }) => {
    const { totalQuantity } = useProducts()
    const activeStyle = {
        color: 'grey'
    }
    return (
        <div className="text-center">
            <img src={logo} style={{ height: '130px' }} alt="" />
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto fs-5">
                        <NavLink className="text-decoration-none me-4 link" to="/home" activeStyle={{ activeStyle }}>Shop</NavLink>
                        <NavLink className="text-decoration-none me-4 link" to="/orderreview" activeStyle={{ activeStyle }}>Order Review</NavLink>
                        <NavLink className="text-decoration-none me-4 link" to="/signup" activeStyle={{ activeStyle }}>SignUp</NavLink>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <i className="far fa-user"></i>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="bg-secondary py-1 d-flex">
                <InputGroup className="m-auto" style={{ maxWidth: '90%' }} >
                    <FormControl
                        placeholder="Search your product"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />

                </InputGroup>
                <div className="me-1">
                    <NavLink to="/cart">
                        <img src={cartImg} style={{ marginLeft: '-10px', height: '35px', margin: 'auto' }} alt="" />
                        <Badge bg="dark" style={{ marginLeft: '-10px' }}>{totalQuantity}</Badge>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;