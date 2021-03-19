import s from './Dialogs.module.css';

const DialogItemMessage = (props) => {
	return (
		<div className={s.dialog_message}>
			<p>{props.message}</p>
		</div>
	);
};

export default DialogItemMessage;
