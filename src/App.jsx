import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Product from './components/Product'

const App = () => {
  return (
    <div className='bg-slate-100'>
      <Navbar />
      <Home />
      <Product />
    </div>
  )
}

export default App
