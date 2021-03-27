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
		props.addPost(values.input);
	};
	let onChengeText = () => {
		props.onChengeText();
	};

	return (
		<div className={s.profile_posts}>
			<div className={s.profile_container}>
				<Form
					labelCol='offset'
					className={s.Form}
					name='basic'
					onFinish={beforeAddPost}
				>
					{/* TEXTAREA INPUT */}
					<Form.Item name='input'>
						<Input
							value='asassss'
							// onChange={onChengeText}
							id='opopo'
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
