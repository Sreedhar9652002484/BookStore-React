import logo from './logo.svg';
import './App.css';
import { Signup } from './pages/signup/signup';
import { Dashboard } from './components/dashboard/dashboard';
import { Signin } from './pages/singnin/signin';
import BookCard from './components/takenote/takenote1/takenote';
import { Router } from './router/router';
import { CustomerDetails } from './components/takenote/takenote4/takenote4';

function App() {
  return (
    <div className="App">
     {/* <Signup/> */}
     {/* <Signin /> */}
     {/* <Dashboard/> */}
     <Router/>
     {/* <CustomerDetails/> */}
     
    </div>
  );
}

export default App;
