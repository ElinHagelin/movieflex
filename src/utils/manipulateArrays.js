import specials from '../data/movieData/specials.json';
import featureFilms from '../data/movieData/feature-films.json';
import documentaries from '../data/movieData/documentaries.json';

const mapArray = (array, prop) => {
	return array.map((movie) => movie[prop]);
};

const mergedArray = [...specials, ...documentaries, ...featureFilms];

export { mapArray, mergedArray };
