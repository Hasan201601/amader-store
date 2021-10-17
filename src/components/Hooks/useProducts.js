import { useEffect, useState } from "react";
import { addToDb, getDb } from "../../LocalStorage/LocalStorage";

const useProducts = () => {

    const [products, setProducts] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    const [cart, setCart] = useState([])


    useEffect(() => {
        const url = "./products.JSON"
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            })
    }, [])
    useEffect(() => {
        if (products.length) {
            const savedCart = getDb();
            const loadedCart = [];
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key]
                    addedProduct.quantity = quantity;
                    loadedCart.push(addedProduct)
                }
            }
            setCart(loadedCart);
        }
    }, [products])

    let total = 0;
    let totalQuantity = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const handleAddToCart = product => {

        setCart([...cart, product]);
        addToDb(product.key);
    }
    return {
        products,
        setProducts,
        cart,
        setCart,
        handleAddToCart,
        total,
        totalQuantity,
        displayProducts,
        setDisplayProducts
    }

}
export default useProducts