import React from 'react'
import HOCWrapComponent from './hocWrapComponent'

// 1. This class takes the data from the context object's value
// 2. Sets up the browser display view
// 3. And is passed into a HOC component as a Component parameter 
// to apply the context and state to the CompA component
class Cars extends React.Component {
    render() {
        return (
            <div>
                {this.props.context.cars.map( car=> {
                    return(
                        <h2 key={car}>{car.name}</h2>
                    )     
                })}               
            </div>
        )
}}

export default HOCWrapComponent(Cars)