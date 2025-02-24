// Import React and ReactDOM to bootstrap the application
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css'; // Import global CSS

// Create a root element and render the main App component inside React.StrictMode for highlighting potential issues
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
