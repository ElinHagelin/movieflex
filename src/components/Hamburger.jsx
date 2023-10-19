import { motion } from "framer-motion"
import { top, center, bottom } from "../styles/hamburger-styles"

const Hamburger = ({menuOpen, setMenuOpen}) => {

  const variant = menuOpen ? "opened" : "closed";

    return (
        <motion.button 
				className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>

				<motion.div variants={top} animate={variant}></motion.div>
				<motion.div variants={center} animate={variant}></motion.div>
				<motion.div variants={bottom} animate={variant}></motion.div>

			</motion.button>
    )
}

export default Hamburger