import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Landing from './components/Landing'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <>
      <body className='body'>

        <BrowserRouter>
          <NavBar />
          <Routes>
          <Route path={"/"} element={<Landing />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          </Routes>
          
 
        </BrowserRouter>


      </body>

      <footer></footer>
    </>
  )
}

export default App