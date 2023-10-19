import featureFilms from '../movieData/feature-films.json'
import specials from '../movieData/specials.json'
import documentaries from '../movieData/documentaries.json'
import sortByGenre from '../../utils/sortByGenre.js'
import { colors } from '../constants.js'

export const getMovieGenre = () => {
    const featureFilmsArray = featureFilms.map(movie => movie.Genre)
    const specialsArray = specials.map(movie => movie.Genre)

    const combinedGenreArray = [...featureFilmsArray, ...specialsArray]

    const sortedGenreArray = sortByGenre(combinedGenreArray)
    sortedGenreArray.push({genre: 'Documentary', amount: (documentaries.length + 1)})
    sortedGenreArray.reverse()


    return {
        labels: sortedGenreArray.map(obj => obj.genre),
        datasets: [
            {
                label: 'Movie genres',
                data: sortedGenreArray.map(obj => obj.amount),
                backgroundColor: colors
            }
        ]
    }
}