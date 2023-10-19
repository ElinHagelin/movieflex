import featureFilms from '../movieData/feature-films.json'
import specials from '../movieData/specials.json'
import documentaries from '../movieData/documentaries.json'
import sortByGenre from '../../utils/sortByGenre.js'
import { colors } from '../constants.js'
import { mapArray } from '../../utils/manipulateArrays.js'

const getMovieGenre = () => {
    const featureFilmsArray = mapArray(featureFilms, 'Genre')
    const specialsArray = mapArray(specials, 'Genre')

    const genreArray = [...featureFilmsArray, ...specialsArray]

    const sortedGenreArray = sortByGenre(genreArray)
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

export default getMovieGenre