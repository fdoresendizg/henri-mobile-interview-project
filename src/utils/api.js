import axios from 'axios';

import { API_BASE_URL } from '../properties';

export default axios.create({
    baseURL: API_BASE_URL,
    responseType: 'json'
});