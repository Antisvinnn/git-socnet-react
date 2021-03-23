import React from 'react';
import Profile from '../../components/Profile/Profile.jsx';

const Main = (props) => {
	return <Profile posts={props.state} />;
};

export default Main;
