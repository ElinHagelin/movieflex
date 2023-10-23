import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import GenreBar from "../components/charts/GenreBar.jsx"
import LanguagePie from "../components/charts/LanguagePie.jsx"
import LengthLine from "../components/charts/LengthLine.jsx"
import MonthBar from "../components/charts/MonthBar.jsx"

const components = [LanguagePie, MonthBar, LengthLine, GenreBar]


const slideVariants = {
    hiddenRight: {
        x: "100%",
        opacity: 0,
    },
    hiddenLeft: {
        x: "-100%",
        opacity: 0,
    },
    visible: {
        x: "0",
        opacity: 1,
        transition: {
            duration: 1,
            delay: 0.3
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.3,
        }
    },
};


const Charts = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('left');
  
    const handleNext = () => {
        setDirection("right");
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 === components.length ? 0 : prevIndex + 1
        );
    };
    const handlePrevious = () => {
        setDirection("left");
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? components.length - 1 : prevIndex - 1
        );
    };
    const handleDotClick = (index) => {
        setDirection(index > currentIndex ? "right" : "left");
        setCurrentIndex(index);
    };


    const arrowHover = {
        scale: 1.2,
    }

    const arrowTap = {
        scale: 0.9
    }

    const dotHover = {
        scale: 1.3,
    }


    return (
        <div className="carousel">
            <AnimatePresence>
                <motion.div
                    className="chart-container"
                    key={currentIndex}
                    variants={slideVariants}
                    initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                    animate="visible"
                    exit="exit">
                {React.createElement(components[currentIndex], slideVariants, direction)}

                </motion.div>
            </AnimatePresence>

            <div className="slide_direction">
                <motion.div 
                    className="left" 
                    onClick={handlePrevious}
                    whileHover={arrowHover}
                    whileTap={arrowTap}>
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
                    whileHover={arrowHover}
                    whileTap={arrowTap}>
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
            <div className="indicator">
                {components.map((_, index) => (
                <motion.div
                    key={index}
                    className={`dot ${currentIndex === index ? "active" : ""}`}
                    onClick={() => handleDotClick(index)}
                    whileHover={dotHover}
                ></motion.div>
                ))}
            </div>
        </div>
    )
}

export default Charts