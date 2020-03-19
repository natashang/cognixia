import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import {Nav, Navbar} from 'react-bootstrap'

// from components
import Home from './components/login'
import Register from './components/register'
import Members from './components/members'
import FunctionalCounter from './components/functionalCounter'

export default function App() {

  const Links = [
    {
      'name':'Login',
      'to':'/'
    },
    {'name':'Register',
      'to':'/register'
    },
    {
      'name': 'Members',
      'to':'/members'
    }
  ]

  return (

    // the Switch path and link url must match 
    <Router>
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#">Navbar</Navbar.Brand>

          {Links.map ( (link) => {
            return(
              <Nav.Link as={Link} to={link.to}>{link.name}</Nav.Link>
            )
          })}
      </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/members" component={Members}/>
          <Route path="/" component={Home} />
          {/* <Route path="/param/:param"><Param /></Route> */}
           {/* <Route path="/functionalcounter" component={FunctionalCounter}/> */}
        </Switch>
      </div>
    </Router>
  );
}