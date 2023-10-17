
function sortLanguageArray(inputArray) {
    const uniqueValues = [...new Set(inputArray)];
  
    const resultArrays = uniqueValues.map(uniqueValue => {
        const matchingStrings = inputArray.filter(item => item === uniqueValue);
        return { language: uniqueValue, amount: matchingStrings.length };
    });
  
    return resultArrays;
  }

  export default sortLanguageArray