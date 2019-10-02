import highlightSearchResult from '../searchAlgorithms/highlightSearchResult';

const binarySearch = (dataArray, searchTerm, dataSet) => {
  let min = 0;
  let max = dataArray.length - 1;
  let mid = Math.floor((min + max) / 2)
  console.log('term', mid)

  while (dataArray[mid] !== searchTerm && min < max) {
    if (searchTerm < dataArray[mid]) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
    mid = Math.floor((min + max) / 2);
  }

  if (dataArray[mid] === searchTerm) {
    // function to highlight text being searched
    const resultDataSet = highlightSearchResult(dataSet, searchTerm);

    const result = {
      searchPosition: `"${dataArray[mid]}" was found`,
      resultDataSet,
    }
    return result;
  } else {
    const result = {
      searchPosition: `"${searchTerm}" was not found! Ensure that the list is sorted`,
      resultDataSet: dataSet,
    }
    return result;
  }
}

export default binarySearch;
