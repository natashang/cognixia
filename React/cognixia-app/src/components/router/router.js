import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import {Button, ButtonToolbar} from 'react-bootstrap'
import PaginationApp from '../projects/paginationApp/components/app/App'

const path = require('path')

// copied over from paginationApp/router.js
// creates buttons and redirects accordingly for each link

export default function Router(props){
    console.log("props: " + props.data)

    const style={
        'margin':'15px',
        'padding':'10px'
    }

/*
    { 
        "name":"basic router", 
        "to":1 
    },
    { 
        "name":"to do app", 
        "to":2 
    },
    {
        "name":"gallery scroll app",
        "to": 3
    },
    */

    return(
        <div>
            <ButtonToolbar>
                <BrowserRouter>
                    <Link to={path.join(__dirname+"./components/projects/paginationApp/components/app/App.js")}>
                        Pagination
                        {/* <PaginationApp/> */}
                    </Link>
                {/*
                    {props.links.map ( link => {
                        return(
                            <Button key={link}
                            //props.changePage(link.to)
                                onClick={() => console.log(link.to +" was clicked") }
                                variant="outline-primary"
                                style={style}
                            >
                                <Link as={link} to={ link.to}>{link.name}</Link>
                            </Button>
                        )
                    })}
                */}
                </BrowserRouter>    
            </ButtonToolbar>
        </div>
        

        
    )
}