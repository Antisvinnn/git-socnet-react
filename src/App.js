import './App.css';
import Profile from './components/Profile/Profile.jsx';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';

const App = () => {
	return (
		<div className='root_element_app'>
			<Header />
			<Nav />
			<Profile />
		</div>
	);
};

export default App;
