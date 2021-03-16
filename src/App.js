import { Route, Switch } from 'react-router';
import './App.css';
import Dialogs from './pages/Dialogs';
// import Profile from './components/Profile/Profile.jsx';
// import Header from './components/Header/Header.jsx';
// import Nav from './components/Nav/Nav.jsx';
// import Dialogs from './components/Dialogs/Dialogs.jsx';
// import { BrowserRouter, Router } from 'react-router-dom';
import Main from './pages/Main';

const App = () => {
	return (
		<Switch>
			<Route exact path='/' component={Main} />
			<Route exact path='/dialogs' component={Dialogs} />
		</Switch>
	);
};

export default App;
