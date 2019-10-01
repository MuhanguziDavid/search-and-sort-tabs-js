const heapify = (dataArray, length, i) => {
  let largest = i;
  let left = i * 2 + 1;
  let right = left + 1;

  if (left < length && dataArray[left] > dataArray[largest]) {
    largest = left;
  }
  if (right < length && dataArray[right] > dataArray[largest]) {
    largest = right;
  }
  if (largest !== i) {
    [dataArray[i], dataArray[largest]] = [dataArray[largest], dataArray[i]];
    heapify(dataArray, length, largest);
  }

  return dataArray;
}

const heapSort = dataArray => {
  let length = dataArray.length;
  let i = Math.floor(length / 2 - 1);
  let k = length - 1;

  while (i >= 0) {
    heapify(dataArray, length, i);
    i--;
  }

  while (k >= 0) {
    [dataArray[0], dataArray[k]] = [dataArray[k], dataArray[0]];
    heapify(dataArray, k, 0);
    k--;
  }
  return dataArray;
}

export default heapSort;
