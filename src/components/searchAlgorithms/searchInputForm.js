import React from 'react';
import './WorkBox.scss';

const SearchInputForm = ({ handleAlgorithm, handleChange, dataSet }) => {
  return (
    <div className="col-md-5 workbox-container">
      <h4 className="mt-3">Search Algorithms</h4>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
        </div>
        <select className="custom-select" id="inputGroupSelect01" onChange={handleAlgorithm}>
          <option defaultValue value="linear">Linear</option>
          <option value="binary">Binary</option>
        </select>
      </div>
      <div className="input-group mb-3">
        <input type="text" name="dataSet" className="form-control" id="dataSet" placeholder="dataset" value={dataSet} onChange={handleChange} />
      </div>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="search term" aria-label="Search term" aria-describedby="searchInput" />
        <div className="input-group-append">
          <button className="btn btn-outline-primary" type="button">Search</button>
        </div>
      </div>
    </div>
  )
}

export default SearchInputForm;