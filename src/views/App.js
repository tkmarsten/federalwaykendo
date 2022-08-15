import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from '../components/NavBar'
import Home from './Home'
import About from './About'
import FAQ from './FAQ'
import Terms from './Terms'
import Footer from '../components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/faq" element={<FAQ />}></Route>
            <Route path="/terms" element={<Terms />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App