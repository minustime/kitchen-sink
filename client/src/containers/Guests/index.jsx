import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { makeServer } from '../../../mocks/server';

// Mock API calls during development
if (process.env.NODE_ENV === 'development') {
  makeServer();
}

ReactDOM.render(<App />, document.getElementById('root'));
