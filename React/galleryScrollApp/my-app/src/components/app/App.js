import React from 'react';
import './App.css';
import Gallery from '../gallery/gallery'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my Gallery</h1>
        <p>Check out my kewl pics</p>
        <Gallery/>
      </header>
    </div>
  );
}

export default App;
