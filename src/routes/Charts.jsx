import React, { useState } from "react"
import GenreBar from "../components/charts/GenreBar.jsx"
import LanguagePie from "../components/charts/LanguagePie.jsx"
import LengthLine from "../components/charts/LengthLine.jsx"
import MonthBar from "../components/charts/MonthBar.jsx"

const components = [LanguagePie, MonthBar, LengthLine, GenreBar]



const Charts = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === components.length ? 0 : prevIndex + 1
      );
    };
    const handlePrevious = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? components.length - 1 : prevIndex - 1
      );
    };
    const handleDotClick = (index) => {
      setCurrentIndex(index);
    };


    return (
        <div className="carousel">
            {React.createElement(components[currentIndex])}
            <div className="slide_direction">
                <div className="left" onClick={handlePrevious}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 96 960 960"
                        width="20"
                    >
                        <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
                    </svg>
                </div>
                <div className="right" onClick={handleNext}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 96 960 960"
                        width="20"
                    >
                        <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
                    </svg>
                </div>
            </div>
            <div className="indicator">
                {components.map((_, index) => (
                <div
                    key={index}
                    className={`dot ${currentIndex === index ? "active" : ""}`}
                    onClick={() => handleDotClick(index)}
                ></div>
                ))}
            </div>
        </div>




        // <>
        // <LanguagePie />
        // <MonthBar />
        // <LengthLine />
        // <GenreBar />
        // </>
    )
}

export default Charts