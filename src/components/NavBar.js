import React from 'react'
import { Menu2 } from 'tabler-icons-react'
import Sidebar from './Sidebar'

function Navbar() {
	return (
		<>
			<header className="navbar">
				<ul className="nav-list">
					<li className="logo">
						<h1>OmniaPaku</h1>
					</li>
					<div className="desktop-wrapper large-vis">
						<a href="#local">
							<li>Etusivu</li>
						</a>
						<a href="#local">
							<li>Tarjoukset</li>
						</a>
						<a href="#local">
							<li>Muuttopalvelut</li>
						</a>
						<a href="#local">
							<li>Noutopisteet</li>
						</a>
						<a href="#local">
							<li>Lisätietoa</li>
						</a>
						<a href="#local">
							<li>Yhteystiedot</li>
						</a>
					</div>

					<li className="large-vis">
						<button>Varaa OmniaPaku</button>
					</li>
					<Menu2
						className="nav-menu-btn"
						style={{ cursor: 'pointer' }}
						size={32}
					></Menu2>
				</ul>
			</header>

			<Sidebar style={{ display: 'none' }}></Sidebar>
		</>
	)
}

export default Navbar
