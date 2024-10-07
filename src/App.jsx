import { useState } from 'react'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import './App.css'
import ItemDetail from './components/ItemDetail.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="background">
      <NavBar />
      <ItemDetailContainer />
      <ItemListContainer greeting="PROductManagement" message="El salto de calidad que necesita tu empresa"/>
    </div>
  )
}

export default App
