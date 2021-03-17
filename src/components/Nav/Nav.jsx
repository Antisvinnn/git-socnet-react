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
				<Link to='/news' className={s.nav_link}>
					News
				</Link>
			</div>
			<div className={s.nav_link_item}>
				<Link to='/dialogs' className={s.nav_link}>
					Messages
				</Link>
			</div>
			<div className={s.nav_link_item}>
				<Link to='/settings' className={s.nav_link}>
					Settings
				</Link>
			</div>
			<div className={s.nav_link_item}>
				<Link to='/music' className={s.nav_link}>
					Music
				</Link>
			</div>
		</nav>
	);
};

export default Nav;
