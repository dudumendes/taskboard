import React from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

import Topo from './components/Topo'
import Rodape from './components/Rodape'
import Taskboard from './components/Taskboard'

function App() {
  return (
    <div >
      <Topo />
      <Taskboard />
      <Rodape />
    </div>
  );
}

export default App;
