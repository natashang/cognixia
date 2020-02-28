import React from 'react';
import './App.css';

//components
import MyProvider from '../myProvider'
import Cars from '../childComponents/cars'

// Wraps child components in the parent Provider component
// which contains the values of the Context object
function App() {
  return (
    <MyProvider>
      <Cars/>
    </MyProvider>
  );
}

export default App;
