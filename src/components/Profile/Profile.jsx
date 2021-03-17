import s from './Profile.module.css';
import Profile_posts from './Profile_posts/Profile_posts.jsx';

const Content = () => {
	return (
		<div className={s.profile_content}>
			<div className={s.profile_container}>
				<img
					className={s.background_profile_img}
					src='https://placehold.it/1920'
					alt=''
				></img>
				<div className={s.ava}>AVA+discription</div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sit
					voluptatibus doloribus sunt omnis, sint accusamus adipisci.
					Quibusdam consequuntur autem rem perspiciatis? Voluptate, dolores
					saepe, aspernatur ipsam aut laudantium numquam qui eos nulla
					consectetur unde blanditiis sapiente veritatis ut amet. Vitae
					quia culpa reprehenderit minima! Quae rem vero, ipsa quas natus
					sapiente earum. Fugit tenetur velit voluptatum suscipit enim
					nulla corrupti quidem porro aliquam placeat. Deserunt minus
					dolorem placeat reprehenderit asperiores molestias repudiandae
					saepe.
				</p>
			</div>

			<hr className={s.border_line} />

			<Profile_posts />
		</div>
	);
};

export default Content;
