import React from 'react';
import './form.scss';
const superagent = require('superagent');
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: 'GET',
      body: '',
    };
  }

  changeMethod = (e) => {
    this.setState({ method: e.target.innerHTML });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      url: e.target.url.value,
      method: this.state.method,
      body: e.target.body.value,
    });
    try {
      let reqBody = e.target.body.value;
      if (this.state.method === 'POST' || this.state.method === 'PUT') {
        const result = await superagent[this.state.method.toLowerCase()](
          e.target.url.value
        ).send(reqBody);
        let { headers, body } = result;
        this.props.handler(headers, body, this.state);
      } else {
        const result = await superagent[this.state.method.toLowerCase()](
          e.target.url.value
        );
        let { headers, body } = result;
        this.props.handler(headers, body, this.state);
      }
    } catch (e) {
      this.props.handler(null, e.message, this.state);
      console.log(e.message);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <label>URL:</label>
          <input type="text" name="url" placeholder="http://api.url.here" />
          <textarea
            type="text"
            name="body"
            placeholder="Request body..."
            rows="3"
            cols="40"
          />
          <div id="rest-buttons">
            <span
              className={`button ${this.state.method === 'GET'}`}
              onClick={this.changeMethod}
            >
              GET
            </span>
            <span
              className={`button ${this.state.method === 'POST'}`}
              onClick={this.changeMethod}
            >
              POST
            </span>
            <span
              className={`button ${this.state.method === 'PUT'}`}
              onClick={this.changeMethod}
            >
              PUT
            </span>
            <span
              className={`button ${this.state.method === 'DELETE'}`}
              onClick={this.changeMethod}
            >
              DELETE
            </span>
          </div>
          <button type="submit">{this.props.prompt}</button>
        </fieldset>
      </form>
    );
  }
}

export default Form;
