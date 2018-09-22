import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';
import {
  Switch,
  Route
} from 'react-router';
import Home from './Component/Home/Home';
import AccountChoices from './Component/AccountChoices/AccountChoices';

class App extends Component {
  render() {
    return ( <
      div className = "App" >
        <Switch >
        <Route exact path = "/"component = {Home} />
        <Route path = "/signup" component = {AccountChoices} />
        </Switch> 
      </div>
    );
  }
}

export default App;