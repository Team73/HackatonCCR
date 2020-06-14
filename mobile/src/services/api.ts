import Axios from 'axios';

const api = Axios.create({
  baseURL: 'https://5ee50ba7ddcea00016a3722f.mockapi.io/api/v1',
});

export default api;
