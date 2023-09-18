import logo from './logo.svg';
import './App.css';
import { Signup } from './pages/signup/signup';
import { Dashboard } from './components/dashboard/dashboard';
import { Signin } from './pages/singnin/signin';
import BookCard from './components/takenote/takenote1/takenote';
import { Router } from './router/router';

function App() {
  return (
    <div className="App">
     {/* <Signup/> */}
     {/* <Signin /> */}
     <Dashboard/>
     {/* <Router/> */}
     
    </div>
  );
}

export default App;
