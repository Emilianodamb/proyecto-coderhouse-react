import ItemListContainer from './components/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import './App.css'
import Layout from './components/Layout.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound.jsx'

function App() {

  return (
    <div className="background">

      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element = {<ItemListContainer/>}/>
            <Route path="/category/:categoryId" element = {<ItemListContainer />} />
            <Route path="/item/:id" element = {<ItemDetailContainer />} />
            <Route path="*" element = {<NotFound />}/>
          </Routes>


  
          
        </Layout>
      </BrowserRouter>

    </div>
  )
}

export default App
