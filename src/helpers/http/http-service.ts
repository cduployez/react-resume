import { ConfigService } from '../config/config-service';
import axios, { AxiosInstance } from 'axios';

export class HttpService {
  constructor(
    private readonly configService: ConfigService,
    private readonly serviceUrl: `/${string}`
  ) {}

  createClient(): AxiosInstance {
    const headers = {
      Accept: 'application/json'
    };
    return axios.create({
      baseURL: this.configService.backResumeUrl,
      timeout: 31000,
      headers: headers
    });
  }

  /**
   * Perform REST GET operation
   *
   * @param url Operation part of the URL
   * @param mapFunction Function to map deserialized JSON to front-end DTO
   * @param params  HTTP parameters to add to the request (optional)
   * @type J Object deserialized from REST JSON transfered from backend
   * @type D DTO
   * @returns Observable of D
   */
  httpGet<J, D>(
    url: string,
    mapFunction: (json: J) => D,
    params?: { [key: string]: object }
  ): Promise<D> {
    return this.createClient()
      .get<J>(this.url(url), { params })
      .then(response => mapFunction(response.data));
  }

  /**
   * Get the full URL to call the back-end service for a specific operation
   *
   * @param url Operation part of the URL
   * @returns Full URL using baseUrl, serviceUrl and operationUrl
   */
  private url(url: string): string {
    return `${this.serviceUrl}${url}`;
  }
}
