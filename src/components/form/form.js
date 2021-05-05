import React from 'react';
import './form.scss';

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
    await this.setState({
      url: e.target.url.value,
      method: this.state.method,
      body: e.target.body.value,
    });
    this.props.handler(this.state);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>URL:</label>
          <input
            type="text"
            name="url"
            id="url"
            placeholder="http://api.url.here"
          />
          <textarea
            type="text"
            name="body"
            id="body"
            placeholder="Request body..."
            rows="3"
            cols="40"
          />
          <div id="rest-buttons">
            <span
              id="GET"
              className={`button ${this.state.method === 'GET'}`}
              onClick={this.changeMethod}
            >
              GET
            </span>
            <span
              id="POST"
              className={`button ${this.state.method === 'POST'}`}
              onClick={this.changeMethod}
            >
              POST
            </span>
            <span
              id="PUT"
              className={`button ${this.state.method === 'PUT'}`}
              onClick={this.changeMethod}
            >
              PUT
            </span>
            <span
              id="DELETE"
              className={`button ${this.state.method === 'DELETE'}`}
              onClick={this.changeMethod}
            >
              DELETE
            </span>
          </div>
          <button type="submit" id="submit">
            {this.props.prompt}
          </button>
        </form>
      </>
    );
  }
}

export default Form;
