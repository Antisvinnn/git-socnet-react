import React from 'react';
import Header from '../../components/Header/Header.jsx';
import Nav from '../../components/Nav/Nav.jsx';
import MusicContent from '../../components/Music/Music.jsx';

const Music = () => {
	return (
		<div className='root_element_app'>
			<Header />
			<Nav />
			<MusicContent />
		</div>
	);
};

export default Music;
