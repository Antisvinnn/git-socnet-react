import Post from './Post/Post';
import s from './Profile_posts.module.css';
import { Button } from 'antd';
import { Input } from 'antd';

let Posts_data = [
	{ message: 'Hello', like_count: 2 },
	{ message: 'Good bye', like_count: 22 },
	{ message: 'It is my first comment to you', like_count: 122 },
	{ message: 'Um vathasay', like_count: 223567 },
	{ message: 'Um vathasay', like_count: 223567 },
	{ message: 'Um vathasay', like_count: 223567 },
	{ message: 'Um vathasay', like_count: 223567 },
	{ message: 'Um vathasay', like_count: 223567 },
	{ message: 'Um vathasay', like_count: 223567 },
	{ message: 'Um vathasay', like_count: 223567 },
	{ message: 'Um vathasay', like_count: 223567 },
	{ message: 'Um vathasay', like_count: 223567 },
	{ message: 'Um vathasay', like_count: 223567 },
];

// MAPPING
let Posts = Posts_data.map((post) => {
	return <Post message={post.message} like_count={post.like_count} />;
});

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
			<div className={s.profile_container}>{Posts}</div>
		</div>
	);
};

export default Profile_posts;
