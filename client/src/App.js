import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './screens/Home'
import Connect from './screens/Connect'
import Events from './screens/Events'
import Giving from './screens/Giving'
import Staff from './screens/Staff'
import WatchLive from './screens/WatchLive'
import About from './screens/About'
import { Container } from 'react-bootstrap'
import NavTabs from './components/NavTabs'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <>
        <main className='py-3'>
          <Container>
            <Header />
            <NavTabs />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/connect' element={<Connect />} />
              <Route path='/events' element={<Events />} />
              <Route path='/giving' element={<Giving />} />
              <Route path='/staff' element={<Staff />} />
              <Route path='/watchlive' element={<WatchLive />} />
            </Routes>
          </Container>
        </main>
      </>
    </Router>
  )
}

export default App
