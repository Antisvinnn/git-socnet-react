import s from './Dialogs.module.css';

const Dialogs = (props) => {
	return (
		<div className={s.Dialogs}>
			<div className={s.Dialogs_wrapper}>
				{/* COLUMN 1 */}
				<div className={s.column_1}>{props.dialogs_users}</div>
				{/* COLUMN 2 */}
				<div className={s.column_2}>{props.dialogs_messages}</div>
			</div>
		</div>
	);
};

export default Dialogs;
