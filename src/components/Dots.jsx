import { motion } from "framer-motion"
import { dotsVariants } from "../styles/carousel-styles.js"

const Dots = ({components, currentIndex, handleDotClick}) => {

    return (
        <div className="indicator">
        {components.map((_, index) => (
        <motion.div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
            initial="initial"
            animate={currentIndex === index ? "animate" : ""}
            variants={dotsVariants}
            whileHover="hover"
        ></motion.div>
        ))}
    </div>
    )
}

export default Dots