import DefaultEditionRepository from 'src/app/contexts/repositories/defaultRepositories/DefaultEditionRepository';
import type { RepositoryValues } from 'src/app/contexts/repositories/repositoriesContext';

const defaultRepositoryValues: RepositoryValues = {
  editionRepository: new DefaultEditionRepository(),
};

export default defaultRepositoryValues;
