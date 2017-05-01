import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);

ReactDOM.render(
  //element,
  <App />,
  document.getElementById('root'),
  document.getElementById('sched')
);

// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('root')
// );
