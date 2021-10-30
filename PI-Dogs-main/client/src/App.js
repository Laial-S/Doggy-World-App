import './App.css';
import LandingPage from './components/landing/LandingPage';
import Home from './components/home/Home';
import Dogs from './components/Dogs';
import {Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Route exact path= '/'>
        <LandingPage/>
      </Route>
      <Route exact path='/home'>
        <Dogs/>
        <Home/>
      </Route>
      
    </div>
  );
}

export default App;
