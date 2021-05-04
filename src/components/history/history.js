import React from 'react';
import './history.scss';

function History({ props, handler }) {
  function historyClick(e) {
    let i = e.target.id;
    let { method, url, body } = props[i];
    handler(method, url, body);
  }
  return (
    <section id="history">
      <table>
        <thead>
          <tr>
            <th className="fwidth">Method</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {props.map((val, i) => {
            return (
              <tr
                key={val.methot + val.url}
                data-testid="url"
                onClick={historyClick}
              >
                <td className="fwidth">{val.method}</td>
                <td id={i}>{val.url}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

export default History;
