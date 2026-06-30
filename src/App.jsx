import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Button from './components/Button'
import './App.css'
import Praksul from './page/Praksul'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Praksul/>
    </>
  )
}

export default App
