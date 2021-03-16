import Post from './Post/Post';
import s from './Profile_posts.module.css';

const Profile_posts = () => {
	return (
		<div className={s.profile_posts}>
			{/* TEXT AREA + BUTTONS */}
			<div className={s.profile_container}>
				<textarea
					name=''
					id=''
					cols='30'
					rows='2'
					className={s.textarea_post}
				></textarea>

				<button className={s.button_post}>Add post</button>
				<button className={s.button_post}>Remove post</button>
			</div>

			<hr className={s.border_line} />

			{/* POSTS */}
			<div className={s.profile_container}>
				<Post message='Hello, world!' like_count='5' />
				<Post message='Hello, baby!' like_count='25' />
				<Post message='Welcome to the club, body!' like_count='35' />
				<Post message='It is my first comment' like_count='55' />
			</div>
		</div>
	);
};

export default Profile_posts;
