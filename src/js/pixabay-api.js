import axios from "axios";

export default function getImagesByQuery(query) {
const API_KEY = "50855341-73893dbf730abd886a634fcbe";


const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
});

return axios.get(`https://pixabay.com/api/`, { params })
        .then(response => response.data)
}