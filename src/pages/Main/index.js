import React from 'react';
import Header from '../../components/Header/Header.jsx';
import Nav from '../../components/Nav/Nav.jsx';
import Profile from '../../components/Profile/Profile.jsx';

const Main = () => {
	return (
		<div className='root_element_app'>
			<Header />
			<Nav />
			<Profile />
		</div>
	);
};

export default Main;
