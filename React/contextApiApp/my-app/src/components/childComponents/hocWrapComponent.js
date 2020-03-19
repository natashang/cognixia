import React from 'react';
import MyContext from '../myContext'

// Applies the Context object's values to functional components via a higher order component
// Functional components: use <MyContext.Consumer>
// Class components     : use MyClass.contextType = MyContext;

export default function HOCWrapComponent(Component) {
    return function WrapperComponent(props) {
        return (
            <MyContext.Consumer>
                { state => 
                    <Component {...props} 
                    context={state} />}
            </MyContext.Consumer>
        );
    };
}