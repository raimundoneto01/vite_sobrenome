

import { useState } from 'react'
import './App.css'

function App() {
 const [sobrenome, setSobrenome] = useState('Neto Gomes')
 const [trocarBotao, settrocarBotao] = useState('trocar')
  // let sobrenome = "neto"

  const trocar =()=>{
    setSobrenome(sobrenome.toUpperCase())
    settrocarBotao('troquei')
  }


  return (
    <>
      <h1>Neto Gomes</h1>
      <div>{sobrenome}</div>
      <button type='button' onClick={trocar}>{trocarBotao}</button>
      
    </>
  )
}

export default App
