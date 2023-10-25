import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import { menuVariants, linkVariants, linkAnimationDelay } from "../styles/menu-styles.js"

const Menu = ({menuOpen, setMenuOpen}) => {
    return (
        <motion.nav 
					className="menu" 
					variants={menuVariants}
					initial='closed'
					animate='open'
					exit='closed'
					>
						<motion.div
						className="link-container" 
						variants={linkVariants}
						whileHover="hover"
						transition={{ delay: linkAnimationDelay }}>
							<NavLink to='/' onClick={() => setMenuOpen(!menuOpen)}>Statistics</NavLink>
						</motion.div>
						<motion.div 
						className="link-container" 
						variants={linkVariants}
						whileHover="hover" 
						transition={{ delay: (linkAnimationDelay * 1.5) }}>
							<NavLink 
								to='/movies' 
								onClick={() => setMenuOpen(!menuOpen)}
								>Movies</NavLink>
						</motion.div>

					</motion.nav>
    )
}

export default Menu