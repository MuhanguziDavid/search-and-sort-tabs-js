import React from 'react';
import Container from 'react-bootstrap/Container';
import './LandingPage.scss';
import SearchAlgorithms from '../searchAlgorithms';

const algorithmsPayload = {
  algorithms: [
    {
      id: 1,
      name: 'Linear Search'
    },
    {
      id: 2,
      name: 'Binary Search'
    }
  ]
}

const LandingPage = () => {
  return (
    <Container>
      <React.Fragment>
        <div className="row  header-container">
          <div className="col-md-12 jumbotron jumbotron-custom">
            <h1>Data Structures and Algorithms</h1>
            <p>
              Enter a dataset and see the magic!
            </p>
          </div>
        </div>
        <div className="row body-container">
          <SearchAlgorithms algorithms={algorithmsPayload.algorithms}/>
        </div>
      </React.Fragment>
    </Container>
  );
}

export default LandingPage;
