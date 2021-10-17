import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import useProducts from './components/Hooks/useProducts';
import Cart from './components/Cart/Cart';

function App() {
  const { handleAddToCart, cart, products } = useProducts()
  return (
    <div>

      <Router>
        <Switch>
          <Route exact path="/">
            <Home handleAddToCart={handleAddToCart} cart={cart} products={products}></Home>
          </Route>
          <Route path="/home">
            <Home handleAddToCart={handleAddToCart} cart={cart} products={products}></Home>
          </Route>
          <Route path="/cart">
            <Cart cart={cart}></Cart>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
