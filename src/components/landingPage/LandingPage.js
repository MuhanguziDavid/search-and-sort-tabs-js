import React from 'react';
import Container from 'react-bootstrap/Container';
import './LandingPage.scss';
import SearchAlgorithms from '../searchAlgorithms';

const LandingPage = () => {
  return (
    <Container>
      <React.Fragment>
        <div className="row  header-container">
          <div className="col-md-12 jumbotron jumbotron-custom">
            <h1>Data Structures and Algorithms</h1>
            <p>
              Enter a dataset and see the magic! <br/>
              (separate terms with a space) <br />
              <a href="https://numbergenerator.org/" rel="noopener noreferrer" target="_blank">Random Number Generator</a>
            </p>
          </div>
        </div>
        <div className="row body-container">
          <SearchAlgorithms />
        </div>
      </React.Fragment>
    </Container>
  );
}

export default LandingPage;
