import React, { Component } from 'react';
import './App.css';
import { Switch, Route} from 'react-router';
import Home from './Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
              <Switch>

              <Route exact path="/" component={Home}/>

              {/* <Route path="/" component={}/>

              <Route path="/" component={}/> */}

            </Switch>
      </div>
    );
  }
}

export default App;
