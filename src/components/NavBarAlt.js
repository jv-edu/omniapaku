import React, { useState } from 'react'
import { Menu2 } from 'tabler-icons-react'
import Sidebar from './Sidebar'

function NavbarAlt() {
	return (
		<>
			<header className="NavbarAlt">
				<ul className="nav-list">
					<li className="logo">
						<h1>OmniaPaku</h1>
					</li>
					<div className="desktop-wrapper">
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
					<li>
						<button>Varaa OmniaPaku</button>
					</li>
					<Menu2
						className="nav-menu-btn"
						style={{ cursor: 'pointer' }}
						size={32}
					></Menu2>
				</ul>
			</header>
		</>
	)
}

export default NavbarAlt
