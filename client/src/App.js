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

function App() {
  return (
    <Router>
      <div id='wrapper'>
        <Header />
        <main className='p-3'>
          <Container>
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
      </div>
    </Router>
  )
}

export default App
