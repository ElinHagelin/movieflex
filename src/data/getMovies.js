import specials from './specials.json'
import documentaries from './documentaries.json'
import featureFilms from './feature-films.json'
import sortLanguageArray from '../utils/sortLanguage.js'
import { mergeArrays } from '../utils/mergeArrays.js'

const colors = ['#B2C9A6', '#9AC087', '#8EC273', '#85B373', '#7BA472', '#719571', '#678570', '#5E7670']

export const getAllLanguages = () => {
    const mergedArray = mergeArrays(specials, documentaries, featureFilms)
    mergedArray.map(movie => console.log(movie.Title))

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

