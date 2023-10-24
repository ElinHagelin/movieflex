import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { slideVariants } from "../styles/carousel-styles.js"

const Slides = ({currentIndex, direction, components}) => {
    return (
        <div className="carousel-inner">
        <AnimatePresence>
                <motion.div
                    className="chart-container"
                    key={currentIndex}
                    variants={slideVariants}
                    initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                    animate="visible"
                    exit="exit">
                {React.createElement(components[currentIndex])}

                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default Slides