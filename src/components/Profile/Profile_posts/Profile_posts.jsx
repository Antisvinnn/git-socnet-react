import s from './Profile_posts.module.css';
import { Button, Form, Input } from 'antd';
import Post from './Post/Post.jsx';
import React from 'react';

const Profile_posts = ({ posts }) => {
	let Posts = posts.map((post, i) => {
		return (
			<Post key={i} message={post.message} like_count={post.like_count} />
		);
	});
	let addPost = (values) => {
		console.log(values.input);
		alert(values.input);
	};
	console.log('Render');
	return (
		<div className={s.profile_posts}>
			<div className={s.profile_container}>
				<Form className={s.Form} name='basic' onFinish={addPost}>
					{/* TEXTAREA INPUT */}
					<Form.Item name='input'>
						<Input
							size='middle'
							className={s.input_area}
							placeholder='Type your text'
						/>
					</Form.Item>
					{/* BUTTONS */}
					<div className={s.containerToButtons}>
						<Form.Item name='button'>
							<Button
								htmlType='submit'
								className={s.main_button}
								type='primary'
							>
								Apply
							</Button>
						</Form.Item>
						<Form.Item name='dissmis_button'>
							<Button>Dismiss</Button>
						</Form.Item>
					</div>
				</Form>
			</div>

			<hr className={s.border_line} />

			{/* POSTS */}
			<div className={s.profile_container}>{Posts}</div>
		</div>
	);
};

export default Profile_posts;
