

const sortByRuntime = (inputArray) => {
    function compareRuntime(a, b) {
        if (a < b) {
          return -1;
        } else if (a > b) {
          return 1;
        }
        return 0;
      }

      
      function convertTimeToMinutes(timeString) {
          const timeSplit = timeString.split(' ')
          
          let totalminutes = 0
          
          if (timeSplit.length > 2) {
              totalminutes = (Number(timeSplit[0]) * 60) + Number(timeSplit[2])
            } else {
                totalminutes = Number(timeSplit[0])
            }
            return totalminutes
        }
        
        const moviesInMinutes = inputArray.map(convertTimeToMinutes);
        // const documentariesInMinutes = documentariesArray.map(convertTimeToMinutes);
        // const featuresInMinutes = featureFilmsArray.map(convertTimeToMinutes);
        
        // const sortedFeatureFilmsArray = featuresInMinutes.sort(compareRuntime)
        // const sortedSpecialsArray = specialsInMinutes.sort(compareRuntime)
        const sortedArray = moviesInMinutes.sort(compareRuntime)
        return sortedArray
}

export default sortByRuntime