import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux';
import {store, persistor} from './store';
import Landing from './components/Landing/landing'
import Navbar from './screens/navbar';
import Login from './screens/Login';
import Team from './components/team/Team';
import Room from './screens/Room';
import Question from './screens/Question';

import OneDoor from './screens/doorpages/one';
import ThreeDoors from './screens/doorpages/three';
import FourDoors from './screens/doorpages/four';
import FiveDoors from './screens/doorpages/five';
import Grid from './screens/grid-page/Grid';
function App() {
  return (
    <div className="App">
    <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
    <Navbar />
    
      <Switch>
    <Route exact path = '/' component = {Landing}/>
    <Route path = '/login' component = {Login}></Route>
    <Route path = '/team-registration' component = {Team}/>
    <Route exact path = '/maze/dead_end' component={Landing}/>
    <Route path = '/maze/:roomId' component={Room}/>
    <Route path = '/path/:qID' component={Question}/>
    <Route path = '/grid' component = {Grid}/>

    <Route path = '/onedoor' component = {OneDoor}/>
    <Route path = '/threedoors' component = {ThreeDoors}/>
    <Route path = '/fourdoors' component = {FourDoors}/>
    <Route path = '/fivedoors' component = {FiveDoors}/>
    </Switch>
    </Router>
    </PersistGate>
    </Provider>
    </div>

  );
}

export default App;
