import s from './Nav.module.css';

const Nav = () => {
	return (
		<nav className={s.nav}>
			<div className={s.nav_link_item}>
				<a
					href='https://google.com'
					className={`${s.nav_link} ${s.active}`}
				>
					Profile
				</a>
			</div>
			<div className={s.nav_link_item}>
				<a href='https://google.com' className={s.nav_link}>
					News
				</a>
			</div>
			<div className={s.nav_link_item}>
				<a href='https://google.com' className={s.nav_link}>
					Messages
				</a>
			</div>
			<div className={s.nav_link_item}>
				<a href='https://google.com' className={s.nav_link}>
					Posts
				</a>
			</div>
			<div className={s.nav_link_item}>
				<a href='https://google.com' className={s.nav_link}>
					Music
				</a>
			</div>
		</nav>
	);
};

export default Nav;
