import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Menu from "./Menu.jsx"
import Hamburger from "./Hamburger.jsx"


const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false)

    return (
		<header>
			<img className='logo' src="../assets/images/cinema+digital+film+movie+multimedia+video+icon-1320186751465241961.svg" alt="logo" />

			<h1>MovieFlex</h1>

			<Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

			<AnimatePresence>
				{menuOpen && (

					<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
				)}

			</AnimatePresence>
		</header>
    )
} 

export default Header