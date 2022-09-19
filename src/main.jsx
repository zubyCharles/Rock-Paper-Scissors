import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Game } from './context/GameController';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Game>
      <App />
    </Game>
  </React.StrictMode>
);
