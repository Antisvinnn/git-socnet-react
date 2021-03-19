import Post from './Post/Post';
import s from './Profile_posts.module.css';
import { Button } from 'antd';
import { Input } from 'antd';

const Posts_data = [
	{ message: 'Hello', like_count: 2 },
	{ message: 'Good bye', like_count: 22 },
	{ message: 'It is my first comment to you', like_count: 122 },
	{ message: 'Um vathasay', like_count: 223567 },
];

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
			<div className={s.profile_container}>
				<Post
					message={Posts_data[0].message}
					like_count={Posts_data[0].like_count}
				/>
				<Post
					message={Posts_data[1].message}
					like_count={Posts_data[1].like_count}
				/>
				<Post
					message={Posts_data[2].message}
					like_count={Posts_data[2].like_count}
				/>
				<Post
					message={Posts_data[3].message}
					like_count={Posts_data[3].like_count}
				/>
			</div>
		</div>
	);
};

export default Profile_posts;
