import React from 'react';

// import History from '../history/history';
// import historyClick from '../../helper/historyClick';
import { If, Then } from 'react-if';
import ReactJson from 'react-json-view';
import './historyRoute.scss'

class HistoryRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: JSON.parse(localStorage.getItem('history')) || [],
      result: [],
      trigger: false,
      data:[],
    };
  }
  clickRoute = async (data) => {
    await this.setState({ result: data, trigger: true });
    localStorage.setItem('data', JSON.stringify(data));
    console.log(data.response);
  };
  render() {
    return (
      <section id="historyPage">
        <section id="historyPTable">
          <table>
            <thead>
              <tr>
                <th className="fwidth">Method</th>
                <th>URL</th>
              </tr>
            </thead>
            <tbody>
              <If condition={this.state.history.length > 0}>
                <Then>
                  {this.state.history.map((val, i) => {
                    return (
                      <tr
                        key={i + val.methot + val.url + val.body}
                        data-testid="url"
                        onClick={() => {this.clickRoute(val)}}
                      >
                        <th className="fwidth" id={`his${val.method}`}>
                          {val.method}
                        </th>
                        <td>{val.url}</td>
                        <td style={{ display: 'none' }}>{val.body}</td>
                      </tr>
                    );
                  })}
                </Then>
              </If>
            </tbody>
          </table>
        </section>
        <If condition={this.state.trigger && this.state.result}>
          <Then>
            <div className="result">
              <h3>Details</h3>
              <p>
                <strong>API:</strong> {this.state.result.url}
              </p>
              <p>
                <strong>METHOD:</strong> {this.state.result.method}
              </p>
              <If condition={this.state.result.body}>
                <Then>
                  <p>
                    <strong>BODY:</strong> {this.state.result.body}
                  </p>
                </Then>
              </If>
              <button
                onClick={() =>{
                  this.props.history.push('/', { data: this.state.result });
                  window.location.reload(false);
                }}
              >
                re-run
              </button>
            </div>
            <div className="resultSec">
            <h2>Headers</h2>
              <ReactJson
                src={this.state.result.headers}
                name="Headers"
                iconStyle={'triangle'}
                collapsed={false}
                enableClipboard={false}
                displayDataTypes={false}
              />
              <h2>Response</h2>
              <ReactJson
                src={this.state.result.response}
                name="Response"
                // theme={"grayscale:inverted"}
                iconStyle={'triangle'}
                collapsed={false}
                enableClipboard={false}
                displayDataTypes={false}
              />
            </div>
          </Then>
        </If>
      </section>
    );
  }
}

export default HistoryRoute;
