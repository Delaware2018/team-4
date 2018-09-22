import React, {
  Component
} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';
import {
  Switch,
  Route
} from 'react-router';
import Home from './Home/Home';

class App extends Component {
  render() {
    return ( <
      div className = "App" >
        <Switch >
        <Route exact path = "/"component = {Home} />
        </Switch> 
      </div>
    );
  }
}

export default App;