import './App.css';
import {
  BrowserRouter as Router,
  Routes, 
  Route,
  NavLink,
} from "react-router-dom";
import Graph from './pages/graph';
import Home from './pages/home';
import Stocks from './pages/stocks';

function App() {
  return (
      <Router>
        <div className='navigator'>
          <ul className='navi'>
            <li>
              <NavLink to = '/' className='title'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to = '/stocks' className='title' >
                Stocks
              </NavLink>
            </li>
            <li>
              <NavLink to ='/graph' className='title'>
                Graph
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <Routes>
            <Route path='/' element = {<Home />}/>
            <Route path='/stocks' element = {<Stocks/>}/>
            <Route path = '/graph' element = {<Graph/>}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
