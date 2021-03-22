import React from 'react';
import Header from '../../components/Header/Header.jsx';
import Nav from '../../components/Nav/Nav.jsx';
import DialogsContent from '../../components/Dialogs/Dialogs.jsx';

const Dialogs = (props) => {
	return (
		<div className='root_element_app'>
			<Header />
			<Nav />
			<DialogsContent
				dialogs_users={props.dialogs_users}
				dialogs_messages={props.dialogs_messages}
			/>
		</div>
	);
};

export default Dialogs;
