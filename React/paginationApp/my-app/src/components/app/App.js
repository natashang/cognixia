import React from 'react';
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// components
import Router from '../router/router'
import Container from '../container/container'

export default class App extends React.Component{
  constructor(){
    super()

    this.state= {
        listOfUsers:[],
        currentPage: 1,
        links:[  
            { 'name':'page1', 'to':1 },
            { 'name':'page2', 'to':2 }
        ]
    }
    this.changePage = this.changePage.bind(this)
}   

// get data from reqres.in using axios and populate listOfUsers
componentDidMount(){
    axios
    .get('https://reqres.in/api/users?page=' + this.state.currentPage) 
    .then(resp => { this.setState({ listOfUsers: resp.data.data }) })
    .catch(err => console.log(err))
}

// used for pagination, clicking for a different page will load a diff data set of users
// example newPageTo input: 2 to direct to page 2
changePage(newPageTo){
    this.setState({currentPage: newPageTo})
}

// update with a new view and page of users
componentDidUpdate(){
    axios
    .get('https://reqres.in/api/users?page=' + this.state.currentPage) 
    .then(resp => { this.setState({ listOfUsers: resp.data.data }) })
    .catch(err => console.log(err))
}

render() {
    return(
        <div>
            <Router 
                links={this.state.links}
                changePage={this.changePage} 
            />
            <Container 
              listOfUsers ={this.state.listOfUsers} 
            />
        </div>          
    )
}
}
