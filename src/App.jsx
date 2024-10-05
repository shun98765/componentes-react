import { useState } from 'react'
import './App.css'
import Cards from './assets/componentes/cards/Cards'
import Video from './assets/componentes/Video'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cards/>
      <Video/>
    </>
  )
}

export default App