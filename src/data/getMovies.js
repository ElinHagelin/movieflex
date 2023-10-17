import specials from './specials.json'
import documentaries from './documentaries.json'
import featureFilms from './feature-films.json'
import sortLanguageArray from '../utils/sortLanguage.js'
import { mergeArrays } from '../utils/mergeArrays.js'
import { sortMoviesByDate } from '../utils/sortMoviesByDate.js'



const colors = ['#B2C9A6', '#9AC087', '#8EC273', '#85B373', '#7BA472', '#719571', '#678570', '#5E7670']
const mergedArray = mergeArrays(specials, documentaries, featureFilms)

export const getAllLanguages = () => {

    const languageArray = mergedArray.map(film => film.Language)
    const sortedLanguageArray = sortLanguageArray(languageArray)
    return {
        labels: sortedLanguageArray.map(movie => movie.language),
        datasets: [{
            label: 'Movie Languages',
            data: sortedLanguageArray.map(movie => movie.amount),
            backgroundColor: colors
        }]}
} 

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
                label: 'Feature films per month',
                data: sortedFeatureFilmsArray.map(obj => obj.amount),
                backgroundColor: '#B2C9A6'
            },
            {
                label: 'Specials per month',
                data: sortedSpecialsArray.map(obj => obj.amount),
                backgroundColor: '#85B373'
            },
            {
                label: 'Documentaries per month',
                data: sortedDocumentariesArray.map(obj => obj.amount),
                backgroundColor: '#5E7670'
            }
        ]
    }
}

export const getMovieLength = () => {

}

