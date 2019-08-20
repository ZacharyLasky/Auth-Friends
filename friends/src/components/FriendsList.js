import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function FriendsList() {

  const [friend, setFriend] = useState({
    name: "",
    age: "",
    email: ""
  })

  const handleChange = event => {
    setFriend({ ...friend, [event.target.name]: event.target.value })
    console.log(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", friend)
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  const getData = () => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(response => {
        setFriend(response.data)
        console.log(response.data)
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="name" value={friend.name} placeholder="name" onChange={handleChange}/>
        <input name="age" value={friend.age} placeholder="age" onChange={handleChange}/>
        <input name="email" value={friend.email} placeholder="email" onChange={handleChange}/>
        <button>Submit</button>
      </form>
      
      <button onClick={getData}>Display Friends</button>
    </>
    
  )
}