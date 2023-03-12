import type { IEdition } from 'src/interfaces/IEdition';

abstract class BaseEditionService {
  abstract getEditions(): Promise<IEdition[]>;
  abstract getLatestEditions(): Promise<IEdition[]>;
  abstract getEditionById(id: string): Promise<IEdition>;
  abstract getNextEvent(): Promise<IEdition>;
}

export default BaseEditionService;
