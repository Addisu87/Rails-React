import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 2000,
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${token}`
  }
});

export default client;
