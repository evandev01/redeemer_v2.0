import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import './index.css'
import Home from './screens/Home'
import Connect from './screens/Connect'
import Giving from './screens/Giving'
import Staff from './screens/Staff'
import WatchLive from './screens/WatchLive'
import About from './screens/About'
import NavTabs from './components/NavTabs'
import Header from './components/Header'
import Login from './screens/Login'
import Event from './screens/Events/Event'
import EventEdit from './screens/Events/EventEdit'
import Events from './screens/Events/Events'

const App = () => {
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
              <Route path='/giving' element={<Giving />} />
              <Route path='/staff' element={<Staff />} />
              <Route path='/watchlive' element={<WatchLive />} />
              <Route path='/login' element={<Login />} />
              <Route path='/events' element={<Event />} />
              <Route path='/eventsold' element={<Events />} />
              <Route path='/event/edit/:id' element={<EventEdit />} />
            </Routes>
          </Container>
        </main>
      </div>
    </Router>
  )
}

export default App
