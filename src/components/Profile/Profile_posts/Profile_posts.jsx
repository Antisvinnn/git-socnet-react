import Post from './Post/Post';
import s from './Profile_posts.module.css';

const Profile_posts = () => {
	return (
		<div className={s.profile_posts}>
			<div className={s.profile_container}>
				<textarea
					name=''
					id=''
					cols='30'
					rows='10'
					className={s.textarea_post}
				></textarea>

				<button className={s.button_post}>Add post</button>
				<button className={s.button_post}>Remove post</button>
			</div>

			<hr className={s.border_line} />

			<div className={s.profile_container}>
				<Post />
				<Post />
				<Post />
				<Post />
			</div>
		</div>
	);
};

export default Profile_posts;
