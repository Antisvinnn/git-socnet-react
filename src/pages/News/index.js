import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import NewsContent from '../../components/News/News.jsx';

const News = () => {
	return (
		<div className='root_element_app'>
			<Header />
			<Nav />
			<NewsContent />
		</div>
	);
};

export default News;
