import React from 'react'
import Headline from './headline'
import {Redirect} from 'react-router-dom'

function Members() {

  /*   if(props.authSession === true) {
        return <Headline title='Members'/>
    }
    else {
        <Redirect to ='/'/>
    } */

    return <Headline title="I'm the Members component"></Headline>
}

export default Members