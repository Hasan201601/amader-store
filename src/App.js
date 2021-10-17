import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import useProducts from './components/Hooks/useProducts';
import Cart from './components/Cart/Cart';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import AuthProvider from './components/context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Checkout from './components/Checkout/Checkout';

function App() {
  const { handleAddToCart, cart, products } = useProducts()
  return (
    <div>
      <AuthProvider>
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
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/checkout">
              <Checkout></Checkout>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
