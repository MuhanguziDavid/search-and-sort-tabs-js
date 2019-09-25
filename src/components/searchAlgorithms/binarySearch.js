const binarySearch = (dataSet, searchTerm) => {
  const dataArray = dataSet.split(" ");

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
    return `${dataArray[mid]} was found`;
  } else {
    return `${searchTerm} was not found! Ensure that the list is sorted`;
  }
}

export default binarySearch;
