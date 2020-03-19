import React, {useState} from 'react'
import { render } from 'react-dom';

    
  // functional component
  //function App() {
  {/*<div>Hello World!</div>*/}
  
  {/* useState(x) is another way to set the default state value
      This is a hook
      useState(x) returns an array with a stateful value and a function to update it
   */}
   
  const FunctionalCounter = props => {
    const [count, setCount] = useState(0)
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count+1)}>Click Me</button>
      </div>
    );
  }

export default FunctionalCounter;