import { useState } from 'react'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import './App.css'
import ItemDetail from './components/ItemDetail.jsx'
import Layout from './components/Layout.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="background">

      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element = {<ItemListContainer/>}/>
            <Route path="/category/:categoryId" element = {<ItemListContainer />} />
            <Route path="/brand/:id" element = {0} />
            <Route path="*" element = {<NotFound />}/>
          </Routes>


  
          
        </Layout>
      </BrowserRouter>

    </div>
  )
}

export default App
