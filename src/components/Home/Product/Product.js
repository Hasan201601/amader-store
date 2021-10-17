import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const Product = ({ product, handleAddToCart }) => {
    const { name, img, price, seller, stock } = product
    return (
        <div>
            <Col xs={12} className="shadow-sm g-4" >
                <Row className="g-5">
                    <Col md={4}>
                        <img src={img} alt="" />
                    </Col>
                    <Col md={6}>
                        <div>
                            <h5>{name}</h5>
                            <p className="fw-bolder my-0 text-secondary">By: {seller}</p>
                            <p className="fw-bolder my-0">${price}</p>
                            <p className="fw-bolder">only {stock} available </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Button variant="warning" className="w-50  d-block m-auto my-3 fw-bolder" onClick={() => handleAddToCart(product)}><i className="fas fa-plus"></i> Add to Cart</Button>
                </Row>
            </Col>
        </div>

    );
};

export default Product;