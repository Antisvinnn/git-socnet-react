import s from './Dialogs.module.css';
import DialogItemUser from './DialogItemUser.jsx';
import DialogItemMessage from './DialogIItemMessage.jsx';

const Dialogs = ({ Dialogs_page }) => {
	let dialogsElementUsers = Dialogs_page.Dialogs_data.map((dialog_user, i) => {
		return (
			<DialogItemUser key={i} id={dialog_user.id} name={dialog_user.name} />
		);
	});
	let dialogElementMessages = Dialogs_page.Messages_data.map((mess_el, i) => {
		return (
			<DialogItemMessage key={i} id={mess_el.id} message={mess_el.Message} />
		);
	});

	return (
		<div className={s.Dialogs}>
			<div className={s.Dialogs_wrapper}>
				<div className={s.column_1}>{dialogsElementUsers}</div>
				<div className={s.column_2}>{dialogElementMessages}</div>
			</div>
		</div>
	);
};

export default Dialogs;
