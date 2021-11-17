import './App.css';
import LandingPage from './components/landing/LandingPage';
import Home from './components/home/Home';
import {Route} from 'react-router-dom';
import PostDog from './components/dogCreation/PostDog';
import DogDetail from './components/dogDetail/DogDetail';



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
      <Route exact path = '/dog/:id'>
        <DogDetail/>
      </Route>
    </div>
  );
}

export default App;
