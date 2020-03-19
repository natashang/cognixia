import React, {useState} from 'react';
import { Card, InputGroup, FormControl, Col, Button } from 'react-bootstrap';
// import {useHistory} from 'react-router-dom' // do i have to install this? check dependencies
// import axios from 'axios'? //to install

function Register() {
    let [model, update] = useState({
        email: '',
        password:'',
        username:'',
        zip:''
  })

  function changeVal(event) {
    let obj = Object.assign({}, model)
    obj[event.target.name] = event.target.value
    update(obj)
  }

  function submit(e) {
    e.preventDefault()
    console.log(model)

    /*
      axios.post('/api/user', model)
      .then ((response) => {
        props.history.push('/members')
			})
			.catch( (err) => {
			  throw err
			})
		  

    */

  }

    return(

    <Col><Card bg="dark" text="white" style={{ width: '25rem' }} >
      <Card.Header>Create an account</Card.Header>
      <Card.Body>
        <form onSubmit={submit}>
            <InputGroup>
            {Object.keys(model).map( (item) => {
                return (
                    <Col key={'form_' + item} lg={12} style={{marginBottom: '10px'}}>              
                    <FormControl
                        type={item === 'password' ? 'password' : 'text'}
                        placeholder={item.charAt(0).toUpperCase() + item.slice(1)}
                        name={item}
                        aria-label={item}
                        onChange={changeVal}
                    />
                </Col>
                )
                })
            }
            </InputGroup>
            <Button type="submit">Submit</Button>
        </form>
      </Card.Body>
    </Card></Col>
    )
  }

export default Register