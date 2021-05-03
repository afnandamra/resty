import React from 'react';
import './App.scss';

import Header from './components/header/header';
import Form from './components/form/form';
import History from './components/history/history';
import Footer from './components/footer/footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      Headers: {},
      Response: [],
      urls: [],
      methods: [],
    };
  }
  handleForm = (Headers, Response, url, method) => {
    this.state.urls.push(url);
    this.state.methods.push(method);
    this.setState({
      count: Response.count || 1,
      Headers: Headers,
      Response: Response,
    });
  };
  render() {
    return (
      <>
        <Header />
        <main>
          <Form prompt="GO!" handler={this.handleForm} />
          <History props={{urls: this.state.urls, methods: this.state.methods}}  />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
