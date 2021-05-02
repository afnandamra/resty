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

  addUrl = () => {
    this.setState({
      url: this.state.input,
      method: this.state.addmethod,
    });
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  changeMethod = (e) => {
    this.setState({ addmethod: e.target.innerHTML });
  };

  render() {
    return (
      <main>
        <form>
          <label>URL:</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="url"
            placeholder="http://api.url.here"
            required
          />
          <button type="button" onClick={this.addUrl}>
            GO!
          </button>
          <div id="rest-buttons">
            <span
              className={`button ${this.state.addmethod === 'GET'}`}
              onClick={this.changeMethod}
            >
              GET
            </span>
            <span
              className={`button ${this.state.addmethod === 'POST'}`}
              onClick={this.changeMethod}
            >
              POST
            </span>
            <span
              className={`button ${this.state.addmethod === 'PUT'}`}
              onClick={this.changeMethod}
            >
              PUT
            </span>
            <span
              className={`button ${this.state.addmethod === 'DELETE'}`}
              onClick={this.changeMethod}
            >
              DELETE
            </span>
          </div>
        </form>
        <section id="result">
          <table>
            <tr>
              <th className="fwidth">Method</th>
              <th>URL</th>
            </tr>
            <tr>
              <td className="fwidth">{this.state.method}</td>
              <td>{this.state.url}</td>
            </tr>
          </table>
        </section>
      </main>
    );
  }
}

export default Form;
