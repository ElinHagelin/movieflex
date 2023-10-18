import compareFn from "./compareFn";

function sortLanguageArray(inputArray) {
    const uniqueValues = [...new Set(inputArray)];
  
    const resultArray = uniqueValues.map(uniqueValue => {
        const matchingStrings = inputArray.filter(item => item === uniqueValue);
        return { language: uniqueValue, amount: matchingStrings.length };
    });

    resultArray.sort((a, b) => a.amount - b.amount).reverse()
  
    return resultArray;
  }

  export default sortLanguageArray