import React, {Component} from 'react'

// works the same
//function Headline(props) {
// functional component
const Headline = props => {
    {/* v0.1
     // in function Headline(props) {...}
          // props.children will render whatever is inside <Headline>, so <div>adsfads</div>
          return(
            <div>{props.children}</div>
          )
    
    */}
    {/* v1
    return (
      <div>
        <h1>{props.title}</h1>
        <h3>{props.children}</h3>
      </div>
    )
    */}
    // div ref puts a DOM reference
    let element = React.createRef()
    function turnBackgroundGreen() {
      debugger
      element.current.style.backgroundColor='green'
    }

    return(
      <div ref={element}>
        <h1 onClick={turnBackgroundGreen}>{props.title}</h1>
      </div>
    )
}
export default Headline;