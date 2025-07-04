import './tailwind.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  const appContainer = document.getElementById('react-app');
  if (appContainer) {
    ReactDOM.render(<App />, appContainer);
  }
}); 