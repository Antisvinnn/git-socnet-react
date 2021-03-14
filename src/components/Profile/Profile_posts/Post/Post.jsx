import s from './Post.module.css';

const Post = () => {
	return (
		<div className={s.post}>
			<img className={s.avatar_post} src='http://placehold.it/55' alt='' />
			<div className={s.profile_posts_text}>Post 1</div>
		</div>
	);
};

export default Post;
