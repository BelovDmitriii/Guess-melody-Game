import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  ERRORS_COUNT: 10,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      errorsCount={Setting.ERRORS_COUNT}
    />
  </React.StrictMode>,
  document.getElementById('root'));
