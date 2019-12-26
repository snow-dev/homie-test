import React from 'react';
import '../resources/styles/App.css';
import {Route, Switch} from 'react-router-dom';
import HomeContainer from './Home/HomeContainer';

function App() {
  return (
    <div className="layout">
      <Switch>
        <Route exact path="/" component={HomeContainer}>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
