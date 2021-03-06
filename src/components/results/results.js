import { If, Then, Else } from 'react-if';
import ReactJson from 'react-json-view';
import Loader from 'react-loader-spinner';

import './results.scss';

function Results({ props }) {
  return (
    <section id="resultSec" data-testid="resultSec">
      <If condition={props.fetching}>
        <Then>
          <div id="loader">
            <h3>Loading...</h3>
            <Loader
              type="BallTriangle"
              color="#db7093"
              height={100}
              width={100}
            />
          </div>
        </Then>
        <Else>
          <If condition={props.headers}>
            <Then>
              <h2>Headers</h2>
              <ReactJson
                src={props.headers}
                name="Headers"
                iconStyle={'triangle'}
                collapsed={false}
                enableClipboard={false}
                displayDataTypes={false}
              />
              <h2>Response</h2>
              <ReactJson
                src={props.response}
                name="Response"
                // theme={"grayscale:inverted"}
                iconStyle={'triangle'}
                collapsed={false}
                enableClipboard={false}
                displayDataTypes={false}
              />
            </Then>
            <Else>
              <h3> {props.response} </h3>
            </Else>
          </If>
        </Else>
      </If>
    </section>
  );
}

export default Results;
