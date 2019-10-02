import React from 'react';
import './InputOutputForms.scss';

const InputForm = ({ handleAlgorithm, handleSubmit, handleChange, dataSet, searchTerm, algorithmType }) => {
  return (
    <div className="col-md-5 workbox-container">
      <h4 className="mt-3">Input</h4>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
        </div>
        <select className="custom-select" id="inputGroupSelect01" onChange={handleAlgorithm}>
          {algorithmType === 'searching' ? (
            <React.Fragment>
              <option defaultValue value="">Select algorithm</option>
              <option value="linear">Linear</option>
              <option value="binary">Binary</option>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <option defaultValue value="">Select algorithm</option>
              <option value="bubble">bubble</option>
              <option value="quick">quick</option>
              <option value="merge">merge</option>
              <option value="insertion">insertion</option>
              <option value="selection">selection</option>
              <option value="heap">heap</option>
            </React.Fragment>
          )}
        </select>
      </div>
      <div className="input-group mb-3">
        <textarea rows="3" name="dataSet" className="form-control" id="dataSet" placeholder="dataset" value={dataSet} onChange={handleChange} />
      </div>
      <div className="input-group mb-3">
        {algorithmType === 'searching' ? (
          <input type="text" name="searchTerm" className="form-control" placeholder="search term" aria-label="Search term" aria-describedby="searchInput" value={searchTerm} onChange={handleChange} />
        ) : (
          null
        )}
        <div className="input-group-append">
          <button className="btn btn-outline-primary" id={algorithmType} type="button" onClick={handleSubmit}>
            {algorithmType === 'searching' ? (
              'Search'
            ) : (
              'Sort'
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default InputForm;