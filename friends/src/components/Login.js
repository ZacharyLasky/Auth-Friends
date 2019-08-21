import React, { useState } from 'react';
import axios from 'axios';
import './Login.scss';

import Loader from 'react-loader-spinner';

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
        setItem({
          password: ""
        })
      })
  }

  return (
    <form onSubmit={handleSubmit}>
    <Loader type="Oval" color="green" height="50" width="100" />
    <ul>
      <li><input name="username" value={item.username} placeholder="username" onChange={handleChange}/></li>
      <li><input name="password" value={item.password} placeholder="password" onChange={handleChange}/></li>
      <button>Submit</button>
    </ul>
    </form>
  )
}