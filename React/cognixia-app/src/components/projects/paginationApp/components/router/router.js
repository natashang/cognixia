import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import {Button, ButtonToolbar} from 'react-bootstrap'

export default function Router(props){
    const style={
        'margin':'15px',
        'padding':'10px'
    }

    return(
        <div>
            <ButtonToolbar>
                <BrowserRouter>
                    {props.links.map ( link => {
                        return(
                            <Button 
                                onClick={() => props.changePage(link.to) }
                                variant="outline-primary"
                                style={style}
                            >
                                <Link to={ link.to}>{link.name}</Link>
                            </Button>
                        )
                    })}
                </BrowserRouter>    
            </ButtonToolbar>
        </div>
        

        
    )
}