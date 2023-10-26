import compareFn from './compareFn.js';

const sortByRuntime = (inputArray) => {
	function convertTimeToMinutes(timeString) {
		const timeSplit = timeString.split(' ');

		let totalminutes = 0;

		if (timeSplit.length > 2) {
			totalminutes = Number(timeSplit[0]) * 60 + Number(timeSplit[2]);
		} else {
			totalminutes = Number(timeSplit[0]);
		}
		return totalminutes;
	}

	const moviesInMinutes = inputArray.map(convertTimeToMinutes);
	const sortedArray = moviesInMinutes.sort(compareFn);
	return sortedArray;
};

export default sortByRuntime;
