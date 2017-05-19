import uuid from 'node-uuid';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/app.jsx';
import configureStore from './stores/noteStore';

import './styles/index.scss';


const store = configureStore({
  notes: [
    {
      id: uuid.v4(),
      task: 'Review Webpack'
    }, {
      id: uuid.v4(),
      task: 'Learn React'
    }, {
      id: uuid.v4(),
      task: 'Learn React-Redux'
    }
  ]
});

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
