import axios from "axios";

const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
	search: function ( query ) {
		const res = axios.get('https://dog.ceo/api/breed/' + query + '/images');
		console.log( `res`, res );
    return res;
  }, 
	random: function () {
		const res = axios.get('https://dog.ceo/api/breeds/image/random');
		console.log( `res`, res );
    return res;
  }, 
};
