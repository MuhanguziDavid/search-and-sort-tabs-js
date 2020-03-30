import React from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import './LandingPage.scss';
import Algorithms from '../inputOutputForms';

const LandingPage = () => {
  return (
    <Container>
      <React.Fragment>
        <div className="row  header-container">
          <div className="col-md-12 jumbotron jumbotron-custom">
            <h1>Search and Sort Tabs</h1>
            <p>
              Enter a dataset and see the magic! <br/>
              (separate terms with a space) <br />
              <a href="https://numbergenerator.org/" rel="noopener noreferrer" target="_blank">Random Number Generator</a>
            </p>
          </div>
        </div>
        {/* <div className="row body-container"> */}
          <Tabs defaultActiveKey="searching" id="uncontrolled-tab-example">
            <Tab eventKey="searching" title="Searching">
              <Algorithms algorithmType='searching'/>
            </Tab>
            <Tab eventKey="sorting" title="Sorting">
              <Algorithms algorithmType='sorting'/>
            </Tab>
          </Tabs>
        {/* </div> */}
      </React.Fragment>
    </Container>
  );
}

export default LandingPage;
