import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Menu from "./Menu.jsx"
import Hamburger from "./Hamburger.jsx"


const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false)

    return (
		<header>
			<motion.img 
				className='logo' 
				src="../assets/images/cinema+digital+film+movie+multimedia+video+icon-1320186751465241961.svg" alt="logo" 
				animate={{
					rotate: [0, 90, 180, 270, 360],
					x: [-200, -150, -100, -50, 0],
				}}
				transition={{type: "spring", duration: 1}}
			/>

			<motion.h1 
				animate={{x: [-20, 0],}}
				transition={{type: "spring", delay: 0.35}}
			>
				MovieFlex
			</motion.h1>

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