import s from './Header.module.css';

const Header = () => {
	return (
		<header className={s.header}>
			<div className='container'>
				<div className={s.header_inner}>
					<img
						className={s.header_logo}
						src='http://placehold.it/40'
						alt=''
					/>
					<div className={s.header_text}>TipovoiSdai.by</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
