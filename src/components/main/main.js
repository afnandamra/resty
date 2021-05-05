import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './main.scss';

import Home from '../home/home';
import Help from '../help/help';
import HistoryRoute from '../historyRoute/historyRoute';


class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/history" component={HistoryRoute}/>
          <Route path="/help" component={Help} />
          <Route>
            <div>
              <h2>404: Not Found</h2>
            </div>
          </Route>
        </Switch>
      </main>
    );
  }
}

export default Main;
