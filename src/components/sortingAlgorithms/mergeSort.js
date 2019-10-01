const mergeSort = dataArray => {
  if (dataArray.length === 1) {
    return dataArray;
  } else {
    const middleIndex = Math.floor(dataArray.length / 2);
    let leftArray = dataArray.slice(0, middleIndex);
    let rightArray = dataArray.slice(middleIndex);

    leftArray = mergeSort(leftArray);
    rightArray = mergeSort(rightArray);

    return merge(leftArray, rightArray);
  }
}

const merge = (leftArray, rightArray) => {
  let sorted = [];
  while (leftArray.length > 0 && rightArray.length > 0) {
    const leftItem = leftArray[0];
    const rightItem = rightArray[0];
    if (leftItem > rightItem) {
      sorted.push(rightItem);
      //shift() Remove an item from the beginning of an array
      rightArray.shift();
    } else {
      sorted.push(leftItem);
      leftArray.shift();
    }
  }
  while (leftArray.length !== 0) {
    sorted.push(leftArray[0]);
    leftArray.shift();
  }
  while (rightArray.length !== 0) {
    sorted.push(rightArray[0]);
    rightArray.shift();
  }

  return sorted;
}

export default mergeSort;
