import Axios from 'axios';

export const axios = Axios.create({
  baseURL: process.env.LOGORA_API_URL,
});
