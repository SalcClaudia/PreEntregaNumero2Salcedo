import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Landing from './components/Landing'
import ItemDetails from './components/ItemDetails'
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer'
import CartContextProvider from './components/CartContext'
import Cart from './components/Cart';


function App() {

  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<Landing />} />
            <Route path={"/ItemDetails/:id"} element={<ItemDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App;