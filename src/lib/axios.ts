import Axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export const axios = Axios.create({
  baseURL: process.env.LOGORA_API_URL,
});
