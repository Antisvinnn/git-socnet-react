import React from 'react';
import Profile from '../../components/Profile/Profile.jsx';

const Main = (props) => {
	return (
		<Profile
			Profile_page={props.Profile_page}
			addPost={props.addPost}
			onChengeText={props.onChengeText}
		/>
	);
};

export default Main;
