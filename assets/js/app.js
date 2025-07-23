import '../css/custom.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

console.log('=== APP.JS IS RUNNING ===');

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  const appContainer = document.getElementById('root');
  if (appContainer) {
    ReactDOM.render(<App />, appContainer);
  }
}); 