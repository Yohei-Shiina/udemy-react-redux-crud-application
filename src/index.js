import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
// 作成したSTOREを全コンポーネントに渡すための機能を持つprovider
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import "./index.css";
// reducer
import reducer from './reducers';
// component専用のディレクトリがあると見通しがよくアンル
import EventsIndex from "./components/events_index";
import EventsNew from "./components/events_new";
import EventsShow from "./components/events_show";
import registerServiceWorker from "./registerServiceWorker";
// ここで作られるreducerはapplication内で唯一の物になる
// application内部の全てstateはここに集約されている
// このStoreが全階層のどのcomponentからでも参照できるようにする

const enhancer = process.env.NODE_ENV === 'development' ?
  composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
const store = createStore(reducer, enhancer)

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/events/new" component={EventsNew} />
          <Route path="/events/:id" component={EventsShow} />
          <Route exact path="/" component={EventsIndex} />
          <Route exact path="/events" component={EventsIndex} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
