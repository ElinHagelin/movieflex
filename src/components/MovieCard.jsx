import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { initial, hover, animate } from '../data/constants';

const MovieCard = ({ movie, moviesToShow }) => {
	const [isVisible, setIsVisible] = useState(false);
	const [isHovering, setIsHovering] = useState(false);
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	}, [inView]);

	const transition = { duration: 0.4 };

	const divVariants = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: moviesToShow.length === 1 || isHovering ? 1 : 0,
			transition: transition,
		},
	};

	const h3Variants = {
		initial: {
			backgroundSize: '0 3px',
		},
		animate: {
			backgroundSize: isHovering ? '100% 3px' : '0 3px',
			transition: transition,
		},
	};

	const liVariants = {
		initial: {
			scale: 1,
		},
		hover: {
			scale: 1.03,
			boxShadow: '0.3em 0.3em 0.6em #070c08',
			transition: transition,
		},
		animate: {
			opacity: isVisible ? 1 : 0,
			scale: isVisible ? 1 : 0.8,
		},
	};

	return (
		<motion.li
			variants={liVariants}
			initial={initial}
			whileHover={hover}
			onHoverStart={() => setIsHovering(true)}
			onHoverEnd={() => setIsHovering(false)}
			ref={ref}
			animate={animate}
		>
			<motion.h3
				variants={h3Variants}
				initial={initial}
				animate={animate}
			>
				{movie.Title}
			</motion.h3>
			<motion.div
				className='movie-info'
				variants={divVariants}
				initial={initial}
				animate={animate}
			>
				<div>
					<p>Language: {movie.Language}</p>
					{movie.Genre ? (
						<p>Genre: {movie.Genre}</p>
					) : (
						<p>Genre: Documentary</p>
					)}
				</div>
				<div>
					<p>Runtime: {movie.Runtime}</p>
					<p>Premiere: {movie.Premiere}</p>
				</div>
			</motion.div>
		</motion.li>
	);
};

export default MovieCard;
