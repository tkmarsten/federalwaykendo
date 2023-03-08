import NavBar from '../components/NavBar'
import Home from './Home'
import About from './About'
import Class from './Class'
import FAQ from './FAQ'
import Terms from './Terms'
import Gallery from './Gallery.js'
import Footer from '../components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

function App() {
  return (
    <Router>
      <NavBar />
      <Box className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/class' element={<Class />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<Terms />} />
          <Route path='/gallery' element={<Gallery />} />
        </Routes>
      </Box>
      <Footer />
    </Router>
  )
}

export default App