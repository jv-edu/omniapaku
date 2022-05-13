import React from 'react'
import OmniaButton from './OmniaButton'

const AltHero = (props) => {
	return (
		<section className="alt-hero large-vis">
			<div className="hero-info">
				<div className="hero-text">
					<h1 dangerouslySetInnerHTML={{ __html: props.header }}></h1>
					<p
						className="hero-desc"
						dangerouslySetInnerHTML={{ __html: props.heroDesc }}
					></p>
				</div>
				<OmniaButton buttonText="Varaa OmniaPaku"></OmniaButton>
			</div>
		</section>
	)
}

export default AltHero
