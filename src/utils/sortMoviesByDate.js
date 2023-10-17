

function sortMoviesByDate(inputArray) {

    const monthArray = []

    inputArray.forEach(dateString => {
        const date = new Date(dateString)
        const month = date.toLocaleString('default', { month: 'long'})

            const existingMonth = monthArray.find(object => object.month === month);
            
            if (existingMonth) {
                existingMonth.amount++
            } else {
                monthArray.push({ month: month, amount: 1 })
            }
    });

    return monthArray
}


export {sortMoviesByDate}