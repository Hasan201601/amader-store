import React from 'react';
import Header from '../Header/Header';
import Shop from '../Shop/Shop';

const Home = ({ handleAddToCart, cart, products }) => {
    return (
        <div>
            <Header cart={cart}></Header>
            <Shop handleAddToCart={handleAddToCart} products={products}></Shop>
        </div>
    );
};

export default Home;