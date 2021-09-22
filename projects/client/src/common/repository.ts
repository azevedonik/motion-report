import axios, { AxiosResponse } from 'axios';
import { CONFIG } from '../config';

export enum RestMethod {}

export class BaseRepositoryRest<T> {
  public urlPath: string;
  private baseUrl: string;

  constructor(urlPath: string, baseUrl?: string) {
    this.urlPath = urlPath;
    this.baseUrl = baseUrl || CONFIG.REST_API;
  }

  // Basic CRUD

  public get(id: string): Promise<AxiosResponse<T>> {
    return axios.get<T>(this.concatPath(this.apiUrl, id));
  }

  public getAll(): Promise<AxiosResponse<T[]>> {
    return axios.get<T[]>(this.apiUrl);
  }

  public update(object: T, id: string) {
    return axios.put<T>(this.concatWithId(id), object);
  }

  public delete(id: string) {
    return axios.delete(this.concatWithId(id));
  }

  public create(object: T) {
    return axios.post<T>(this.apiUrl, object);
  }

  // Helpers

  private get apiUrl() {
    return this.concatPath(this.baseUrl, this.urlPath);
  }

  private concatWithId(id: string) {
    return this.concatPath(this.apiUrl, id);
  }

  private concatPath(...paths: string[]) {
    return paths.join('/');
  }
  
}
