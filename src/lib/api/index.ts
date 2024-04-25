import axios from 'axios';
import { authApi } from './authApi';
import { bookApi } from './bookApi';

axios.defaults.baseURL = 'https://readjourney.b.goit.study/api';

const client = {
  authApi,
  bookApi,
};

export default client;
