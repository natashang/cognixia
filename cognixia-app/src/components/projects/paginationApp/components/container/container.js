import React from 'react'
import User from '../user/user'

// TODO: Make the users display in a row by col layout, than one list!

// contains all of the users belonging to the page from the JSON file
export default function Container(props){
    return(
        <div >
            { props.listOfUsers.map(user => 
                <User
                    email={user.email}
                    first_name={user.first_name}
                    last_name={user.last_name}
                    image={user.avatar}
                />
            )}
        </div>
    )
}