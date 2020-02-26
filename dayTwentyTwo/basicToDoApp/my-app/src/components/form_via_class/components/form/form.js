import React from 'react'

function Form(props) {
    return(
        <form onSubmit={props.handleInputSubmit}>
            {/* value={props.value} */}
            <input ref={props.value} type="text"  autoFocus onChange={props.handleInputChange}/>
            <input type="submit" value="Add" id="submitButton"/>            
        </form>
    )    
}

export default Form;