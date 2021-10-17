
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Shop = ({ products, handleAddToCart }) => {
    return (
        <div>
            <Container className="my-4">
                <Row md={2} className="g-5">
                    {
                        products.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Shop;