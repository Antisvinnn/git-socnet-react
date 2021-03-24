import s from '../friends.module.css';

const Friends_item = (props) => {
	return (
		<div className={s.friend}>
			<img className={s.friend_image} src='https:/placehold.it/100' alt='' />
			<span>{props.name}</span>
		</div>
	);
};

export default Friends_item;
