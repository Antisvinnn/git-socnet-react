import s from './Dialogs.module.css';
import DialogItemUser from './DialogItemUser.jsx';
import DialogItemMessage from './DialogIItemMessage';

const Dialogs_data = [
	{ id: 1, name: 'Sveta' },
	{ id: 2, name: 'Sasha' },
	{ id: 3, name: 'Vadik' },
	{ id: 4, name: 'Kirill' },
	{ id: 5, name: 'Misha' },
	{ id: 6, name: 'Dimych' },
];

const Messages_data = [
	{ id: 1, Message: 'Hello world!' },
	{ id: 2, Message: 'Metallica is my favourite groupe!' },
	{ id: 3, Message: 'How are you?' },
	{ id: 4, Message: 'To be accomplishment' },
	{ id: 5, Message: 'Football very good' },
	{ id: 6, Message: 'Mazafaker' },
];

const Dialogs = () => {
	return (
		<div className={s.Dialogs}>
			<div className={s.Dialogs_wrapper}>
				{/* COLUMN 1 */}
				<div className={s.column_1}>
					<DialogItemUser
						id={Dialogs_data[0].id}
						name={Dialogs_data[0].name}
					/>
					<DialogItemUser
						id={Dialogs_data[1].id}
						name={Dialogs_data[1].name}
					/>
					<DialogItemUser
						id={Dialogs_data[2].id}
						name={Dialogs_data[2].name}
					/>
					<DialogItemUser
						id={Dialogs_data[3].id}
						name={Dialogs_data[3].name}
					/>
					<DialogItemUser
						id={Dialogs_data[4].id}
						name={Dialogs_data[4].name}
					/>
					<DialogItemUser
						id={Dialogs_data[5].id}
						name={Dialogs_data[5].name}
					/>
				</div>
				{/* COLUMN 2 */}
				<div className={s.column_2}>
					<DialogItemMessage
						id={Messages_data[0].id}
						message={Messages_data[0].Message}
					/>
					<DialogItemMessage
						id={Messages_data[1].id}
						message={Messages_data[1].Message}
					/>
					<DialogItemMessage
						id={Messages_data[2].id}
						message={Messages_data[2].Message}
					/>
					<DialogItemMessage
						id={Messages_data[3].id}
						message={Messages_data[3].Message}
					/>
					<DialogItemMessage
						id={Messages_data[4].id}
						message={Messages_data[4].Message}
					/>
					<DialogItemMessage
						id={Messages_data[5].id}
						message={Messages_data[5].Message}
					/>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
