import { useEffect, useRef, useState } from "react";
import { mergedArray } from "../data/constants.js";
import movieMatch from "../utils/searchFn.js";
import MovieCard from "../components/MovieCard.jsx";
import { useScroll, motion } from "framer-motion";



const Movies = () => {
    const [movies, setMovies] = useState(null)
    const [moviesToShow, setMoviesToShow] = useState(null)
    

    useEffect(() => {
        const sortedArray = [...mergedArray]
        sortedArray.sort((a, b) => a.Title.localeCompare(b.Title))
        setMovies(sortedArray)
        setMoviesToShow(sortedArray)
    }, [])

    const handleSearchChange = event => {
		if (!event.target.value) {
			setMoviesToShow(movies)
		} else {
			setMoviesToShow(movies.filter(movie => movieMatch(movie, event.target.value)))
		}
	}

    return (
        <div>
            <label htmlFor="search-input">Sök film</label>
            <input 
                type="text" 
                id="search-input" 
                onChange={(event) => handleSearchChange(event)} 
            />
            {moviesToShow 
                ? <ul>
                    {moviesToShow.map(movie => (
                        <MovieCard movie={movie} moviesToShow={moviesToShow} key={movie.Title} />  
                    ))}
                </ul>
                : <p>Inga filmer än...</p>
            }
        </div>
    )
}

export default Movies