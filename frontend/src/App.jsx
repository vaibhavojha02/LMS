


import Navbar from './components/Navbar'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/home/Home'

function App() {
  

  return (
    <>
    <Navbar/>
    
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
