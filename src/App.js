import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './components/routes';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './components/navigationBar/NavigationBar';
import Footer from './components/footer/Footer';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <React.Fragment>
        <NavigationBar />
        <div className="content">
          <ToastContainer />
          <Routes />
        </div>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  </Provider>
);

export default App;
