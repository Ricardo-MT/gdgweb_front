/* eslint-disable class-methods-use-this */
import type { IEdition } from 'src/interfaces/IEdition';
import AbstractEditionRepository from 'src/repositories/abstractRepositories/AbstractEditionRepository';
import NotImplementedError from 'src/utils/errors/NotImplementedError';

class DefaultEditionRepository extends AbstractEditionRepository {
  async getEditions(): Promise<IEdition[]> {
    throw new NotImplementedError();
  }

  async getLatestEditions(): Promise<IEdition[]> {
    throw new NotImplementedError();
  }

  async getEditionById(id: string): Promise<IEdition> {
    throw new NotImplementedError();
  }

  async getNextEvent(): Promise<IEdition> {
    throw new NotImplementedError();
  }
}

export default DefaultEditionRepository;
