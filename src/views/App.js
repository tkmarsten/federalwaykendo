import NavBar from '../components/NavBar'
import Home from './Home'
import About from './About'
import FAQ from './FAQ'
import Terms from './Terms'
import Footer from '../components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App