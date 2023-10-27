import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { slideVariants } from '../styles/carousel-styles.js';

const Slides = ({
	currentIndex,
	setCurrentIndex,
	direction,
	setDirection,
	components,
}) => {
	let title = '';
	if (currentIndex === 0) {
		title = 'Languages';
	} else if (currentIndex === 1) {
		title = 'Movies added in 2022';
	} else if (currentIndex === 2) {
		title = 'Runtime';
	} else {
		title = 'Genre';
	}

	const handleDragEnd = (event, info) => {
		if (info.offset.x > 100) {
			setDirection('left');
			setCurrentIndex(
				(prevIndex) =>
					(prevIndex - 1 + components.length) % components.length
			);
		} else if (info.offset.x < -100) {
			setDirection('right');
			setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
		}
	};

	return (
		<div className='carousel-inner'>
			<AnimatePresence>
				<motion.div
					className='chart-container'
					key={currentIndex}
					variants={slideVariants}
					initial={
						direction === 'right' ? 'hiddenRight' : 'hiddenLeft'
					}
					animate='visible'
					exit='exit'
					drag='x'
					dragConstraints={{ left: 0, right: 0 }}
					onDragEnd={(event, info) => handleDragEnd(event, info)}
				>
					<h2 className='chart-heading'>{title}</h2>
					{React.createElement(components[currentIndex])}
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default Slides;
