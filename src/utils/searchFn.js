function stringIncludes(longString, shortString) {
	let ls = longString.toLowerCase();
	let ss = shortString.toLowerCase();
	return ls.includes(ss);
}

function movieMatch(movie, searchString) {
	if (stringIncludes(movie.Title, searchString)) {
		return true;
	} else {
		return false;
	}
}

export default movieMatch;
