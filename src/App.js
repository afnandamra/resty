import React from 'react';
import './App.scss';

import Header from './components/header/header';
import Form from './components/form/form';
import History from './components/history/history';
import Results from './components/results/results';
import Footer from './components/footer/footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      headers: {},
      response: [],
      urls: [],
      methods: [],
    };
  }
  handleForm = (headers, body, state) => {
    // console.log(headers, body, state.url, state.method);
    this.state.urls.push(state.url);
    this.state.methods.push(state.method);
    if (headers && body) {
      this.setState({
        count: body.count || this.state.count + 1,
        headers: headers,
        response: body,
      });
    } else {
      this.setState({
        count: this.state.count + 1,
        headers: {message: 'Not Available'},
        response: body
      })
    }
  };
  render() {
    return (
      <>
        <Header />
        <main>
          <Form prompt="GO!" handler={this.handleForm} />
          <section id="results">
            <History
              props={{ urls: this.state.urls, methods: this.state.methods }}
            />
            <Results props={this.state} />
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
