import s from './Dialogs.module.css';
import DialogItemUser from './DialogItemUser.jsx';
import DialogItemMessage from './DialogIItemMessage.jsx';

const Dialogs = (props) => {
	// MAPPING
	let dialogsElementUsers = props.dialogs_users.map((dialog_user) => {
		return <DialogItemUser id={dialog_user.id} name={dialog_user.name} />;
	});

	// MAPPING
	let dialogElementMessages = props.dialogs_messages.map((mess_el) => {
		return <DialogItemMessage id={mess_el.id} message={mess_el.Message} />;
	});

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
