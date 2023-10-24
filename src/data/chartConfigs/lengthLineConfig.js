import featureFilms from '../movieData/feature-films.json'
import specials from '../movieData/specials.json'
import documentaries from '../movieData/documentaries.json'
import sortByRuntime from '../../utils/sortByRuntime.js'
import { mapArray } from '../../utils/manipulateArrays.js'

const getMovieRuntime = () => {
    
    const featureFilmsArray = mapArray(featureFilms, 'Runtime')
    const specialsArray = mapArray(specials, 'Runtime')
    const documentariesArray = mapArray(documentaries, 'Runtime')

    const sortedFeatureFilmsArray = sortByRuntime(featureFilmsArray)
    const sortedSpecialsArray = sortByRuntime(specialsArray)
    const sortedDocumentariesArray = sortByRuntime(documentariesArray)
        
        
    const labels = sortedFeatureFilmsArray.map((_, index) => index + 1)

    return {

        labels,
        datasets: [
            {
                label: 'Feature films',
                data: sortedFeatureFilmsArray.map(obj => obj),
                pointRadius: 0,
                backgroundColor: '#B2C9A6',
                borderColor: '#B2C9A6'
            },
            {
                label: 'Specials',
                data: sortedSpecialsArray.map(obj => obj),
                pointRadius: 0,
                backgroundColor: '#85B373',
                borderColor: '#85B373'
            },
            {
                label: 'Documentaries',
                data: sortedDocumentariesArray.map(obj => obj),
                backgroundColor: '#5E7670',
                pointRadius: 0,
                borderColor: '#5E7670'
            }
        ]
    }
}

export default getMovieRuntime