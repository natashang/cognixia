import React from 'react'
import Element from '../carouselElement/carouselElement'

export default function Carousel(props){
    return(
        <div>
            {props.data.map ( d => {
                return(
                    <Element 
                        imgSrc ={d.url}
                    />
                )
            })}
        </div>
    )
}