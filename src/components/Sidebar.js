import '../styles/style.css'
import OmniaButton from './OmniaButton'

const Sidebar = () => {
	return (
		<aside className="sidebar-container">
			<ul className="sidebar">
				<a href="local">Etusivu</a>
				<a href="local">Tarjoukset</a>
				<a href="local">Muuttopalvelut</a>
				<a href="local">Noutopisteet</a>
				<a href="local">Lisätietoja</a>
				<a href="local">Yhteystiedot</a>
				<OmniaButton buttonText="Varaa OmniaPaku"></OmniaButton>
			</ul>
		</aside>
	)
}
