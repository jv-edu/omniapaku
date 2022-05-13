import Navbar from './components/NavBar'
import React from 'react'
import './styles/index.css'
import './styles/style.css'
import Hero from './components/Hero'
import FeaturesBlock from './components/FeaturesBlock'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import AltHero from './components/AltHero'

function App() {
	return (
		<div className="App">
			<Navbar></Navbar>

			<AltHero
				header="Meiltä saat pakettiauton<br/>vaivattomasti käyttöösi"
				heroDesc="Lorem ipsum dolor sit amet,onsectetur adipiscing elit.<br/>Massa habitant amet, condimentum sollicitudin nisi."
			></AltHero>
			<Sidebar></Sidebar>
			<Hero
				header="Meiltä saat pakettiauton vaivattomasti käyttöösi"
				heroDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa habitant amet, condimentum sollicitudin nisi."
			></Hero>
			<FeaturesBlock></FeaturesBlock>
			<Footer></Footer>
		</div>
	)
}

export default App
