import logo from './logo.svg';
import './App.css';
import { Signup } from './pages/signup/signup';
import { Dashboard } from './components/dashboard/dashboard';
import { Signin } from './pages/singnin/signin';
import BookCard from './components/takenote/takenote1/takenote';

function App() {
  return (
    <div className="App">
     {/* <Signup/> */}
     {/* <Signin /> */}
     <Dashboard/>
     
    </div>
  );
}

export default App;
