import React from 'react';
import { Badge, Button, Container, FormControl, InputGroup, Nav, Navbar } from 'react-bootstrap';
import logo from "../../../Images/download.png"
import cartImg from "../../../Images/cart.png"
import useProducts from '../../Hooks/useProducts';
import { NavLink } from 'react-router-dom';
import './Header.css'
import headerBg from '../../../Images/headerBg.jpg'
import useAuth from '../../Hooks/useAuth';

const Header = ({ cart, handleSearch }) => {
    const { user, logOut } = useAuth()
    const { totalQuantity } = useProducts()
    const activeStyle = {
        color: 'grey'
    }
    return (
        <div className="text-center" style={{ backgroundImage: `url(${headerBg})`, backgroundPosition: 'top', objectFit: 'cover', }}>
            <img src={logo} style={{ height: '90px', borderRadius: '10px', margin: '5px 0' }} alt="" />
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto fs-5">
                        <NavLink className="text-decoration-none me-4 link" to="/home" activeStyle={{ activeStyle }}>Shop</NavLink>
                        <NavLink className="text-decoration-none me-4 link" to="/cart" activeStyle={{ activeStyle }}>Order Review</NavLink>
                        <NavLink className="text-decoration-none me-4 link" to="/signup" activeStyle={{ activeStyle }}><Button variant="outline-info">SignUp</Button></NavLink>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            {user.email ? <Button onClick={logOut}>logout</Button> : <NavLink className="text-decoration-none text-secondary" to="/login">
                                <small>Login <i className="far fa-user"></i></small>
                            </NavLink>
                            }

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
                        onChange={handleSearch}
                    />

                </InputGroup>
                <div className="me-1">
                    <NavLink to="/cart">
                        <img src={cartImg} style={{ marginLeft: '-10px', height: '35px', margin: 'auto' }} alt="" />
                        <Badge bg="dark" style={{ marginLeft: '-10px' }}>{totalQuantity}</Badge>
                    </NavLink>
                </div>
            </div>
        </div >
    );
};

export default Header;