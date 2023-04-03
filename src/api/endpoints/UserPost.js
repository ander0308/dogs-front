import React from 'react'

function UserPost() {

  const [username, setUserName] = React.useState()
  const [email, setEmail] = React.useState()
  const [password, setPassword] = React.useState()

  function handleSubmit(event) {
    event.preventDefault()
    console.log({username, email, password})

    fetch('http://dogsapi.test/json/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, email, password})
    }).then((response) => {
      console.log(response)
      return response.json()
    }).then((data)=> {
      console.log(data)
      return data
    })
  }


  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='username'
        value={username}
        onChange={({target}) => setUserName(target.value)}
      />

      <input
        type='text'
        placeholder='password'
        value={password}
        onChange={({target}) => setPassword(target.value)}
      />

      <input
        type='email'
        placeholder='email'
        value={email}
        onChange={({target}) => setEmail(target.value)}
      />
      <button>Enviar</button>
    </form>
  )
}

export default UserPost
