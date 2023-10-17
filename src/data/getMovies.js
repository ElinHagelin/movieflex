import specials from './specials.json'
import documentaries from './documentaries.json'
import featureFilms from './feature-films.json'
import sortLanguageArray from '../utils/sortLanguage.js'
import { mergeArrays } from '../utils/mergeArrays.js'
import { sortMoviesByDate } from '../utils/sortMoviesByDate.js'
import sortByRuntime from '../utils/sortByRuntime.js'
import sortByGenre from '../utils/sortByGenre'



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

export const getMovieRuntime = () => {
    const featureFilmsArray = featureFilms.map(movie => movie.Runtime)
    const specialsArray = specials.map(movie => movie.Runtime)
    const documentariesArray = documentaries.map(movie => movie.Runtime)

    const sortedFeatureFilmsArray = sortByRuntime(featureFilmsArray)
    const sortedSpecialsArray = sortByRuntime(specialsArray)
    const sortedDocumentariesArray = sortByRuntime(documentariesArray)
        
        
    const labels = sortedFeatureFilmsArray.map((_, index) => index + 1)

    return {
        labels,
        datasets: [
            {
                label: 'Feature films runtime',
                data: sortedFeatureFilmsArray.map(obj => obj),
                backgroundColor: '#B2C9A6'
            },
            {
                label: 'Specials per month',
                data: sortedSpecialsArray.map(obj => obj),
                backgroundColor: '#85B373'
            },
            {
                label: 'Documentaries per month',
                data: sortedDocumentariesArray.map(obj => obj),
                backgroundColor: '#5E7670'
            }
        ]
    }
    // Göra om: antalet filmer på y-axeln och tid på x-axeln?
}

export const getMovieGenre = () => {
    const featureFilmsArray = featureFilms.map(movie => movie.Genre)
    const specialsArray = specials.map(movie => movie.Genre)

    const combinedGenreArray = [...featureFilmsArray, ...specialsArray]

    const sortedCombinedGenreArray = sortByGenre(combinedGenreArray)
    sortedCombinedGenreArray.push({genre: 'Documentary', amount: (documentaries.length + 1)})
    
    return {
        labels: sortedCombinedGenreArray.map(obj => obj.genre),
        datasets: [
            {
                label: 'Movie genres',
                data: sortedCombinedGenreArray.map(obj => obj.amount),
                backgroundColor: colors
            }
        ]
    }
}

