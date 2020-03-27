import React from "react";
import User from "../user/user";
import "./container.css";

// contains all of the users belonging to the page from the JSON file
export default function Container(props) {
  return (
    <div className="container">
      {props.listOfUsers.map(user => (
        <User
          email={user.email}
          first_name={user.first_name}
          last_name={user.last_name}
          image={user.avatar}
        />
      ))}
    </div>
  );
}
