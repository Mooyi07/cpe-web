import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ Notice the 'client' import here
import App from './App';
import './index.css'; // Tailwind or your global styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
