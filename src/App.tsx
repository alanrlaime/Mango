import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Head from './Head/Head.App.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Head />
      <h1 className='gatos'>Gatos con droga</h1>
      <h1 className='gatos'>Gatos con droga</h1>
      <h1 className='gatos'>Gatos con droga</h1>
      <h1 className='gatos'>Gatos con droga</h1>
    </>
  )
}

export default App
