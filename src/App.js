import React from 'react';
import './assets/css/materialize.css';
import './App.css';
import TimerMain from './components/TimerMain';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m8 l6">
          <TimerMain />
        </div>
      </div>
    </div>

  );
}

export default App;
