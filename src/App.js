import React, { useEffect, useState, useCallback, useRef } from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
	useHistory,
} from 'react-router-dom'
import InfoBar from './components/InfoBar'
import Navbar from './components/Navbar'
import './App.css'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import AboutUsPage from './pages/AboutUsPage'
import GallerySection from './components/Gallery/GallerySection'
import ContactUsSection from './components/ContactUs/ContactUsSection'
import DetailPage from './components/DetailPage'
import Logo from './assets/logo.png'

function App() {
	
	let routes = (
			<Switch>
				<Route exact path='/'>
					<HomePage/>
				</Route>
				<Route path='/about'>
					<AboutUsPage/>
				</Route>
				<Route path='/gallery'>
					<GallerySection/>
				</Route>
				
				<Route path='/contact'>
					<ContactUsSection/>
				</Route>
				
				<Route path='/tieups'>
					<DetailPage/>
				</Route>
				
				<Route path='/detail'>
					<DetailPage/>
				</Route>

				<Redirect to='/' />
			</Switch>
		)
	

	return (
			<Router>
        <InfoBar />
				<img src={Logo} style={{height:'8vh',position:'absolute',top:'10px',left:'50px' }}/>
				<Navbar /> 
				<Switch> {routes} </Switch>
				<Footer />
      </Router>
	)
}

export default App
