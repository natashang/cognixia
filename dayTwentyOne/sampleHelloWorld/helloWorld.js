/* Standalone code! Not part of a project */

// ES6 import statements, ES5 used require statements
import React from 'react'
import ReactDOM from 'react-dom'

// class component
class HelloWorld extends React.Component {

  // business logic goes here!

  // render() is called several times
  render() {
    return (
      <div>Hello World!</div>
    )
  }
}

// React component classes are mounted like HTML tags
// ReactDOM is like a DOM manipulation library
// root is in the index.html, div id=root
ReactDOM.render(<HelloWorld />, document.getElementById('root'));