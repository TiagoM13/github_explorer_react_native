import axios from 'axios';
import { GITHUB_API } from '@env';

export const api = axios.create({
  baseURL: GITHUB_API,
});
