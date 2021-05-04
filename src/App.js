import React from 'react';
import { If, Then } from 'react-if';
import './App.scss';

import Header from './components/header/header';
import Form from './components/form/form';
import History from './components/history/history';
import Results from './components/results/results';
import Footer from './components/footer/footer';

let history = JSON.parse(localStorage.getItem('history'));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      headers: {},
      response: {},
      history: {},
      storageArray: history || [],
      trigger: false,
    };
  }

  handleForm = (headers, body, state) => {
    if (headers && body) {
      let storageObj = {
        id: state.method+state.url,
        url: state.url,
        method: state.method,
        body: state.body,
      };
      this.setState({
        count: body.count || this.state.count + 1,
        headers: headers,
        response: body,
        trigger: true,
        storageArray: [...this.state.storageArray, storageObj],
      });
      localStorage.setItem('history', JSON.stringify(this.state.storageArray));
    } else {
      this.setState({
        count: this.state.count + 1,
        headers: null,
        response: body,
        trigger: true,
      });
    }
  };

  handleHistory = (method,url,body) => {
    console.log(method,url,body);

  }

  async componentDidMount() {
    let history = JSON.parse(localStorage.getItem('history'));
    history && this.setState({ history });
  }

  render() {
    return (
      <>
        <Header />
        <main>
          <Form prompt="GO!" handler={this.handleForm} />
          <section id="results">
            <History props={this.state.storageArray} handler={this.handleHistory} />
            <If condition={this.state.trigger}>
              <Then>
                <Results props={this.state} />
              </Then>
            </If>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
