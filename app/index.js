import './styles/index.scss';

import uuid from 'node-uuid';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import {Provider} from 'react-redux'
import configureStore from './stores/noteStore';


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
  <Provider store={store}><App/></Provider>,
  document.getElementById('app')
);
