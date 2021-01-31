import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux'

const renderEntireTree = (state: any) => {
  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
    document.getElementById('root')
  );
}

renderEntireTree(store.getState());


// Rewrite the UI when state changes.
store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
})
