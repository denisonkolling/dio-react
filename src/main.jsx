import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
		<GlobalStyle />
  	<BrowserRouter>
			<App />
		</BrowserRouter>
  </React.StrictMode>,
)
