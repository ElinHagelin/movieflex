import featureFilms from '../movieData/feature-films.json'
import specials from '../movieData/specials.json'
import documentaries from '../movieData/documentaries.json'
import { sortMoviesByDate } from '../../utils/sortMoviesByDate.js'

export const getMoviesPerMonth = () => {
   
    const featureFilmsArray = featureFilms.map(movie => movie.Premiere)
    const specialsArray = specials.map(movie => movie.Premiere)
    const documentariesArray = documentaries.map(movie => movie.Premiere)

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