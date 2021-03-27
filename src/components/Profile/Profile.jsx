/* eslint-disable react/jsx-pascal-case */
import s from './Profile.module.css';
import Profile_posts from './Profile_posts/Profile_posts.jsx';
import Profile_info from './Profile_info/Profile_info.jsx';

const Content = (props) => {
	return (
		<div className={s.profile_content}>
			<Profile_info description='Hello, this is my page. I like programming and coockies and i lik ypu to :)' />

			<hr className={s.border_line} />

			<Profile_posts
				posts={props.Profile_page.Posts_data}
				newPostText={props.Profile_page.newPostText}
				addPost={props.addPost}
				onChengeText={props.onChengeText}
			/>
		</div>
	);
};

export default Content;
