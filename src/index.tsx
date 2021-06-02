import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ApiDataProvider from './api/api-data-provider';

ReactDOM.render(
  <React.StrictMode>
    <ApiDataProvider>
      <App />
    </ApiDataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
