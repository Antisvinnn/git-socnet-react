import './App.css';
import Profile from './components/Profile.jsx';
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';

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
