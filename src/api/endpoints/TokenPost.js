import React from 'react'

function TokenPost() {

  const [username, setUserName] = React.useState()
  const [password, setPassword] = React.useState()
  const [token, setToken] = React.useState()

  function handleSubmit(event) {
    event.preventDefault()
    console.log({username, password})

    fetch('http://dogsapi.test/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password
      })
    }).then((response) => {
      console.log(response)
      return response.json()
    }).then((data)=> {
      console.log(data)
      setToken(data.token)
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
      <p style={{wordBreak: 'break-all'}}>{token}</p>
      <button>Enviar</button>
    </form>
  )
}

export default TokenPost
