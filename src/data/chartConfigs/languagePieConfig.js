import { mergedArray } from "../constants.js"
import sortLanguageArray from "../../utils/sortLanguage.js"
import { colors } from "../constants.js"

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