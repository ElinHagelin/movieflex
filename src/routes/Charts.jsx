import React, { useState } from 'react';
import GenreBar from '../components/charts/GenreBar.jsx';
import LanguagePie from '../components/charts/LanguagePie.jsx';
import LengthLine from '../components/charts/LengthLine.jsx';
import MonthBar from '../components/charts/MonthBar.jsx';
import Arrows from '../components/Arrows.jsx';
import Dots from '../components/Dots.jsx';
import Slides from '../components/Slides.jsx';

const components = [LanguagePie, MonthBar, LengthLine, GenreBar];

const Charts = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState('left');

	const handleNext = () => {
		setDirection('right');
		setCurrentIndex((prevIndex) =>
			prevIndex + 1 === components.length ? 0 : prevIndex + 1
		);
	};
	const handlePrevious = () => {
		setDirection('left');
		setCurrentIndex((prevIndex) =>
			prevIndex - 1 < 0 ? components.length - 1 : prevIndex - 1
		);
	};
	const handleDotClick = (index) => {
		setDirection(index > currentIndex ? 'right' : 'left');
		setCurrentIndex(index);
	};

	return (
		<div className='carousel'>
			<Slides
				currentIndex={currentIndex}
				setCurrentIndex={setCurrentIndex}
				direction={direction}
				setDirection={setDirection}
				components={components}
			/>

			<Arrows handlePrevious={handlePrevious} handleNext={handleNext} />

			<Dots
				components={components}
				currentIndex={currentIndex}
				handleDotClick={handleDotClick}
			/>
		</div>
	);
};

export default Charts;
