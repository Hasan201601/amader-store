const addToDb = id => {
    const stored_cart = getDb();
    if (id in stored_cart) {
        stored_cart[id] = stored_cart[id] + 1
    }
    else {
        stored_cart[id] = 1
    }
    updateDb(stored_cart)
}
const updateDb = cart => {
    localStorage.setItem('shopping_cart', JSON.stringify(cart))
}
const getDb = () => {
    const exists = localStorage.getItem('shopping_cart');
    return exists ? JSON.parse(exists) : {};
}
const removeFromDb = id => {
    const storedCart = getDb();
    delete storedCart[id];
    updateDb(storedCart)
}
const clearTheCart = () => localStorage.removeItem('shopping_cart')
export { addToDb, getDb, removeFromDb, clearTheCart }