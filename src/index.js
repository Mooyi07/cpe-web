import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ Notice the 'client' import here
import './index.css'; // Tailwind or your global styles
import App from './App';
import './tailwind.output.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
