import React from 'react'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <h1>Home</h1>
    <Button title='Teste 1' />
    <Button title='Teste 2' variant='secondary' />

    <Link to="/login">Ir para Login</Link>
    </>
  )
}

export default Home