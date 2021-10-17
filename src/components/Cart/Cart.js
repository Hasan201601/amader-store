import React from 'react';
import { ListGroup, Button, Row, Container, Col, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { removeFromDb } from '../../LocalStorage/LocalStorage';
import CartProducts from '../CartProducts/CartProducts';
import Header from '../Home/Header/Header';
import useProducts from '../Hooks/useProducts';

const Cart = () => {
    const { totalQuantity, total, cart, setCart } = useProducts()
    const subTotal = total.toFixed(2);
    const tax = (total * .20).toFixed(2);
    const shipping = total > 1000 ? 100 : 60;
    const final = (parseFloat(subTotal) + parseFloat(tax) + shipping).toFixed(2)
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key)
        setCart(newCart)
        removeFromDb(key);
    }
    return (
        <div>
            <Header cart={cart}></Header>
            <div className="d-flex">

                <Container>
                    <Row className="my-2">
                        <Col md={9}>

                            <Row className="g-4">
                                {cart.map(product => <CartProducts
                                    key={product.key}
                                    product={product}
                                    handleRemove={handleRemove}
                                >
                                </CartProducts>)}
                            </Row>

                        </Col>

                        <Col md={3}>
                            <div >

                                <div>

                                    <ListGroup as="ol" >
                                        <ListGroup.Item
                                            as="li"
                                            className="d-flex justify-content-between align-items-start"
                                        >
                                            <div className="ms-2 me-auto">
                                                <h5 className="fw-bold">Added Products</h5>

                                            </div>
                                            <div className="fw-bolder">{totalQuantity}</div>

                                        </ListGroup.Item>
                                        <ListGroup.Item
                                            as="li"
                                            className="d-flex justify-content-between align-items-start"
                                        >
                                            <div className="ms-2 me-auto">
                                                <h5 className="fw-bold">SubTotal</h5>
                                            </div>
                                            <div className="fw-bolder">
                                                ${subTotal}
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item
                                            as="li"
                                            className="d-flex justify-content-between align-items-start"
                                        >
                                            <div className="ms-2 me-auto">
                                                <h5 className="fw-bold">Tax</h5>

                                            </div>
                                            <div className="fw-bolder">
                                                ${tax}
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item
                                            as="li"
                                            className="d-flex justify-content-between align-items-start"
                                        >
                                            <div className="ms-2 me-auto">
                                                <h5 className="fw-bold">Shipping</h5>

                                            </div>
                                            <div className="fw-bolder">
                                                ${total ? shipping : 0}
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item
                                            variant="dark"
                                            as="li"
                                            className="d-flex justify-content-between align-items-start"
                                        >
                                            <div className="ms-2 me-auto">
                                                <h5 className="fw-bold">Total</h5>

                                            </div>
                                            <div className="fw-bolder">
                                                ${total ? final : 0}
                                            </div>
                                        </ListGroup.Item>
                                    </ListGroup>

                                    <Link className="text-decoration-none" to="/checkout">
                                        <Button variant="outline-success" disabled={totalQuantity ? false : true} className="fw-bolder my-2 d-block m-auto">Proceed To CheckOut</Button>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </Container>

            </div >
        </div>
    );
};

export default Cart;