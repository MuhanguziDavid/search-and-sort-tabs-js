const highlightSearchResult = (dataSet, searchTerm) => {
  const replace = searchTerm;
  const re = new RegExp(replace,'g');
  const resultDataSet = dataSet.replace(re, `<mark>${searchTerm}</mark>`);

  return resultDataSet;
}

export default highlightSearchResult;
