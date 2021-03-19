import Post from './Post/Post';
import s from './Profile_posts.module.css';
import { Button } from 'antd';
import { Input } from 'antd';

const Profile_posts = () => {
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
