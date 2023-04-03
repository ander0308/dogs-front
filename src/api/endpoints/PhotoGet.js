import React from 'react'

const PhotoGet = () => {

  function handleSubmit(event) {
    event.preventDefault()
    fetch('http://dogsapi.test/json/api/photo/')
      .then(response => {
        console.log(response)
        console.log('chegou aqui')
        return response.json()
      })
        .then(data => {
        console.log('chegou aqui2')
        console.log(data)
        return data
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <button >Enviar</button>
    </form>
  )
}

export default PhotoGet
