import s from './Header.module.css';

const Header = () => {
	return (
		<header className={s.header}>
			<div className='container'>
				<div className={s.header_inner}>
					<div className={s.header_logo}>
						<img src='http://placehold.it/40' alt='' />
					</div>

					<div className={s.header_text}>Tipovoy-sday.by</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
