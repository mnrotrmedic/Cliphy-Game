import axios from 'axios';
const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
const APIKEY = "&api_key=GEpLlvx43Yy5aSTYLfGZcsH4pkPInlxp&limit=10&rating=g";

export default {
    search: function (query) {
        return axios.get(BASEURL + query + APIKEY);
    }
}