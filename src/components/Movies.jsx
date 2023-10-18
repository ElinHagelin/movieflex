import { useEffect, useState } from "react";
import { mergedArray } from "../data/getMovies.js";
import compareFn from "../utils/compareFn.js";
import movieMatch from "../utils/searchFn.js";



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
			setMoviesToShow(moviesToShow.filter(movie => movieMatch(movie, event.target.value)))
		}
	}

    return (
        <>
            <label htmlFor="search-input">Sök film</label>
            <input 
                type="text" 
                id="search-input" 
                onChange={handleSearchChange} 
            />
            {moviesToShow 
                ? <ul>
                    {moviesToShow.map(movie => (
                        <li key={movie.Title}>
                            <h3>{movie.Title}</h3>
                        </li>
                    ))}
                </ul>
                : <p>Inga filmer än...</p>
            }
        </>
    )
}

export default Movies