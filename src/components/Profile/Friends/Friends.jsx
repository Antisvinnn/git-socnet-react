/* eslint-disable react/jsx-pascal-case */
import s from './friends.module.css';
import Friends_item from './Friends_item/Friends_item';

const Friends = (props) => {
	let Array_friends = props.friends.map((friend, i) => {
		return <Friends_item key={i} name={friend.name} id={friend.id} />;
	});

	return (
		<div className={s.container}>
			<span className={s.discription}>Friends</span>
			<div className={s.container_sub}>{Array_friends}</div>
		</div>
	);
};

export default Friends;
