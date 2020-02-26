import React from 'react';

import FormViaClass from '../form_via_class/form'
import FormViaFunc from '../form_via_func/form'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my To Do app!</h1>
        <p> Enter some items below with the Form class component</p>
        <FormViaClass/>
        <p> Enter some items below with the Form functional component</p>
        <FormViaFunc/>
      </header>
    </div>
  );
}

export default App;
