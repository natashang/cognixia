import React from 'react'
import {Card} from 'react-bootstrap'

export default function User(props) {
    return(
        <Card style={{ width: '18rem', margin:'20px'}}>
            <Card.Img variant="top" src={props.image} alt="some alt text" />
            <Card.Body>
                <Card.Title>{props.first_name} {props.last_name}</Card.Title>
                <Card.Text>{props.email}</Card.Text>
            </Card.Body>
        </Card>
    )
}