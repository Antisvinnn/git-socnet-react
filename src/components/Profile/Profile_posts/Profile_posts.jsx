import s from './Profile_posts.module.css';
import { Button } from 'antd';
import { Input } from 'antd';
import Post from './Post/Post.jsx';

const Profile_posts = ({ posts }) => {
	let Posts = posts.map((post, i) => {
		return (
			<Post key={i} message={post.message} like_count={post.like_count} />
		);
	});
	return (
		<div className={s.profile_posts}>
			<div className={s.profile_container}>
				{/* TEXTAREA INPUT */}
				<Input className={s.input_area} placeholder='Type your text' />
				<br />
				{/* BUTTONS */}
				<Button className={s.main_button} type='default'>
					Apply
				</Button>
				<Button color='red' colorHover='gren'>
					Dismiss
				</Button>
			</div>

			<hr className={s.border_line} />

			{/* POSTS */}
			<div className={s.profile_container}>{Posts}</div>
		</div>
	);
};

export default Profile_posts;
