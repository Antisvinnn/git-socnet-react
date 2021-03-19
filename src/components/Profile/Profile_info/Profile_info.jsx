import s from './../Profile.module.css';

const Profile_info = (props) => {
	return (
		<div className={s.profile_container}>
			<img
				className={s.background_profile_img}
				src='https://placehold.it/1920'
				alt=''
			></img>
			<div className={s.ava}>AVA+discription</div>
			<p>{props.description}</p>
		</div>
	);
};

export default Profile_info;
