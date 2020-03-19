import React, {useState, Component} from 'react'
import Row from './row/row'

export default class Gallery extends Component{

    constructor(props){
        super(props)
        this.state = {
            numRows:3,
            allImages:[],
            numImages:4,
            imgPath : './dog.jpg'
        }

        this.populateImages = this.populateImages.bind(this)
    }

    populateImages() {
        // get a copy
        const temp = [...this.state.allImages]
        for (let i = 0; i < this.state.numImages; ++i) {
            temp[i] = this.state.imgPath;
            alert("added : " + temp[i])
        }
        this.setState({allImages:temp})
    }

    setRows = newNumRows => this.state.numRows
   
    render() {
        return(
            <div>
                <Row />
                <h3 onClick= {this.populateImages}>Click me for alerts</h3>

            </div>
        )    
    }
}
    