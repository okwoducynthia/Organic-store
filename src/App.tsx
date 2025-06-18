import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage/HomePage'
import AboutPage from './Pages/AboutPage/AboutPage'
import ProductsPage from './Pages/ProductsPage/ProductsPage'
import ContactPage from './Pages/ContactPage/ContactPage'



function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
    </>
  )
}

export default App
