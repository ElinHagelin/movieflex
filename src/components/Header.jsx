import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Menu from "./Menu.jsx"
import Hamburger from "./Hamburger.jsx"
import { logoVariants, headingVariants } from "../styles/header-styles.js"


const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false)

    return (
		<header>
			<motion.img 
				className='logo' 
				src="../assets/images/logo.png" alt="logo" 
				// animate={{
				// 	rotate: [0, 90, 180, 270, 360],
				// 	x: [-200, -150, -100, -50, 0],
				// 	// width: [45, 45, 45, 45, 10, 45 ]
				// }}
				// transition={{type: "spring", duration: 1.5}}
				variants={logoVariants}
				animate="animate"
			/>

			<motion.h1 
				className="heading"
				// animate={{x: [-30, 0],}}
				// transition={{type: "spring", delay: 0.35}}
				variants={headingVariants}
				animate="animate"
			>
				ovieFlex
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