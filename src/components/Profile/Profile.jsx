/* eslint-disable react/jsx-pascal-case */
import s from './Profile.module.css';
import Profile_posts from './Profile_posts/Profile_posts.jsx';
import Profile_info from './Profile_info/Profile_info.jsx';

const Content = (props) => {
	return (
		<div className={s.profile_content}>
			<Profile_info
				description='dsdsasdadsadasdasdasddn d ansd ja
			 sdjasdj asdj asjd ja sj adsjsadj aj f f f f f f f dsj sdasd'
			/>

			<hr className={s.border_line} />

			<Profile_posts posts={props.posts} />
		</div>
	);
};

export default Content;
