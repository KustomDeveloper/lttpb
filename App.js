import React, { Fragment } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

const App = () => {
  return(
    <Fragment>
      <Header />
      <Main>
          <p>Main Content</p>
      </Main>
      <Footer />
    </Fragment>
  )
}
export default App;
