import s from './Profile_posts.module.css';
import { Button } from 'antd';
import { Input } from 'antd';
import Post from './Post/Post.jsx';

const Profile_posts = (props) => {
	// MAPPING
	let Posts = props.posts.map((post) => {
		return <Post message={post.message} like_count={post.like_count} />;
	});

	return (
		<div className={s.profile_posts}>
			<div className={s.profile_container}>
				{/* TEXTAREA INPUT */}
				<Input className={s.input_area} placeholder='Type your text' />
				<br />
				{/* BUTTONS */}
				<Button className={s.main_button} type='primary'>
					Apply
				</Button>
				<Button>Dismiss</Button>
			</div>

			<hr className={s.border_line} />

			{/* POSTS */}
			<div className={s.profile_container}>{Posts}</div>
		</div>
	);
};

export default Profile_posts;
