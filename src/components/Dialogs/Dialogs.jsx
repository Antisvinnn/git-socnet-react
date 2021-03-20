import s from './Dialogs.module.css';
import DialogItemUser from './DialogItemUser.jsx';
import DialogItemMessage from './DialogIItemMessage';

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

const Dialogs = () => {
	return (
		<div className={s.Dialogs}>
			<div className={s.Dialogs_wrapper}>
				{/* COLUMN 1 */}
				<div className={s.column_1}>{dialogsElementUsers}</div>
				{/* COLUMN 2 */}
				<div className={s.column_2}>{dialogElementMessages}</div>
			</div>
		</div>
	);
};

export default Dialogs;
