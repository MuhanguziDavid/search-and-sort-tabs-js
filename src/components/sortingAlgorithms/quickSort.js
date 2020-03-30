const quickSort = dataArray => {
  if (dataArray.length <= 1) {
    return dataArray;
  } else {
    const left = [];
    const right = [];
    const sorted = [];
    const pivot = dataArray.pop();

    for (let i=0; i<dataArray.length; i++) {
      if (dataArray[i] <= pivot) {
        left.push(dataArray[i]);
      } else {
        right.push(dataArray[i]);
      }
    }

    // recursive function
    return sorted.concat(quickSort(left), pivot, quickSort(right));
  }
}

export default quickSort;
