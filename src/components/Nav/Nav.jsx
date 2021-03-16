import { Link } from 'react-router-dom';
import s from './Nav.module.css';

const Nav = () => {
	return (
		<nav className={s.nav}>
			<div className={s.nav_link_item}>
				<Link to='/' className={s.nav_link}>
					Profile
				</Link>
			</div>
			<div className={s.nav_link_item}>
				<a href='https://google.com' className={s.nav_link}>
					News
				</a>
			</div>
			<div className={s.nav_link_item}>
				<Link to='/dialogs' className={s.nav_link}>
					Messages
				</Link>
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
