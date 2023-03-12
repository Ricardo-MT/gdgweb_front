import type { IEdition } from 'src/interfaces/IEdition';
import AbstractEditionRepository from 'src/repositories/abstractRepositories/AbstractEditionRepository';
import type EditionServices from 'src/services/api/services/EditionServices';

class EditionRepository extends AbstractEditionRepository {
  editionService: EditionServices;

  constructor(baseEditionService: EditionServices) {
    super();
    this.editionService = baseEditionService;
  }

  async getEditions(): Promise<IEdition[]> {
    return this.editionService.getEditions();
  }

  async getLatestEditions(): Promise<IEdition[]> {
    return this.editionService.getLatestEditions();
  }

  async getEditionById(id: string): Promise<IEdition> {
    console.log('FETCHING THE REPOSITORY');
    const res = await this.editionService.getEditionById(id);
    console.log('DONE', res);

    return res;
  }

  async getNextEvent(): Promise<IEdition> {
    console.log('FETCHING NEXT');
    return this.editionService.getNextEvent();
  }
}

export default EditionRepository;
