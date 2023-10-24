import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useInView } from 'react-intersection-observer';
import { liInitial, liHover, divInitial, divHover } from "../styles/movie-card-styles.js"

const MovieCard = ({movie, moviesToShow}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [ref, inView] = useInView();

      useEffect(() => {
        if (inView) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }, [inView]);
    
    const liAnimate = {
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0.8, 

    }

    const divAnimate = {
        opacity: moviesToShow.length === 1 ? 1 : 0, 
        display: 'block'
    }


    return (
        <motion.li
            whileHover={liHover}
            initial={liInitial}
            ref={ref}
            animate={liAnimate}
            >
            <div>
        		<h3>{movie.Title}</h3>
				<motion.div
					whileHover={divHover}
					initial={divInitial}
					animate={divAnimate}
				>
					<p>{movie.Runtime}</p>
					<p>{movie.Language}</p>
					<p>{movie.Premiere}</p>
					{movie.Genre ? <p>{movie.Genre}</p> : <p>Documentary</p>}
				</motion.div>

            </div>
        </motion.li>
    );
}

export default MovieCard