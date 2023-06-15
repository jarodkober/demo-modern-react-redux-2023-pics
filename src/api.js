import axios from 'axios';

const searchImages = async (term) => {
	const response = await axios.get('https://api.unsplash.com/search/photos', {
		headers: {
			Authorization: 'Client-ID RtagMF-na6gY33qTvK3RWR8jkRt_XJIgHphbFz26jxM'
		},
		params: {
			query: term
		}
	});

	return response.data.results;
};

export default searchImages;
