import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Api from './api/Api'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Login from './Components/Login/Login'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        <Footer />
      </BrowserRouter>
      {/* <Api /> */}
    </div>
  );
}

export default App;
