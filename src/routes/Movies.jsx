import { useEffect, useRef, useState } from "react";
import { mergedArray } from "../utils/manipulateArrays.js"
import movieMatch from "../utils/searchFn.js";
import MovieCard from "../components/MovieCard.jsx";


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
        <main className="movies-container">
            <div className="search-container">
                <input 
                    type="text" 
                    id="search-input"
                    placeholder="Search movie title" 
                    onChange={(event) => handleSearchChange(event)} 
                />
            </div>
            {moviesToShow 
                ? <ul>
                    {moviesToShow.map(movie => (
                        <MovieCard movie={movie} moviesToShow={moviesToShow} key={movie.Title} />  
                    ))}
                </ul>
                : <p>Inga filmer än...</p>
            }
        </main>
    )
}

export default Movies