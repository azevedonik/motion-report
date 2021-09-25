import { AxiosResponse } from 'axios';
import { HttpAgent } from './';

export enum RestMethod {}

export abstract class BaseRepositoryRest<T> {
  public readonly urlPath: string;
  private httpAgent: HttpAgent;

  constructor(urlPath: string) {
    this.urlPath = urlPath.indexOf('/') === 0 ? urlPath : `/${urlPath}`;
    this.httpAgent = new HttpAgent();
  }

  // Basic CRUD

  public get(id: string): Promise<AxiosResponse<T>> {
    return this.httpAgent.agent.get<T>(this.concatPath(this.urlPath, id));
  }

  public getAll(): Promise<AxiosResponse<T[]>> {
    return this.httpAgent.agent.get<T[]>(this.urlPath);
  }

  public update(object: T, id: string): Promise<AxiosResponse<T>> {
    return this.httpAgent.agent.put<T>(this.urlPath, object);
  }

  public delete(id: string) {
    return this.httpAgent.agent.delete(this.urlPath);
  }

  public create(object: T) {
    return this.httpAgent.agent.post<T>(this.urlPath, object);
  }

  // Helpers

  private concatPath(...paths: string[]) {
    return paths.join('/');
  }
}
