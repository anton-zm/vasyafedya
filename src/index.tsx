import React from 'react';
import './assets/styles/index.css'
import ReactDOM from 'react-dom';
import { Ctx, Store } from './store/use-store';
import { Main } from './components/main';
import { observer } from "mobx-react-lite";

const App = observer(() => {
    return (
      <Ctx.Provider value={Store}>
        <Main />
      </Ctx.Provider>
    )
  })
  
  ReactDOM.render(<App />, document.getElementById('root'));



