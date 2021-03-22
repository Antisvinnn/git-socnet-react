import s from './Profile_posts.module.css';
import { Button } from 'antd';
import { Input } from 'antd';

const Profile_posts = (props) => {
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
			<div className={s.profile_container}>{props.posts}</div>
		</div>
	);
};

export default Profile_posts;
