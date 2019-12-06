import React, { Component } from "react";

const App = () => {
  const profiles = [
    {
      name: "Taro", age:10
    },
    {
      name: "Satoko", age:10
    },
    {name: "NoName"}
  ]
  return(
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )
}

const User = (props) => {
return <div>I am {props.name} and {props.age} years old</div>
}

User.defaultProps = {
  age:10
}

export default App;
