import s from './Profile_posts.module.css';
import { Button, Form, Input } from 'antd';
import Post from './Post/Post.jsx';
import React from 'react';

const Profile_posts = (props) => {
	let Posts = props.posts.map((post, i) => {
		return (
			<Post key={i} message={post.message} like_count={post.like_count} />
		);
	});
	let beforeAddPost = (values) => {
		// console.log(values.input);
		props.addPost(values.input);
	};
	let onChange = (values) => {
		// console.log(props.newPostText);
		props.onChengeText(values.nativeEvent.data);
	};

	return (
		<div className={s.profile_posts}>
			<Form
				labelCol='offset'
				className={s.Form}
				name='basic'
				onFinish={beforeAddPost}
			>
				{/* TEXTAREA INPUT */}
				<Form.Item className={s.form_item} name='input'>
					<Input
						value={props.newPostText}
						onChange={onChange}
						maxLength='200'
						allowClear
						size='middle'
						className={s.input_area}
						placeholder='Type your text'
					/>
				</Form.Item>
				{/* BUTTONS */}
				<div className={s.container_to_buttons}>
					<Form.Item className={s.form_item} name='button'>
						<Button
							htmlType='submit'
							className={s.main_button}
							type='primary'
						>
							Apply
						</Button>
					</Form.Item>
				</div>
			</Form>

			<hr className={s.border_line} />

			{/* POSTS */}
			<div className={s.profile_container}>{Posts}</div>
		</div>
	);
};

export default Profile_posts;
