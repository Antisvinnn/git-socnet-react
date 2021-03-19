import { Link } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItemUser = (props) => {
	return (
		<div className={s.DialogItemUser_container}>
			<Link to={'/dialogs/' + props.id} className={s.dialog_item}>
				{props.name}
			</Link>
		</div>
	);
};

export default DialogItemUser;
