
import specials from './movieData/specials.json'
import featureFilms from './movieData/feature-films.json'
import documentaries from './movieData/documentaries.json'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


const colors = ['#B2C9A6', '#9AC087', '#8EC273', '#85B373', '#7BA472', '#719571', '#678570', '#5E7670']


const mergedArray = [...specials, ...documentaries, ...featureFilms]


export {months, colors, mergedArray}