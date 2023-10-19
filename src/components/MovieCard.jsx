import { motion, useScroll } from "framer-motion"
import { useRef } from "react"

const MovieCard = ({movie, moviesToShow}) => {
    // const ref = useRef(null)

    // const scrollYProgress = useScroll({
    //     target: ref,
    //     offset: ['o 1', '1.33 1']
    // })
    
    const transition = { duration: 0.4 }
    const liHover = {
        scale: 1.03,
        boxShadow: '0.3em 0.3em 0.6em #8a8a8a',
        transition: transition
    }

    const divHover = {
        opacity: 1,
        display: 'block',
        transition: transition
    }

    const divInitial = {
        opacity: 0, 
        display: 'none'
    }

    const divAnimate = {
        opacity: moviesToShow.length === 1 ? 1 : 0, 
        display: 'block'
    }

    return (
        <motion.li
            whileHover={liHover}
            // ref={ref}
            // style={{
            //     scale: scrollYProgress,
            //     opacity: scrollYProgress
            // }}
            >
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
        </motion.li>
      );
}

export default MovieCard