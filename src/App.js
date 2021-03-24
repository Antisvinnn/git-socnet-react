import { Route, Switch } from 'react-router';
import './App.css';
import Music from './pages/Music/index.js';
import Dialogs from './pages/Dialogs/index';
import Main from './pages/Main/index';
import News from './pages/News/index';
import Settings from './pages/Settings/index';
import Dialogs_non_active from './pages/Dialogs_non_active/index';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import Friends from './components/Profile/Friends/Friends';

const App = (props) => {
	return (
		<div className='root_element_app'>
			<Header />
			<Nav />
			<Friends friends={props.state.Profile_page.Friends} />

			<Switch>
				<Route
					exact
					path='/'
					render={() => <Main state={props.state.Profile_page} />}
				/>
				<Route
					exact
					path='/dialogs'
					render={() => (
						<Dialogs Dialogs_page={props.state.Dialogs_page} />
					)}
				/>
				<Route path='/dialogs' component={Dialogs_non_active} />
				<Route exact path='/music' component={Music} />
				<Route exact path='/news' component={News} />
				<Route exact path='/settings' component={Settings} />
			</Switch>
		</div>
	);
};

export default App;
