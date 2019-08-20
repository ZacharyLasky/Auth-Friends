import React from 'react';

export default function Login() {

  const [item, setItem] = useState({
    username: "",
    password: ""
  })

  const handleChange = event => {
    setItem(...item, [event.target.name]: event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    
  }

  return (
    <Form>
      onSubmit={handleSubmit}
      <input name="username" value={item.name} placeholder="username" onChange={handleChange}>
      <input name="password" value={item.name} placeholder="password" onChange={handleChange}>
      <button>Submit</button>
    </Form>
  )
}