import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from '../src/components/Header'
import Meme from '../src/components/Meme'

function App() {

  return (
    <div>
      <Header/>
      <div className='container'>
        <Meme/>
      </div>
    </div>
  )
}

export default App
