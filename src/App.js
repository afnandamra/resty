import React from 'react';
import './App.scss';

import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;


