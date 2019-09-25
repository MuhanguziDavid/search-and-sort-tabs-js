import React from 'react';
import './WorkBox.scss';

const SearchInputForm = ({ searchResult }) => {
  return (
    <div className="col-md-5 workbox-container">
      <h4 className="mt-3">Output</h4>
      <p>
        {searchResult}
      </p>
    </div>
  )
}

export default SearchInputForm;