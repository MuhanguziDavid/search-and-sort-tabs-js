import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './components/routes';
import { ToastContainer } from 'react-toastify';
import './App.css';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <React.Fragment>
        <div className="content">
          <ToastContainer />
          <Routes />
        </div>
      </React.Fragment>
    </BrowserRouter>
  </Provider>
);

export default App;
