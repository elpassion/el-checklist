import axios from 'axios';

const config = {
  baseURL: 'https://5d31b89f4901b4001401a2af.mockapi.io',
};

export const client = axios.create(config);
