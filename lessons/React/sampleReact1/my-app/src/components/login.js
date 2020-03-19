import React, {useState} from 'react'
//import Headline from './headline'
import { Card, InputGroup, FormControl, Button, Form, Col} from 'react-bootstrap'

function Login () {
    let [model, update] = useState({
        email: '',
        password:''
    })

    function changeVal(event) {
        let obj = Object.assign({}, model)
        obj[event.target.name] = event.target.value
        update(obj)
      }
    
      function submit(e) {
        e.preventDefault()
        console.log(model)
      }

    return(
        
                <Card bg="dark" text="white" style={{ width: '25rem' }}>
            <Card.Header>Please log in to your account</Card.Header>
            <Card.Body>
                <Form onSubmit={submit}>
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
                        })}
                    </InputGroup>
                    <Button type="submit">Submit</Button>
                </Form>
                
            </Card.Body>
        </Card>
               
    )
        // <Col>
           
        // </Col>
        
    // )

/*     return (
        <div>
            <Headline title="I'm the Login component"/>
        </div>
    ) */

}
export default Login

/* class Home extends Component {
    render() {
        return(
            <h2>I'm a Home from home.js</h2>
        )
    }
}

export default Home; */