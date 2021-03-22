import React from 'react';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Post from './components/Profile/Profile_posts/Post/Post.jsx';
import DialogItemUser from './components/Dialogs/DialogItemUser.jsx';
import DialogItemMessage from './components/Dialogs/DialogIItemMessage.jsx';

let Posts_data = [
	{ message: 'Hello', like_count: 2 },
	{ message: 'Good bye', like_count: 22 },
	{ message: 'It is my first comment to you', like_count: 122 },
	{ message: 'Um vathasay', like_count: 223567 },
	{ message: 'Um vathasay', like_count: 223567 },
	{ message: 'Um vathasay', like_count: 0 },
	{ message: 'Um vathasay', like_count: 223567 },
	{ message: 'Um vathasay', like_count: 223567 },
	{ message: 'Um vathasay', like_count: 223567 },
	{ message: 'Um vathasay', like_count: 223567 },
	{ message: 'Um vathasay', like_count: 223567 },
	{ message: 'Um vathasay', like_count: 223567 },
	{ message: 'Um vathasay', like_count: 223567 },
];

// MAPPING
let Posts = Posts_data.map((post) => {
	return <Post message={post.message} like_count={post.like_count} />;
});

let Dialogs_data = [
	{ id: 1, name: 'Sveta' },
	{ id: 2, name: 'Sasha' },
	{ id: 3, name: 'Vadik' },
	{ id: 4, name: 'Kirill' },
	{ id: 5, name: 'Misha' },
	{ id: 6, name: 'Dimych' },
];

let Messages_data = [
	{ id: 1, Message: 'Hello world!' },
	{ id: 2, Message: 'Metallica is my favourite groupe!' },
	{ id: 3, Message: 'How are you?' },
	{ id: 4, Message: 'To be accomplishment' },
	{ id: 5, Message: 'Football very good' },
	{ id: 6, Message: 'Mazafaker' },
];

// MAPPING
let dialogsElementUsers = Dialogs_data.map((dialog_user) => {
	return <DialogItemUser id={dialog_user.id} name={dialog_user.name} />;
});

// MAPPING
let dialogElementMessages = Messages_data.map((mess_el) => {
	return <DialogItemMessage id={mess_el.id} message={mess_el.Message} />;
});

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App
				posts={Posts}
				dialogs_users={dialogsElementUsers}
				dialogs_messages={dialogElementMessages}
			/>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
