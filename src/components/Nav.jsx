import './Nav.css';

const Nav = () => {
	return (
		<nav className='nav'>
			<div className='nav_link_item'>
				<a href='https://google.com' className='nav_link'>
					Profile
				</a>
			</div>
			<div className='nav_link_item'>
				<a href='https://google.com' className='nav_link'>
					News
				</a>
			</div>
			<div className='nav_link_item'>
				<a href='https://google.com' className='nav_link'>
					Messages
				</a>
			</div>
			<div className='nav_link_item'>
				<a href='https://google.com' className='nav_link'>
					Posts
				</a>
			</div>
			<div className='nav_link_item'>
				<a href='https://google.com' className='nav_link'>
					Music
				</a>
			</div>
		</nav>
	);
};

export default Nav;
