import React from 'react';
import state, {
	subscribe,
	addPost,
	onChengeText,
	addMessage,
} from './redux/state.js';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';

let rerenderEntireTree = () => {
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App
					state={state}
					addPost={addPost}
					onChengeText={onChengeText}
					addMessage={addMessage}
				/>
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById('root')
	);
};

rerenderEntireTree();

subscribe(rerenderEntireTree);
