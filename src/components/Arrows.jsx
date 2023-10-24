import { motion } from "framer-motion"
import { slidersVariants } from "../styles/carousel-styles.js"

const Arrows = ({handlePrevious, handleNext}) => {

    return (
        <div className="slide_direction">
        <motion.div 
            className="left" 
            onClick={handlePrevious}
            variants={slidersVariants}
            whileHover="hover"
            whileTap="tap"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 96 960 960"
                width="20"
            >
                <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
            </svg>
        </motion.div>
        <motion.div 
            className="right" 
            onClick={handleNext}
            variants={slidersVariants}
            whileHover="hover"
            whileTap="tap"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 96 960 960"
                width="20"
            >
                <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
            </svg>
        </motion.div>
    </div>
    )
}

export default Arrows