import './App.css';
import LandingPage from './components/landing/LandingPage';
import Home from './components/home/Home';
import {Route} from 'react-router-dom';
import PostDog from './components/dogCreation/PostDog';



function App() {
  return (
    <div className="App">
      <Route exact path= '/'>
        <LandingPage/>
      </Route>
      <Route exact path='/home'>
        <Home/>
      </Route>
      <Route exact path = '/createDog'>
        <PostDog/>
      </Route>
    </div>
  );
}

export default App;
