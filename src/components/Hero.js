import React from 'react'
import HeroImageSmall from './HeroImageSmall'
import OmniaButton from './OmniaButton'

const Hero = (props) => {
	return (
		<section className="hero">
			<HeroImageSmall></HeroImageSmall>
			<div className="hero-info">
				<div className="hero-text">
					<h1>{props.header}</h1>
					<p className="hero-desc">{props.heroDesc}</p>
				</div>
				<OmniaButton buttonText="Varaa OmniaPaku"></OmniaButton>
			</div>
		</section>
	)
}

export default Hero
