const sortByGenre = (inputArray) => {
	const genreArray = [];

	inputArray.forEach((obj) => {
		const existingGenre = genreArray.find((genre) => genre.genre === obj);

		if (existingGenre) {
			existingGenre.amount++;
		} else {
			genreArray.push({ genre: obj, amount: 1 });
		}
	});

	genreArray.sort((a, b) => a.amount - b.amount);

	return genreArray;
};

export default sortByGenre;
