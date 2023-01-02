import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import './index.css'
import Home from './screens/Home'
import Connect from './screens/Connect'
import Staff from './screens/Staff'
import WatchLive from './screens/WatchLive'
import About from './screens/About'
import NavTabs from './components/NavTabs'
import Header from './components/Header'
import Login from './screens/Login'
import EventEdit from './screens/Events/EventEdit'
import Events from './screens/Events/Events'
import Instructions from './screens/Events/Instructions'
import Images from './screens/Events/Images'

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
							<Route path='/staff' element={<Staff />} />
							<Route path='/watchlive' element={<WatchLive />} />
							<Route path='/login' element={<Login />} />
							<Route path='/events' element={<Events />} />
							<Route path='/instructions' element={<Instructions />} />
							<Route path='/event/edit' element={<EventEdit />} />
							<Route path='/event/edit/:id' element={<EventEdit />} />
							<Route path='/images' element={<Images />} />
						</Routes>
					</Container>
				</main>
			</div>
		</Router>
	)
}

export default App
