

import { useState } from 'react'
import './App.css'

function App() {
 const [sobrenome, setSobrenome] = useState('Neto Gomes')
  // let sobrenome = "neto"

  const trocar =()=>{
    setSobrenome(sobrenome.toUpperCase())
  }


  return (
    <>
      <h1>Neto Gomes</h1>
      <div>{sobrenome}</div>
      <button type='button' onClick={trocar}>TROCAR</button>
      
    </>
  )
}

export default App
