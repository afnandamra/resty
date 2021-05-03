import React from 'react';
import './history.scss';

function History({ props }) {
  return (
    <section id="result">
      <table>
        <thead>
          <tr>
            <th className="fwidth">Method</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {props.methods.map((val, i) => {
            return (
              <tr key={i}>
                <td className="fwidth">{val}</td>
                <td>{props.urls[i]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

export default History;
