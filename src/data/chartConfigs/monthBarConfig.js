import featureFilms from '../movieData/feature-films.json'
import specials from '../movieData/specials.json'
import documentaries from '../movieData/documentaries.json'
import sortMoviesByDate from '../../utils/sortMoviesByDate.js'
import { mapArray } from '../../utils/manipulateArrays.js'

const getMoviesPerMonth = () => {
   
    const featureFilmsArray = mapArray(featureFilms, 'Premiere')
    const specialsArray = mapArray(specials, 'Premiere')
    const documentariesArray = mapArray(documentaries, 'Premiere')

    const sortedFeatureFilmsArray = sortMoviesByDate(featureFilmsArray)
    const sortedSpecialsArray = sortMoviesByDate(specialsArray)
    const sortedDocumentariesArray = sortMoviesByDate(documentariesArray)

    
    return {
        labels: sortedFeatureFilmsArray.map(obj => obj.month),
        datasets: [
            {
                label: 'Feature films',
                data: sortedFeatureFilmsArray.map(obj => obj.amount),
                backgroundColor: '#B2C9A6'
            },
            {
                label: 'Specials',
                data: sortedSpecialsArray.map(obj => obj.amount),
                backgroundColor: '#85B373'
            },
            {
                label: 'Documentaries',
                data: sortedDocumentariesArray.map(obj => obj.amount),
                backgroundColor: '#5E7670'
            }
        ]
    }
}

export default getMoviesPerMonth