import featureFilms from '../movieData/feature-films.json';
import specials from '../movieData/specials.json';
import documentaries from '../movieData/documentaries.json';
import sortMoviesByDate from '../../utils/sortMoviesByDate.js';
import { mapArray } from '../../utils/manipulateArrays.js';
import { colors } from '../constants.js';

const getMoviesPerMonth = () => {
	const featureFilmsArray = mapArray(featureFilms, 'Premiere');
	const specialsArray = mapArray(specials, 'Premiere');
	const documentariesArray = mapArray(documentaries, 'Premiere');

	const sortedFeatureFilmsArray = sortMoviesByDate(featureFilmsArray);
	const sortedSpecialsArray = sortMoviesByDate(specialsArray);
	const sortedDocumentariesArray = sortMoviesByDate(documentariesArray);

	return {
		labels: sortedFeatureFilmsArray.map((obj) => obj.month),
		datasets: [
			{
				label: 'Feature films',
				data: sortedFeatureFilmsArray.map((obj) => obj.amount),
				backgroundColor: colors[5],
			},
			{
				label: 'Specials',
				data: sortedSpecialsArray.map((obj) => obj.amount),
				backgroundColor: colors[10],
			},
			{
				label: 'Documentaries',
				data: sortedDocumentariesArray.map((obj) => obj.amount),
				backgroundColor: colors[15],
			},
		],
	};
};

export default getMoviesPerMonth;
