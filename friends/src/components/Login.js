import React, { useState } from 'react';
import axios from 'axios';
import './Login.scss';

export default function Login(props) {

  const [item, setItem] = useState({
    username: "",
    password: ""
  })

  const handleChange = event => {
    setItem({ ...item, [event.target.name]: event.target.value })
    console.log(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    axios
      .post("http://localhost:5000/api/login", item)
      .then(response => {
        localStorage.setItem("token", response.data.payload)
        props.history.push("/protected")
        console.log(response);
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  return (
    <form onSubmit={handleSubmit}>
    <ul>
      <li><input name="username" value={item.username} placeholder="username" onChange={handleChange}/></li>
      <li><input name="password" value={item.password} placeholder="password" onChange={handleChange}/></li>
      <button>Submit</button>
    </ul>
    </form>
  )
}