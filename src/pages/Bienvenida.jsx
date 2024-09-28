import React from 'react'
import { useParams } from 'react-router-dom'

function Bienvenida() {

  const { nombre } = useParams();

  return (
    <>
    <h1>{ nombre }</h1>
    </>
  )
}

export default Bienvenida