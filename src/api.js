import axios from 'axios';

const searchImages = async (term) => {
    console.log(term);
   const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization:
                'Client-ID Pw4EWU-Nwi7n6a9GCD9Q2A8TIJH538XVoy5DmWy7eJY',
        },
        params: {
            query: term,
        },
    });
    return response.data.results;
};

export default searchImages;