import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import Header from '../Home/Header/Header';
import useProducts from '../Hooks/useProducts';

const Cart = ({ cart }) => {
    const { totalQuantity, total } = useProducts()
    const subTotal = total.toFixed(2);
    const tax = (total * .20).toFixed(2);
    const shipping = total > 1000 ? 100 : 60;
    const final = (parseFloat(subTotal) + parseFloat(tax) + shipping).toFixed(2)
    return (
        <div >
            <Header cart={cart}></Header>
            <div className="container w-50">

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
                <div className="py-2 text-center">
                    <Button variant="warning" className="fw-bolder me-5">Review your Order</Button>
                    <Button variant="warning" className="fw-bolder">Proceed To CheckOut</Button>
                </div>
            </div>
        </div>
    );
};

export default Cart;