import React from 'react'
//import pic from './dog.jpg'

export default function Image(props){

    const style={
        'border': '1px solid #ddd',
        'border-radius': '4px',
        'padding': '5px',
        'width': '300px',
        'margin': '15px'
    }

    function clicker(path){
        alert("imgPath: " + path)
    }
    return(
        <img src={props.imgPath} alt="a cold dog" style={style} onClick={clicker(props.imgPath)}/>
    )
    
}