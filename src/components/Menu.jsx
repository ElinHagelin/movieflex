import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import { menuVariants, linkVariants, transition, linkAnimationDelay } from "../styles/menu.js"

const Menu = ({menuOpen, setMenuOpen}) => {
    return (
        <motion.nav 
					className="menu" 
					variants={menuVariants}
					initial='closed'
					animate='open'
					exit='closed'
					>
						<motion.div variants={linkVariants} transition={{ delay: linkAnimationDelay }}>
							<NavLink to='/' onClick={() => setMenuOpen(!menuOpen)}>Se statistik</NavLink>
						</motion.div>
						<motion.div variants={linkVariants} transition={{ delay: (linkAnimationDelay * 1.5) }}>
							<NavLink to='/movies' onClick={() => setMenuOpen(!menuOpen)}>Se vårt utbud</NavLink>
						</motion.div>

					</motion.nav>
    )
}

export default Menu