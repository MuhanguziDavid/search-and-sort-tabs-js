import highlightSearchResult from '../searchAlgorithms/highlightSearchResult';

const linearSearch = (dataArray, searchTerm, dataSet) => {
  for(let i = 0; i < dataArray.length; i++) {
    if(dataArray[i] === searchTerm) {
      // function to highlight text being searched
      const resultDataSet = highlightSearchResult(dataSet, searchTerm);

      const result = {
        searchPosition: `"${searchTerm}" was found`,
        resultDataSet,
      }
      return result;
    }
  }
  const result = {
    searchPosition: `"${searchTerm}" was not found`,
    resultDataSet: dataSet,
  }
  return result;
}

export default linearSearch;
