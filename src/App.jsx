import ItemListContainer from './components/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import './App.css'
import Layout from './components/Layout.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound.jsx'
import ThemeProvider from './context/ThemeProvider.jsx'
import CartProvider from './context/CartProvider.jsx'
import Cart from "./components/Cart.jsx"

function App() {

  return (
    <div className="background">
      <CartProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element = {<ItemListContainer />}/>
                <Route path="/category/:categoryId" element = {<ItemListContainer />} />
                <Route path="/item/:id" element = {<ItemDetailContainer />} />
                <Route path="*" element = {<NotFound />}/>
                <Route path="/cart" element={<Cart />}/>
              </Routes>
            </Layout>
          </BrowserRouter>
        </ThemeProvider>
      </CartProvider>

    </div>
  )
}

export default App
