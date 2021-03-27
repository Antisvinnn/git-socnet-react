import React from 'react';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
import { addPost } from './redux/state.js';
import { onChengeText } from './redux/state.js';

export let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App state={state} addPost={addPost} onChengeText={onChengeText} />
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById('root')
	);
};
