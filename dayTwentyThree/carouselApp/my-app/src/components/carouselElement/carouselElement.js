import React from 'react'
import './style.css'

export default function CarouselElement(props){
    return(
        <img src={props.imgSrc} alt="some alt text"  />
    )
}