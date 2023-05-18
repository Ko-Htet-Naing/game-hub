import axios from "axios";

const axiosInstance = axios.create({
baseURL : 'https://api.rawg.io/api',
params: {
  key : 'd1cc63b7dd8d4d229b6b67f287e098d3',
}
});

export default axiosInstance;
 