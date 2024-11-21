import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import './index.css'; 

const App = () => {

  return (
    <div>
      <Router>
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:productId' element={<ProductDetails/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
