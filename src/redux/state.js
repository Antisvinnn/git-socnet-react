let rerenderEntireTree = () => {
	console.log('state was changed');
};

let state = {
	Profile_page: {
		Posts_data: [
			{ id: 2, message: 'Hello', like_count: 2 },
			{ id: 2, message: 'Good bye', like_count: 22 },
			{ id: 2, message: 'It is my first comment to you', like_count: 122 },
			{ id: 2, message: 'Um vathasay', like_count: 223567 },
		],
		Friends: [
			{ id: 1, name: 'Sveta', ava: '' },
			{ id: 2, name: 'Lena', ava: '' },
			{ id: 3, name: 'Vika', ava: '' },
			{ id: 4, name: 'Veronika', ava: '' },
			{ id: 5, name: 'Dimych', ava: '' },
			{ id: 6, name: 'Kirill', ava: '' },
			{ id: 7, name: 'Ira', ava: '' },
			{ id: 8, name: 'Julia', ava: '' },
			{ id: 9, name: 'Katya', ava: '' },
			{ id: 10, name: 'Lera', ava: '' },
			{ id: 11, name: 'Vladik', ava: '' },
		],
		newPostText: 'Hello lovely!!!!',
	},
	Dialogs_page: {
		Dialogs_data: [
			{ id: 1, name: 'Sveta' },
			{ id: 2, name: 'Sasha' },
			{ id: 3, name: 'Vladik' },
			{ id: 4, name: 'Nikita' },
			{ id: 5, name: 'Vitalik' },
			{ id: 6, name: 'Dimych' },
			{ id: 1, name: 'Sveta' },
			{ id: 2, name: 'Sasha' },
			{ id: 3, name: 'Vladik' },
			{ id: 4, name: 'Nikita' },
			{ id: 5, name: 'Vitalik' },
			{ id: 6, name: 'Dimych' },
		],

		Messages_data: [
			{ id: 1, Message: 'Hello world!' },
			{ id: 2, Message: 'Metallica is my favourite groupe!' },
			{ id: 3, Message: 'How are you?' },
			{ id: 4, Message: 'To be accomplishment' },
			{ id: 5, Message: 'Football very good' },
			{ id: 6, Message: 'Mazafaker' },
		],
	},
};
export let addPost = (postMessage) => {
	let newPost = {
		id: 5,
		message: postMessage,
		like_count: 110,
	};
	state.Profile_page.Posts_data.push(newPost);
	rerenderEntireTree();
};
export let addMessage = (MessageText) => {
	let newMessage = {
		id: 5,
		Message: MessageText,
	};
	state.Dialogs_page.Messages_data.push(newMessage);
	rerenderEntireTree();
};
export let onChengeText = (newText) => {
	state.Profile_page.newPostText = newText;
};
export const subscribe = (observer) => {
	rerenderEntireTree = observer;
};
export default state;
