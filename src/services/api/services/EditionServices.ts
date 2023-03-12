import type { IEdition } from 'src/interfaces/IEdition';
import BaseEditionService from 'src/services/api/abstractServices/AbstractEditionServices';

import type { AxiosInstance } from 'axios';

class EditionServices extends BaseEditionService {
  apiClient: AxiosInstance;

  route = '/edition';

  constructor(baseApiClient: AxiosInstance) {
    super();
    this.apiClient = baseApiClient;
  }

  async getEditions(): Promise<IEdition[]> {
    const {
      data: { editions },
    } = await this.apiClient.get(this.route);
    return editions;
  }

  async getLatestEditions(): Promise<IEdition[]> {
    const {
      data: { editions },
    } = await this.apiClient.get(`${this.route}/get3last`);
    return editions;
  }

  async getEditionById(id: string): Promise<IEdition> {
    const {
      data: { edition },
    } = await this.apiClient.get(`${this.route}/getById/${id}`);
    console.log('Returning the service', edition, id);

    return edition;
  }

  async getNextEvent(): Promise<IEdition> {
    const {
      data: { edition },
    } = await this.apiClient.get(`${this.route}/getNextEdition`);
    console.log('SERVICE NEXT', edition);

    return edition;
  }
}

export default EditionServices;
