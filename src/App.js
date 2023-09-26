import logo from './logo.svg';
import './App.css';
import { Router } from './router/router';
import { AddToBag } from './components/bookstorecomp/addtobag/addtobag';
import Navbar from './components/navbar/navbar';
import { useState } from 'react';
import { CartProvider } from './components/bookstorecomp/context/cartcontext';
import { NavbarProvider } from './components/bookstorecomp/context/navbarContext';
import { BookDetails } from './components/bookstorecomp/BookDetails/bookdetails';
import { Cart } from './components/bookstorecomp/Cart/cart';
import { BookContextProvider } from './components/bookstorecomp/context/bookcontext';
import { Dashboard } from './components/dashboard/dashboard';

function App() {
  const [count, setCount] = useState(1); 

  return (
    <div className="App">
      <CartProvider>
        <NavbarProvider>
          <BookContextProvider>
      <Router>
        <Navbar/>
        <AddToBag/>
        <BookDetails/>
        <Cart/>
        <Dashboard/>
      </Router>
      </BookContextProvider>
      
      </NavbarProvider>
      </CartProvider>
    </div>
  );
}

export default App;
