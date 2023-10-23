import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { liInitial, liHover, divInitial, divHover } from "../styles/movie-card-styles.js"

const MovieCard = ({movie, moviesToShow}) => {
    const ref = useRef(null)

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['0 1', '1.25 1']
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    

    const divAnimate = {
        opacity: moviesToShow.length === 1 ? 1 : 0, 
        display: 'block'
    }


    return (
        <motion.li
            whileHover={liHover}
            initial={liInitial}
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: scrollYProgress
            }}
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