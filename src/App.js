import { Route, Switch } from 'react-router';
import './App.css';
import Music from './pages/Music/index.js';
import Dialogs from './pages/Dialogs';
import Main from './pages/Main';
import News from './pages/News';
import Settings from './pages/Settings';

const App = () => {
	return (
		<Switch>
			<Route exact path='/' component={Main} />
			<Route exact path='/dialogs' component={Dialogs} />
			<Route exact path='/music' component={Music} />
			<Route exact path='/news' component={News} />
			<Route exact path='/settings' component={Settings} />
		</Switch>
	);
};

export default App;
