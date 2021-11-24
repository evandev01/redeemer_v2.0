import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Connect from './components/Connect'
import Events from './components/Events'
import Giving from './components/Giving'
import Staff from './components/Staff'
import WatchLive from './components/WatchLive'
import './index.css'
import { Container } from 'react-bootstrap'
import NavTabs from './components/NavTabs'

function App() {
  return (
    <Router>
      <>
        <main className='py-3'>
          <Container>
            <NavTabs />
            <Routes>
              <Route path='/' element={<Home />} />
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
