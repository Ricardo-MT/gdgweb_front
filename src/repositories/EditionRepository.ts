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

    return this.editionService.getEditionById(id);
  }

  async getNextEvent(): Promise<IEdition> {
    return this.editionService.getNextEvent();
  }
}

export default EditionRepository;
