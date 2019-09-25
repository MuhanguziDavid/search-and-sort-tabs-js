import React, { Component } from 'react';
import './WorkBox.scss';
import SearchInputForm from './searchInputForm';
import SearchOutputForm from './searchOutputForm';
import linearSearch from './linearSearch';
import binarySearch from './binarySearch';

class SearchAlgorithms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      algorithm: 'linear',
      dataSet: '',
      searchTerm: '',
      searchResult: '',
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

  handleSubmit = event => {
    event.preventDefault();
    const { algorithm, dataSet, searchTerm } = this.state;
    if(algorithm === 'linear') {
      this.setState({searchResult: linearSearch(dataSet, searchTerm)});
    }
    if(algorithm === 'binary') {
      this.setState({searchResult: binarySearch(dataSet, searchTerm)});
    }
  }

  render() {
    const { dataSet, searchTerm, searchResult } = this.state;
    return (
      <React.Fragment>
        <SearchInputForm 
          handleAlgorithm={this.handleAlgorithm}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          dataSet={dataSet}
          searchTerm={searchTerm}
        />
        <SearchOutputForm searchResult={searchResult} />
      </React.Fragment>
    );
  }
};

export default SearchAlgorithms;
