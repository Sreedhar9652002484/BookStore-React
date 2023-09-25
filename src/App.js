import logo from './logo.svg';
import './App.css';
import { Router } from './router/router';
import { AddToBag } from './components/bookstorecomp/addtobag/addtobag';
import Navbar from './components/navbar/navbar';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(1); 

  return (
    <div className="App">
    
     <Router/>
     
    </div>
  );
}

export default App;
