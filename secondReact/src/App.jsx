import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Landing from './components/Landing'
import ItemDetails from './components/ItemDetails'
import ItemListContainer from './components/ItemListContainer'


function App() {

  return (
    <>
    
        <BrowserRouter>
          <NavBar />
          <Routes>
          <Route path={"/"} element={<Landing />} />
          <Route path="/ItemDetails/:id" element={<ItemDetails />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;