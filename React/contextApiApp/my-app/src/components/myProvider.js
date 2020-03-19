import React from 'react'
import MyContext from './myContext'

// The provider is used to get the context object's values
export default class MyProvider extends React.Component{
    constructor(props){
        super(props)

        //Set the global application context defaults here
        this.state={
            cars:[
                {name: 'Honda'},
                {name: 'BMW'},
                {name: 'Audi'}
            ],
            numCars: 3,
            currentCar: {}
        }
    }

    componentDidMount(){
        
    }

    // Goal: set state.currentCar to point to an obj in the cars[],
    // and implement a feature to change the pointer
    componentDidUpdate(){
        /*
        const currIndex = Math.floor(Math.random() * Math.floor(this.state.numCars))
        const currCar = this.state.cars[currIndex]
        console.log("hi! got currCar: " + currCar.name + ", type: " + typeof(currCar) + ", obj: " + currCar)

        this.setState({currentCar: currCar})
        console.log("hi! the current car: " + this.state.currentCar.name)
        */
    }

    // Passes the value property to consuming components that are descendants of this Provider
    // Use a Provider to pass the current theme to the tree below.
    // Any component can read it, no matter how deep it is.
    render() {
        return(
            <MyContext.Provider value= { this.state } >
                {this.props.children}
            </MyContext.Provider>
        )
    }

}