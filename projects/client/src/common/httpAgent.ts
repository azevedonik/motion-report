import axios, { AxiosInstance } from 'axios';
import { CONFIG } from '../config';

export class HttpAgent {
  private static agent: AxiosInstance;

  get agent(): AxiosInstance {
    if (!HttpAgent.agent) {
      HttpAgent.agent = axios.create({
        baseURL: CONFIG.REST_API,
      });
    }
    return HttpAgent.agent;
  }
}
