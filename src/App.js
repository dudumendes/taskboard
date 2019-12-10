import React from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

import Topo from './components/Topo'
import Rodape from './components/Rodape'
import Taskboard from './components/Taskboard'
import About from './components/About'
import Devs from './components/Devs'
import ManageDev from './components/ManageDev'

import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div >
      <Topo />
      <Switch>
        <Route exact path="/" component={Taskboard} />
        <Route path="/devs" component={Devs} />
        <Route exact path='/dev' component={ManageDev} />
        <Route path='/dev/:id' component={ManageDev}/>
        <Route path="/about" component={About} />
      </Switch>
      <Rodape />
    </div>
  );
}

export default App;
