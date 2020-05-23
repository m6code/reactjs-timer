import React from 'react';
import './assets/css/materialize.css';
import './App.css';
import TimerMain from './components/TimerMain';
import CountdownTimer from './components/CountdownTimer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound'


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="row">
          <div className="col s12 m8 l6">
            <Switch>
              <Route exact path='/' component={TimerMain} />
              <Route path='/countdown-timer' component={CountdownTimer} />
              <Route component={NotFound}/>
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
