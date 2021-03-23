import { Link } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItemUser = (props) => {
	return (
		<div className={s.DialogItemUser_container}>
			<img src='https://placehold.it/200' alt='' />
			<Link to={`/dialogs/${props.id}`} className={s.dialog_item}>
				{props.name}
			</Link>
		</div>
	);
};

export default DialogItemUser;
