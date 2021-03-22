import React from 'react';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import state from './redux/state.js';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App
				posts={state.Posts_data}
				dialogs_users={state.Dialogs_data}
				dialogs_messages={state.Messages_data}
			/>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
