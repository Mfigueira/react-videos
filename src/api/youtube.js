import axios from 'axios';

const API_KEY = 'AIzaSyAMb6-Qk2abtL3Tm-PUC54c6-LPFDAzsqQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: API_KEY,
  },
});
