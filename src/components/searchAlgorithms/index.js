import React, { Component } from 'react';
import './WorkBox.scss';
import SearchInputForm from './searchInputForm';
import SearchOutputForm from './searchOutputForm';

class SearchAlgorithms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      algorithm: 'linear',
      dataSet: '',
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

  render() {
    const { dataSet } = this.state;
    return (
      <React.Fragment>
        <SearchInputForm 
          handleAlgorithm={this.handleAlgorithm}
          handleChange={this.handleChange}
          dataSet={dataSet}
        />
        <SearchOutputForm />
      </React.Fragment>
    );
  }
};

export default SearchAlgorithms;
