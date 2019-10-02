import React, { Component } from 'react';
import InputForm from './InputForm';
import OutputForm from './OutputForm';
import linearSearch from '../searchAlgorithms/linearSearch';
import binarySearch from '../searchAlgorithms/binarySearch';
import bubbleSort from '../sortingAlgorithms/bubbleSort';
import quickSort from '../sortingAlgorithms/quickSort';
import mergeSort from '../sortingAlgorithms/mergeSort';
import insertionSort from '../sortingAlgorithms/insertionSort';
import selectionSort from '../sortingAlgorithms/selectionSort';
import heapSort from '../sortingAlgorithms/heapSort';

class SearchAlgorithms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      algorithm: 'linear',
      dataSet: '',
      searchTerm: '',
      searchResult: '',
      timeTaken: '',
    };
  }

  handleAlgorithm = event => {
    const { value } = event.target;
    this.setState({ algorithm: value });
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSearchAlgorithms = () => {
    const { algorithm, dataSet, searchTerm } = this.state;
  
    let dataArray = dataSet.split(" ").map(Number);
    if (isNaN(dataArray[0])) {
      dataArray = dataSet.split(" ");
    }
    let searchTermRefined = Number(searchTerm);
    if (isNaN(searchTermRefined)) {
      searchTermRefined = searchTerm;
    }
  
    if(algorithm === 'linear') {
      this.setState({searchResult: linearSearch(dataArray, searchTermRefined)});
    }
    if(algorithm === 'binary') {
      this.setState({searchResult: binarySearch(dataArray, searchTermRefined)});
    }
  }

  handleSortingAlgorithms = () => {
    const { algorithm, dataSet } = this.state;

    let dataArray = dataSet.split(" ").map(Number);
    if (isNaN(dataArray[0])) {
      dataArray = dataSet.split(" ");
    }

    if(algorithm === 'bubble') {
      this.setState({searchResult: bubbleSort(dataArray).join(" ")});
    }
    if(algorithm === 'quick') {
      this.setState({searchResult: quickSort(dataArray).join(" ")});
    }
    if(algorithm === 'merge') {
      this.setState({searchResult: mergeSort(dataArray).join(" ")});
    }
    if(algorithm === 'insertion') {
      this.setState({searchResult: insertionSort(dataArray).join(" ")});
    }
    if(algorithm === 'selection') {
      this.setState({searchResult: selectionSort(dataArray).join(" ")});
    }
    if(algorithm === 'heap') {
      this.setState({searchResult: heapSort(dataArray).join(" ")});
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const { algorithmType } = this.props;
    const firstTimeStamp = performance.now();
    if(algorithmType === 'searching') {
      this.handleSearchAlgorithms();
    }
    if(algorithmType === 'sorting') {
      this.handleSortingAlgorithms();
    }
    const secondTimeStamp = performance.now();
    const timeTaken = `Time taken: ${secondTimeStamp - firstTimeStamp} milliseconds.`;
    this.setState({timeTaken: timeTaken});
  }

  render() {
    const { dataSet, searchTerm, searchResult, timeTaken } = this.state;
    const { algorithmType } = this.props;    

    return (
      <div className="row">
        <InputForm 
          handleAlgorithm={this.handleAlgorithm}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          dataSet={dataSet}
          searchTerm={searchTerm}
          algorithmType={algorithmType}
        />
        <OutputForm
          searchResult={searchResult}
          timeTaken={timeTaken}
        />
      </div>
    );
  }
};

export default SearchAlgorithms;
