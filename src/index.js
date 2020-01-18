import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux'
// 作成したSTOREを全コンポーネントに渡すための機能を持つprovider
import { Provider } from 'react-redux'

import "./index.css";
// reducer
import reducer from './reducers'
// component専用のディレクトリがあると見通しがよくアンル
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
// ここで作られるreducerはapplication内で唯一の物になる
// application内部の全てstateはここに集約されている
// このStoreが全階層のどのcomponentからでも参照できるようにする

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
