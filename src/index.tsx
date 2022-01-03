import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Vasya } from "./pages/vasya";
import { Fedya } from "./pages/fedya";
import { Main } from "./pages/main";
import { history } from './utils/history'
import { Ctx, Store, useStore } from './store/use-store';
import { Route, Router, Switch } from 'react-router-dom'
import { observer } from "mobx-react-lite";

const App = observer(() => {
    return (
      <Ctx.Provider value={Store}>
        <Router history={history}>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/vasya' component={Vasya} />
            <Route exact path='/fedya' component={Fedya} />
          </Switch>
        </Router>
      </Ctx.Provider>
      
    )
  })
  
  ReactDOM.render(<App />, document.getElementById('root'));



