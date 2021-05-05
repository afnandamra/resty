import React from 'react';
import { If, Then } from 'react-if';
import './home.scss';

import Form from '../form/form';
import History from '../history/history';
import Results from '../results/results';

const superagent = require('superagent');

let history = JSON.parse(localStorage.getItem('history'));
let data = JSON.parse(localStorage.getItem('data'));

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      headers: {},
      response: {},
      history: {},
      storageArray: history || [],
      trigger: false,
      fetching: false,
      rendered: false,
    };
  }

  handleForm = async (state) => {
    this.setState({ fetching: true, trigger: true });
    console.log(Date.now() / 1000);
    try {
      if (state.method === 'POST' || state.method === 'PUT') {
        const result = await superagent[state.method.toLowerCase()](
          state.url
        ).send(state.body);
        let { headers, body } = result;
        this.handler(headers, body, state);
      } else {
        const result = await superagent[state.method.toLowerCase()](state.url);
        let { headers, body } = result;
        this.handler(headers, body, state);
      }
    } catch (e) {
      this.handler(null, e.message, state);
      console.log(e.message);
    }
  };

  handler = (headers, response, state) => {
    if (headers && response) {
      let storageObj = {
        id: state.method + state.url + state.body,
        url: state.url,
        method: state.method,
        body: state.body,
        headers: headers,
        response: response
      };
      this.state.storageArray.push(storageObj);

      this.setState({
        count: response.count || this.state.count + 1,
        headers: headers,
        response: response,
        storageArray: uniqueArr(this.state.storageArray),
        fetching: false,
      });
      localStorage.setItem('history', JSON.stringify(this.state.storageArray));
    } else {
      this.setState({
        count: this.state.count + 1,
        headers: null,
        response: response,
        fetching: false,
      });
    }
    console.log(Date.now() / 1000);
  };

  componentDidMount() {
    this.setState({ rendered: true});
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.fetching !== this.state.fetching) {
      console.log('fetching....', this.state.fetching);
      this.setState({ fetching: this.state.fetching , rendered: false});
    }
  }

  render() {
    return (
      <div id="home">
        <Form data={data} handler={this.handleForm} />
        <section id="results">
          <History props={this.state.storageArray} handler={historyClick} />
          <If condition={this.state.trigger}>
            <Then>
              <Results props={this.state} />
            </Then>
          </If>
        </section>
      </div>
    );
  }
}

export default Home;

function uniqueArr(arr) {
  let newArr = [];
  const map = new Map();
  for (const item of arr) {
    if (!map.has(item.id)) {
      map.set(item.id, true);
      newArr.push({
        id: item.id,
        url: item.url,
        method: item.method,
        body: item.body,
        headers: item.headers,
        response: item.response
      });
    }
  }
  return newArr;
}

async function historyClick(e) {
  let method = e.currentTarget.childNodes[0].innerHTML;
  let url = e.currentTarget.childNodes[1].innerHTML;
  let body = e.currentTarget.childNodes[2].innerHTML;

  const input = document.getElementById(`url`);
  input.value = url;

  const selected = document.getElementById(`${method}`);
  await selected.click();

  const text = document.getElementById('body');
  text.value = body;

  const submit = document.getElementById('submit');
  await submit.click();
};