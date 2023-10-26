import { months } from '../data/constants.js';

function sortMoviesByDate(inputArray) {
	const monthArray = [];

	months.map((month) => monthArray.push({ month: month, amount: 0 }));

	inputArray.forEach((dateString) => {
		const splitDate = dateString.split(' ');
		const month = splitDate[0];

		const existingMonth = monthArray.find(
			(object) => object.month == month
		);
		existingMonth.amount++;
	});

	return monthArray;
}

export default sortMoviesByDate;
