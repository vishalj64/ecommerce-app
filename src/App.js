import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import data from './data'
import Products from './components/Products';
import Cart from './components/Cart';
import { useState } from 'react';

function App() {

  const {products} = data;

  const [ cartItems, setCartItems] = useState([])

  function addItemToCart(product) {
      const isExisting = cartItems.find((x) => x.id === product.id)
      console.log(isExisting)
      if(isExisting) {
        setCartItems(
          cartItems.map(x => x.id === product.id ? {...isExisting, qty: isExisting.qty + 1} : x)
        )
      }else {
        setCartItems([...cartItems, {...product, qty: 1}])
      }
  }

  function removeItemFromCart(product) {
    const isExisting = cartItems.find((x) => x.id === product.id)
    if(isExisting.qty === 1) {
     setCartItems(cartItems.filter(x => x.id !== product.id))
    }else {
      setCartItems(
        cartItems.map(x => x.id === product.id ? {...isExisting, qty: isExisting.qty - 1} : x)
      )
    }
  }
  return (
    <div className='App'>

      <Header count={cartItems.length}></Header>
      <div className='row'>
          <Products products={products} onAdd={addItemToCart}></Products>
          <Cart
            cartItems={cartItems}
            onAdd={addItemToCart}
            onRemove={removeItemFromCart}>
          </Cart>
      </div>
    </div>
  );
}

export default App;
