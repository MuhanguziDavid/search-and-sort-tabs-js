const swap = (dataArray, leftIndex, rightIndex) => {
  const temp = dataArray[rightIndex];
  dataArray[rightIndex] = dataArray[leftIndex];
  dataArray[leftIndex] = temp;
}

const bubbleSort = dataArray => {
  let dataArrayLength = dataArray.length
  do {
    for (let leftIndex=0; leftIndex<dataArray.length; leftIndex++) {
      let rightIndex = (leftIndex + 1)
      if (dataArray[rightIndex] < dataArray[leftIndex]) {
        swap (dataArray, leftIndex, rightIndex)
      }
    }
  } while (dataArrayLength--);
  return dataArray;
}

export default bubbleSort;
