import React from 'react';
import './history.scss';

function History({ props, handler }) {
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
                key={i + val.methot + val.url + val.body}
                data-testid="url"
                onClick={handler}
              >
                <th className="fwidth" id={`his${val.method}`}>
                  {val.method}
                </th>
                <td>{val.url}</td>
                <td style={{ display: 'none' }}>{val.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

export default History;

// async function historyClick(e) {
//   let method = e.currentTarget.childNodes[0].innerHTML;
//   let url = e.currentTarget.childNodes[1].innerHTML;
//   let body = e.currentTarget.childNodes[2].innerHTML;
//   console.log(method, url, body);
//   return {
//     url,
//     method,
//     body,
//   };
  //   const input = document.getElementById(`url`);
  //   input.value = url;

  //   const selected = document.getElementById(`${method}`);
  //   await selected.click();

  //   const text = document.getElementById('body');
  //   text.value = body;

  //   const submit = document.getElementById('submit');
  //   await submit.click();
// };

/* <form onSubmit={formClick}>
<input type="hidden" name="url" value={val.url} />
<input type="hidden" name="method" value={val.method} />
<input type="hidden" name="body" value={val.body} />
<input className="rerun" type="submit">
  re-run
</input>
</form> */
// async function formClick(e) {
//   let method = e.target.method.value;
//   let url = e.target.url.value;
//   let body = e.target.body.value;
//   console.log(method, url, body);
// }
