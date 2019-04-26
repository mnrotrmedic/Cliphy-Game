import axios from 'axios';
const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
const APIKEY = "&api_key=GEpLlvx43Yy5aSTYLfGZcsH4pkPInlxp&limit=1&rating=pg";

export default {
    search: function (query) {
        return axios.get(BASEURL + query + APIKEY);
    }
}