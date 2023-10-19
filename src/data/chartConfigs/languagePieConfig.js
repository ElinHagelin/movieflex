import { mergedArray } from "../constants.js"
import sortLanguageArray from "../../utils/sortLanguage.js"
import { colors } from "../constants.js"
import { mapArray } from "../../utils/manipulateArrays.js"

const getAllLanguages = () => {

    const languageArray = mapArray(mergedArray, 'Language')
    const sortedLanguageArray = sortLanguageArray(languageArray)
    return {
        labels: sortedLanguageArray.map(movie => movie.language),
        datasets: [{
            label: 'Movie Languages',
            data: sortedLanguageArray.map(movie => movie.amount),
            backgroundColor: colors
        }]}
} 

export default getAllLanguages