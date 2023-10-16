
function sortLanguageArray(inputArray) {
    const uniqueValues = [...new Set(inputArray)]; // Skapa en array med unika strängar
  
    const resultArrays = uniqueValues.map(uniqueValue => {
        const matchingStrings = inputArray.filter(item => item === uniqueValue);
        return { language: uniqueValue, amount: matchingStrings.length };
    });
  
    return resultArrays;
  }

  export default sortLanguageArray