import React from 'react'
import Feature from './Feature'
import '../styles/style.css'

import {
	BuildingCommunity,
	Car,
	Package,
	ReceiptTax,
	Tags,
	Wand,
} from 'tabler-icons-react'

const FeaturesBlock = () => {
	return (
		<div className="features-block">
			<Feature
				icon={<Tags size={58} strokeWidth="1.25" color="var(--yellow)" />}
				title="9,90e / vrk"
				desc="Vuokrauksen hinta vaihtelee varaustilanteen, päivän ja kellonajan mukaan."
			></Feature>
			<Feature
				icon={<Car size={64} strokeWidth="1.25" color="var(--accent)" />}
				title="Vapaat kilometrit"
				desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa habitant amet, condimentum sollicitudin nisi."
			></Feature>
			<Feature
				icon={<Package size={54} strokeWidth="1.25" color="var(--pink)" />}
				title="Hinnat alkaen 5 snt / vrk!"
				desc="Muuttolaatikot, lainalaatikot, vuokralaatikot huippuedullisesti!"
			></Feature>
			<Feature
				icon={
					<BuildingCommunity
						size={54}
						strokeWidth="1.25"
						color="var(--accent)"
					/>
				}
				title="42 noutopistettä pääkaupunkiseudulla"
				desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa habitant amet, condimentum sollicitudin nisi."
			></Feature>
			<Feature
				icon={<ReceiptTax size={54} strokeWidth="1.25" color="var(--purple)" />}
				title="Ei maksullisia
				lisävarusteita tai piilokuluja"
				desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum rhoncus."
			></Feature>
			<Feature
				icon={<Wand size={54} strokeWidth="1.25" color="var(--pink)" />}
				title="Lorem ipsum dolor."
				desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum rhoncus."
			></Feature>
		</div>
	)
}

export default FeaturesBlock
