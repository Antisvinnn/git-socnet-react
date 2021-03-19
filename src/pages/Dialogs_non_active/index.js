import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import Dialogs_other from '../../components/Dialogs/Dialogs_non_active/Dialogs_non_active.jsx';

const Dialogs_non_active = () => {
	return (
		<div className='root_element_app'>
			<Header />
			<Nav />
			<Dialogs_other />
		</div>
	);
};

export default Dialogs_non_active;
