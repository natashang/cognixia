import React, {useState} from 'react'
import {Button} from 'react-bootstrap'
import './form.css'

/*
    A functional compoment implementation of a form for a To Do List
    Features
        - text input
        - submit button
        - adds the input to a list
        - displays the list
        - deletes items from the list and updates automatically
*/

// there can only be one default export per file!
function Form (){

    // setState(): updates the component's state object 
    // when the state changes, the component is re-rendered

    // props: properties, passed to component like parameters
    // state: managed within the component, like variables in a function

    // mutable state is kept in the component's state property
    let [value, setValue] = useState('')
    let [listOfItems, setList] = useState([])
    
    /*
    constructor(props) {
        super(props)
        this.state = {
            value:'',
            listOfItems: []
        }
        
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleInputSubmit = this.handleInputSubmit.bind(this)
    }
    */

    /*
        Why "function" keyword?
        - to define functions in a component, it should be a functional component
    */

    /*
        - changing an input field creates an event object
        - so we set the state's value from the event's value

        in the lexical scope of this specific instance, as 
        new letters are inputted, change the state's value
        enter 'f' --> state = f
        then 'fs' --> state = fs
        the state changes with each new inputted character
    */

    // changes the input text field from, say, "abac" to ""
    function handleInputChange (event){
        setValue( event.target.value)
    }

    /*
        here, we take the value from the state because inputting is done
        preventDefault(): prevent a browser reload or refresh
        when submitting a form, the browser reloads
    */
    // when the submit button is clicked, invoking this method, append the input to a list and display
    function handleInputSubmit (event) {
        addToList(value)
        setValue('')
        event.preventDefault()
    }

    // takes the inputted value, adds it to a copy of the list, and updates the list
    function addToList(item){
        // get a copy
        const list = listOfItems
        list.push(item)
        setList(list)
    }

    // deletes a specifieditem from a list
    function handleDeleteItem(item){
        
        //get a copy
        const list = [...listOfItems]
        const index = list.indexOf(item)
        
        // goes to index and removes ONE element
        list.splice(index, 1)
        setList(list)
    }

    // destructing the Form class object to call the respective methods
    // render() {
        return(
            <div>  
                <form onSubmit={handleInputSubmit}>
                    <input type="text" value={value} autoFocus onChange={handleInputChange}/>
                    <input type="submit" value="Add" id="submitButton"/>            
                </form>
            
                <ul>
                    { listOfItems.map( item => {
                        return(
                            <div>
                                <li key={item}>{item} 
                                    <Button
                                        variant="outline-primary" 
                                        onClick={() => handleDeleteItem(item)}
                                    >
                                        X
                                    </Button>
                                </li>
                            </div>
                        )
                    })}
                </ul>
            </div>            
       );
    //}

}
export default Form;