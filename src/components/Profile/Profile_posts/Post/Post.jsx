import s from './Post.module.css';

const Post = (props) => {
	console.log(props);
	return (
		<div className={s.post}>
			<img className={s.avatar_post} src='http://placehold.it/55' alt='' />
			<div className={s.profile_posts_text}>
				{props.message} <br />
				<span>лайки: {props.like_count}</span>
			</div>
		</div>
	);
};

export default Post;
