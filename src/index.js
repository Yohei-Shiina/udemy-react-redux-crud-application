import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux'
// 作成したSTOREを全コンポーネントに渡すための機能を持つprovider
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import "./index.css";
// reducer
import reducer from './reducers'
// component専用のディレクトリがあると見通しがよくアンル
import EventsIndex from "./components/events_index";
import EventsNew from "./components/events_new";
import registerServiceWorker from "./registerServiceWorker";
// ここで作られるreducerはapplication内で唯一の物になる
// application内部の全てstateはここに集約されている
// このStoreが全階層のどのcomponentからでも参照できるようにする

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/events/new" component={EventsNew} />
        <Route exact path="/" component={EventsIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
