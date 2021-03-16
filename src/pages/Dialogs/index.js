import React from 'react';
import Header from '../../components/Header/Header.jsx';
import Nav from '../../components/Nav/Nav.jsx';
import DialogsContent from '../../components/Dialogs/Dialogs.jsx';

const Dialogs = () => {
	return (
		<div className='root_element_app'>
			<Header />
			<Nav />
			<DialogsContent />
		</div>
	);
};

export default Dialogs;
