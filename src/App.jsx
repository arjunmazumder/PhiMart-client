import { useState } from 'react';
import './App.css'
import Cart from './components/Cart';
import Navbar from './components/Navbar';



function App() {

const [CartItems, SetCartItems] = useState(['product 1', 'product 2', 'product 3'])
  return (
    <div>
      <Navbar CartItemsCount={CartItems.length} />
      <Cart CartItems={CartItems} />

    
    </div>

  );
};

export default App;
