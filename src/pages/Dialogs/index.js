import React from 'react';
import DialogsContent from '../../components/Dialogs/Dialogs.jsx';

const Dialogs = (props) => {
	return (
		<DialogsContent
			Dialogs_page={props.Dialogs_page}
			addMessage={props.addMessage}
		/>
	);
};

export default Dialogs;
