import type { PropsWithChildren } from 'react';
import { createContext, useContext, useMemo } from 'react';

import defaultRepositoryValues from 'src/app/contexts/repositories/defaultRepositories';
import type AbstractEditionRepository from 'src/repositories/abstractRepositories/AbstractEditionRepository';

const RepositoryProvider: React.FC<RepositoryProviderType> = ({ children, repositories }: RepositoryProviderType) => {
  const value = useMemo<RepositoryValues>(() => repositories, [repositories]);
  return <RepositoryContext.Provider value={value}>{children}</RepositoryContext.Provider>;
};

export type RepositoryValues = {
  editionRepository: AbstractEditionRepository;
};
type RepositoryProviderType = PropsWithChildren & {
  repositories: RepositoryValues;
};

const RepositoryContext: React.Context<RepositoryValues> = createContext<RepositoryValues>(defaultRepositoryValues);
export const useRepositoryContext = () => useContext(RepositoryContext);

export default RepositoryProvider;
