import { motion } from "framer-motion"

const Hamburger = ({menuOpen, setMenuOpen}) => {

    const variant = menuOpen ? "opened" : "closed";

    const top = {
        closed: {
          rotate: 0,
          translateY: 0
        },
        opened: {
          rotate: 45,
          translateY: 6.8
        }
      };
      const center = {
        closed: {
          opacity: 1
        },
        opened: {
          opacity: 0
        }
      };
      const bottom = {
        closed: {
          rotate: 0,
          translateY: 0
        },
        opened: {
          rotate: -45,
          translateY: -6.8
        }
      };

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