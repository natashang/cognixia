import data from '../links.json'


import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Router from '../router/router'
const path = require('path')

/* Plan:
  - implement a router that will link to different react projects
  - "to" will direct to example: ../dayTen/my-app/src/app.js
  - default page will be a simple home page
  - future: get links from .JSON file
*/


export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = data
    
  }

  // TODO, default
  // do i need to npm install axios? .get .then .catch
  /*
  componentDidMount(){

  }
  */
  /*
  changePage(newPageTo){
    this.setState({currentPage: newPageTo})
  }
  */
  // TODO, refresh view
  /*
  componentDidUpdate(){

  }
  */

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>
            click on the links below
          </p>
          <Router
           links={this.state.data}
          //  changePage={this.changePage} 
          />
        </header>
      </div>
    );
  }
  
}

