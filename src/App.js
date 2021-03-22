import { Route, Switch } from 'react-router';
import './App.css';
import Music from './pages/Music/index.js';
import Dialogs from './pages/Dialogs/index';
import Main from './pages/Main/index';
import News from './pages/News/index';
import Settings from './pages/Settings/index';
import Dialogs_non_active from './pages/Dialogs_non_active/index';

const App = (props) => {
	return (
		// ЗДЕСЬ ПРОИСХОДИТ ПЕРЕКЛЮЧЕНИЕ
		<Switch>
			<Route exact path='/' render={() => <Main posts={props.posts} />} />

			<Route
				exact
				path='/dialogs'
				render={() => (
					<Dialogs
						dialogs_users={props.dialogs_users}
						dialogs_messages={props.dialogs_messages}
					/>
				)}
			/>

			<Route path='/dialogs' component={Dialogs_non_active} />

			<Route exact path='/music' component={Music} />

			<Route exact path='/news' component={News} />

			<Route exact path='/settings' component={Settings} />
		</Switch>
	);
};

export default App;
