import featureFilms from '../movieData/feature-films.json';
import specials from '../movieData/specials.json';
import documentaries from '../movieData/documentaries.json';
import sortByRuntime from '../../utils/sortByRuntime.js';
import { mapArray } from '../../utils/manipulateArrays.js';
import { colors } from '../constants';

const getMovieRuntime = () => {
	const featureFilmsArray = mapArray(featureFilms, 'Runtime');
	const specialsArray = mapArray(specials, 'Runtime');
	const documentariesArray = mapArray(documentaries, 'Runtime');

	const sortedFeatureFilmsArray = sortByRuntime(featureFilmsArray);
	const sortedSpecialsArray = sortByRuntime(specialsArray);
	const sortedDocumentariesArray = sortByRuntime(documentariesArray);

	const labels = sortedFeatureFilmsArray.map((_, index) => index + 1);

	return {
		labels,
		datasets: [
			{
				label: 'Feature films',
				data: sortedFeatureFilmsArray.map((obj) => obj),
				pointRadius: 0,
				backgroundColor: colors[5],
				borderColor: colors[5],
			},
			{
				label: 'Specials',
				data: sortedSpecialsArray.map((obj) => obj),
				pointRadius: 0,
				backgroundColor: colors[10],
				borderColor: colors[10],
			},
			{
				label: 'Documentaries',
				data: sortedDocumentariesArray.map((obj) => obj),
				pointRadius: 0,
				backgroundColor: colors[15],
				borderColor: colors[15],
			},
		],
	};
};

export default getMovieRuntime;
