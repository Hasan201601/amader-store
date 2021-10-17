
import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';

const CartProducts = ({ product, handleRemove }) => {
    const { img, quantity, name, price, key } = product


    return (
        <div className="shadow-lg">
            <Col>
                <Row className="p-2 align-items-center">
                    <Col md={4} >
                        <img src={img} alt="" />
                    </Col>
                    <Col md={8} className="my-3">
                        <h5>{name}</h5>
                        <h5>{price}</h5>
                        <h6 className="text-danger py-2">Quantity: {quantity}</h6>
                        <Button variant="warning" className="fw-bold" onClick={() => handleRemove(key)}>Remove</Button>
                    </Col>
                </Row>
            </Col>

        </div >
    );
};

export default CartProducts;