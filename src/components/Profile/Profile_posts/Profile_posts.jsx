import s from './Profile_posts.module.css';
import { Button } from 'antd';
import { Input } from 'antd';
import Post from './Post/Post.jsx';
import React from 'react';

const Profile_posts = ({ posts }) => {
	let Posts = posts.map((post, i) => {
		return (
			<Post key={i} message={post.message} like_count={post.like_count} />
		);
	});
	let newPostElement = React.createRef();
	let addPost = () => {
		let text = newPostElement.current.value;
		alert(text); //undefined
	};
	return (
		<div className={s.profile_posts}>
			<div className={s.profile_container}>
				{/* TEXTAREA INPUT */}
				<Input
					size='middle'
					ref={newPostElement}
					className={s.input_area}
					placeholder='Type your text'
				/>
				<br />
				{/* BUTTONS */}
				<Button className={s.main_button} type='primary' onClick={addPost}>
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
