const insertionSort = dataArray => {
  for (let i = 1; i < dataArray.length; i++) {
    let currentElement = dataArray[i];
    let j = i;

    while (j > 0 && dataArray[j - 1] > currentElement) {
      dataArray[j] = dataArray[j - 1];
      j--;
    }

    dataArray[j] = currentElement;
  }
  return dataArray;
}

export default insertionSort;
