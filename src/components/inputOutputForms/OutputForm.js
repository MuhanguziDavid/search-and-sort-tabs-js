import React from 'react';
import './InputOutputForms.scss';

const OutputForm = ({ searchResult, timeTaken }) => {
  return (
    <div className="col-md-5 workbox-container">
      <h4 className="mt-3">Output</h4>
      <div className="result-box" dangerouslySetInnerHTML={{ __html: searchResult.resultDataSet }} />
      <div className="mb-3">
        {searchResult.searchPosition} <br />
        {timeTaken}
      </div>
    </div>
  )
}

export default OutputForm;