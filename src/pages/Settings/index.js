import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import SettingsContent from '../../components/Settings/Settings.jsx';

const Settings = () => {
	return (
		<div className='root_element_app'>
			<Header />
			<Nav />
			<SettingsContent />
		</div>
	);
};

export default Settings;
