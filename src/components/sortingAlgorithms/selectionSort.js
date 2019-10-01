let selectionSort = dataArray => {
  for (let i = 0; i < dataArray.length; i++) {
    let min = i;
    // selection
    for (let j = i + 1; j < dataArray.length; j++) {
      if (dataArray[min] > dataArray[j]) {
        min = j;
      }
    }
    // swapping
    if (min !== i) {
      let tmp = dataArray[i];
      dataArray[i] = dataArray[min];
      dataArray[min] = tmp;
    }
  }
  return dataArray;
};

export default selectionSort;
