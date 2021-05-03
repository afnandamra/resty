import React from 'react';
import './form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: '',
    };
  }

  handleChange = (e) => {
    this.setState({ url: e.target.value });
  };

  changeMethod = (e) => {
    this.setState({ method: e.target.innerHTML });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const raw = await fetch(e.target.url.value);
    const data = await raw.json();
    this.props.handler(raw.headers, data, this.state.url, this.state.method);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>URL:</label>
        <input
          onChange={this.handleChange}
          type="text"
          name="url"
          placeholder="http://api.url.here"
          required
        />
        <button type="submit">{this.props.prompt}</button>
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
      </form>
    );
  }
}

export default Form;
