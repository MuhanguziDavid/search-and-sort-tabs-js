const linearSearch = (dataArray, searchTerm) => {
  for(let i = 0; i < dataArray.length; i++) {
    if(dataArray[i] === searchTerm) {
      return `"${searchTerm}" is in position ${i + 1} out of ${dataArray.length} items`
    }
  }
  return "Value not found"
}

export default linearSearch;
