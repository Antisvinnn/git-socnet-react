import { Link } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItemUser = (props) => {
	return (
		<Link to={`/dialogs/${props.id}`} className={s.DialogItemUser_container}>
			<img className={s.image} src='https://placehold.it/100' alt='' />
			<span className={s.name}>{props.name}</span>
		</Link>
	);
};

export default DialogItemUser;
