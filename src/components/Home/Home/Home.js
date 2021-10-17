import React from 'react';
import useProducts from '../../Hooks/useProducts';
import Header from '../Header/Header';
import Shop from '../Shop/Shop';

const Home = ({ handleAddToCart, cart, }) => {
    const { displayProducts, setDisplayProducts, products } = useProducts()
    const handleSearch = e => {
        const searchText = e.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText))
        setDisplayProducts(matchedProducts)
    }
    return (
        <div>
            <Header cart={cart} handleSearch={handleSearch}></Header>
            <Shop handleAddToCart={handleAddToCart} products={displayProducts}></Shop>
        </div>
    );
};

export default Home;